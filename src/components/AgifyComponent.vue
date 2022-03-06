<template>
  <form @submit.prevent="guessAge">
    <label for="name">Name</label>
    <input id= 'name' name="name" v-model="name"/>
    <p style="color: crimson" v-if="nameValidation">{{nameValidation}}</p>
    <button type="submit" :disabled="isDisabled">Guess</button>
    <br/>
    <template v-if="!nameValidation">
      <span v-if="isLoading">loading...</span>
      <span v-else-if="isError">error during age guessing</span>
      <span v-else-if="agifyData">{{name}}, your age is {{agifyData.age}}</span>
    </template>
  </form>
</template>

<script lang="ts">

/* na stranke je par chyb

- isLoading flag nie je spravne nastaveny pri volani REST API
- uprav validaciu mena aby nepovolila zadanie menej nez 3 znaky (disablovanie buttonu plus validacna hlaska)

 */



// Zlepsenie prevedenim netypovanych objektov na Typescript interface
// ake kniznice pre REST API poznas/si pouzival
// genericky sposob handlovania chyb (401/500...)

// validacia mena na aspon 3 znaky
// pokial validacia nie je splnena, zakaz button
// oprava disablovania buttonu - aktualne nefunguje spravne
// ake validacne frameworky poznas/si pouzival

// **volanie backendu do composition api

import {computed, defineComponent, ref, watch} from "vue";

export default defineComponent({
  name: "AgifyComponent",
  setup() {
    const name = ref('');
    const nameValidation = ref<string>('');
    const agifyData = ref();
    const isLoading = ref(false);
    const isError = ref(false);

    function guessAge() {
      isLoading.value = true;
      isError.value = false;
      fetch('https://api.agify.io/?name=' + name.value).then(res => res.json()).then((data)=>
        agifyData.value = data
      ).catch(() => {
        isError.value = true;
      }).finally(() => {
        isLoading.value = false;
      })
    }

    const isDisabled = computed(() => {
      return nameValidation.value.length > 0 || name.value.length === 0
    })

    watch(name, () => {
      if (name.value.length < 3) {
        nameValidation.value= 'Name is too short ...'
      } else {
       nameValidation.value= ''
      }
    });

    return {
      name,
      nameValidation,
      isDisabled,
      guessAge,
      isLoading,
      isError,
      agifyData
    }
  }

});
</script>
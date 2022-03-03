<template>
  <label for="name">Name</label>
  <input id= 'name' name="name" v-model="name"/>
  <span style="color: crimson" v-if="nameValidation">{{nameValidation}}</span>
  <button @click="guessAge" :disabled="nameValidation.length > 0 || name.length === 0">Guess</button>
  <br/>
  <span v-if="isLoading">loading...</span>
  <span v-else-if="isError">Error during age guessing</span>
  <span v-else-if="agifyData">Your age is {{agifyData.age}}</span>
</template>

<script lang="ts">

// Zlepsenie prevedenim netypovanych objektov na Typescript interface
// ake kniznice pre REST API poznas/si pouzival
// genericky sposob handlovania chyb (401/500...)

// validacia mena na aspon 3 znaky
// pokial validacia nie je splnena, zakaz button
// oprava disablovania buttonu - aktualne nefunguje spravne
// ake validacne frameworky poznas/si pouzival

// volanie backendu do composition api

import { defineComponent, ref, watch} from "vue";

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

    watch(name, () => {
      if (name.value.length < 3) {
        nameValidation.value= 'Meno je príliš krátke'
      } else{
       nameValidation.value= ''
      }
    });

    return {
      name,
      nameValidation,
      guessAge,
      isLoading,
      isError,
      agifyData
    }
  }

});
</script>
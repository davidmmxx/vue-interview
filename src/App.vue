<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <button @click="click">About</button>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

const COMPONENT_NAME='App';
export default defineComponent({
  name: COMPONENT_NAME,
  setup() {

    const {push} = useRouter();

    function click() {
      push({name : 'about'})
    }
    return {
      click
    }
  }

})
</script>

<style>

</style>

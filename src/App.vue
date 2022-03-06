<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <button @click="click">Another page</button>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'App',
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

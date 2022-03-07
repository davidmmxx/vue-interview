<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <button @click="click">Another page</button>
  </nav>
  <div style="margin-top: 20px">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

/* BASIC
- dopln chybajucu funkciu pre button click tak, aby smerovala na routu /about
*/

export default defineComponent({
  name: 'App',
  setup() {
    useRouter();
    return {
    }
  }

})
</script>
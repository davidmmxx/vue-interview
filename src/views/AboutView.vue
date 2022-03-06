<template>
  <div class="about">
    <h1>This page name is |{{route.name}}|</h1>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {useRoute} from "vue-router";

// Vypis meno aktualnej routy na stranku

export default defineComponent({
  name: 'AboutView',
  setup() {
    return {
      route: useRoute()
    }
  }
})

</script>

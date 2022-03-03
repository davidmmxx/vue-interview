<template>
  <AgifyComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgifyComponent from "@/components/AgifyComponent.vue";

export default defineComponent({
  name: 'App',
  components: {
    AgifyComponent
  }
});
</script>
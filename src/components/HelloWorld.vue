<template>
  <div>
{{msg}}
    {{x}}
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const x = computed(() => {
      return 'x';
    })

  return {
    x
  }
  }
}
</script>

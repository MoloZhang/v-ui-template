<template>
  <button :class="prefix">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue';
import { getClsPrefix } from '../../defaultConfig';

export default defineComponent({
  name: 'Button',
  setup() {
    const prefix = getClsPrefix('button');
    return {
      prefix,
    };
  },
});
</script>

<template>
  <div :class="classes">
    <img
      :src="icon"
      class="h-32 mx-auto my-8 w-auto"
    /> 
    <p class="text-home w-3xs text-xl text-center"><slot></slot></p> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      required: true,
      type: String
    },
    top: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    classes(): string {
      const classes = [
        'w-64', 
        'h-72', 
        'bg-white', 
        'rounded-xl', 
        'flex', 
        'flex-col', 
        'items-center',
        'border',
        'border-home'
      ];

      if(this.top) {
        classes.push('mt-9');
      }

      return classes.join(' ')
    }
  }
})
</script>

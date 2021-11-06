<template>
  <td :class="classes">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    '2xs': {
      required: false,
      default: false,
      type: Boolean
    },

    xs: {
      required: false,
      default: false,
      type: Boolean
    },

    sm: {
      required: false,
      default: false,
      type: Boolean
    },

    left: {
      required: false,
      default: false,
      type: Boolean
    },

    right: {
      required: false,
      default: false,
      type: Boolean
    },
  
    background: {
      required: false,
      default: false,
      type: Boolean
    },
    divide:{
      required: false,
      default: false,
      type: Boolean
    },
    center: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  computed: {
    classes(): string {
      const classes = ['border-none', 'align-middle']

      if (this.sm) {
        classes.push('text-sm', 'px-3', 'py-1')
      } else if (this['2xs']) {
        classes.push('text-2xs', 'px-2')
      } else {
        classes.push('text-xs', 'p-3')
      }

      if (this.right) {
        classes.push('text-right')
      } else if (this.center) {
        classes.push('text-center')
      } else if (this.left) {
        classes.push('text-left')
      }
      if(this.divide){
        classes.push('w-1/4');
      }
      if (this.background) {
        classes.push('bg-dark-blue')
      } 

      return classes.join(' ')
    }
  }
})
</script>

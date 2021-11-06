<template>
  <th :class="classes">
    <slot></slot>
  </th>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    right: {
      required: false,
      default: false,
      type: Boolean
    },

    center: {
      required: false,
      default: false,
      type: Boolean
    },

    left: {
      required: false,
      default: false,
      type: Boolean
    },
    xs: {
      required: false,
      default: false,
      type: Boolean
    },
    '2xs': {
      required: false,
      default: false,
      type: Boolean
    },

    background:{
      required: false,
      default: false,
      type: Boolean
    },
    padding:{
      required: false,
      default: false,
      type: Boolean
    },
    width: {
      required: false,
      default: '',
      type: String
    },

    trades: {
      required: false,
      default: false,
      type: Boolean
    },
    flex: {
      required: false,
      default: false,
      type: Boolean
    }
    
  },
  computed: {
    classes(): string {
      const classes = [
        'font-normal',
        'align-middle',
        'leading-tight',
        'bg-transparent',
        'border-none',
        'select-none',
        'whitespace-nowrap',
        'font-poppins'
      ]

      if (this.right) {
        classes.push('text-right')
      } else if (this.center) {
        classes.push('text-center')
      } else if (this.left) {
        classes.push('text-left')
      }

      if (this.xs) {
        classes.push('text-xs', 'text-white','px-3', 'py-3.5', 'opacity-70')
      }

      if (this.background) {
        classes.push('bg-dark-blue')
      }

      if (this.width) {
        classes.push(this.width)
      }

      if (this.trades) {
        classes.push('pl-4', 'py-4')
      }
      if(this.flex){
        classes.unshift('flex','items-center','w-1/4');
      }

      return classes.join(' ')
    }
  }
})
</script>

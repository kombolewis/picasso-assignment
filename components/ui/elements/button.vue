<template>
  <button :class="classes" type="button" class="relative" v-on="$listeners">
    <slot v-if="status && status.isNotLoading()"></slot>
    <span v-if="status && status.isLoading()" class="block w-full">
      <span class="spinner"></span>
    </span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Status } from '@injectivelabs/utils'

export default Vue.extend({
  props: {
    primary: {
      required: false,
      default: false,
      type: Boolean
    },

    secondary: {
      required: false,
      default: false,
      type: Boolean
    },

    red: {
      required: false,
      default: false,
      type: Boolean
    },

    aqua: {
      required: false,
      default: false,
      type: Boolean
    },

    hero: {
      required: false,
      default: false,
      type: Boolean
    },

    home: {
      required: false,
      default: false,
      type: Boolean
    },
     homeWait: {
      required: false,
      default: false,
      type: Boolean
    },

    homeSection: {
      required: false,
      default: false,
      type: Boolean
    },

    heroPrimary: {
      required: false,
      default: false,
      type: Boolean
    },

     heroPrimaryWait: {
      required: false,
      default: false,
      type: Boolean
    },

    heroSecondary: {
      required: false,
      default: false,
      type: Boolean
    },

    heroTertiary: {
      required: false,
      default: false,
      type: Boolean
    },

    text: {
      required: false,
      default: false,
      type: Boolean
    },

    dim: {
      required: false,
      default: false,
      type: Boolean
    },

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

    md: {
      required: false,
      default: false,
      type: Boolean
    },

    lg: {
      required: false,
      default: false,
      type: Boolean
    },

    wide: {
      required: false,
      default: false,
      type: Boolean
    },

    full: {
      required: false,
      default: false,
      type: Boolean
    },

    status: {
      required: false,
      type: Object as PropType<Status>,
      default: () => new Status()
    },

    ghost: {
      required: false,
      default: false,
      type: Boolean
    },

    nonbgcolor: {
      required: false,
      default: false,
      type: Boolean
    },

    disabled: {
      required: false,
      default: false,
      type: Boolean
    },
    background: {
      required: false,
      default: false,
      type: Boolean
    },
    withoutCorner: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  computed: {
    classes(): string {
      const classes = [];

      if(!this.withoutCorner) {
       classes.push('rounded-md');
      }

      classes.push('inline-block', 'no-underline', 'text-center', 'focus:outline-none', 'font-bold');

      if (this.hero) {
        classes.shift()
      }

      if (this.status.isError()) {
        classes.push('border-red-500')
      }

      if (this.status.isLoading()) {
        // classes.push('min-w-btn')
      }

      if (this.wide) {
        classes.push('px-12', 'w-full','primary-btn')
        if (!this.sm) {
          classes.push('py-3')
        }
      }

      if (this.full) {
        classes.push('w-full','font-sora')
        if (!this.sm) {
          classes.push('py-3')
        }
      }

      if (this['2xs']) {
        classes.push('h-4', 'text-2xs', 'py-px', 'leading-none', 'px-1')
      } else if (this.xs) {
        classes.push('h-6', 'text-2xs', 'py-px', 'leading-none', 'px-1')
      } else if (this.sm) {
        if (this.hero) {
          classes.push('h-10', 'leading-normal', 'text-xs', 'px-8')
        } else {
          classes.push('h-8', 'leading-normal', 'text-xs', 'px-4')
        }
      } else if (this.md) {
        if (this.hero) {
          classes.push('h-12', 'text-xs', 'px-6', 'leading-normal')
        } else {
          classes.push('h-10', 'leading-normal', 'px-6', 'text-xs')
        }
      } else if (this.lg) {
        classes.push('h-12', 'text-lg', 'px-6', 'leading-normal')
      } else if(this.home) {
        classes.push('h-14', 'text-white', 'xl:w-40', 'w-60', 'text-lg', 'px-6', 'leading-normal');
      }
      else if(this.homeWait) {
        classes.push('h-14', 'text-white', 'xl:w-44', 'mt-4', 'xl:mt-0', 'w-60', 'text-lg', 'px-6', 'leading-normal');
      }
        else if(this.homeSection) {
        classes.push('h-14', 'text-white', 'w-40', 'text-lg', 'px-6', 'leading-normal');
      }
      else {
        classes.push('h-12', 'px-6', 'text-xs','text-white')
      }

      if (this.primary) {
        // if (this.text) {
        //   classes.push('text-primary-500')
        // } else {
        //   classes.push(
        //     'bg-primary-500',
        //     'text-primary-900',
        //     'hover:bg-primary-600'
        //   )
        // }
        classes.push(
          'primary-btn'
        )
      } else if (this.secondary) {
        classes.push(
          'bg-secondary-500',
          'text-secondary-900',
          'hover:bg-secondary-600'
        )
      } else if (this.red) {
        classes.push('bg-red-500', 'text-white-900', 'hover:bg-red-600')
      } else if (this.aqua) {
        classes.push('bg-aqua-500', 'text-white', 'hover:bg-aqua-600')
      } else if (this.dim) {
        classes.push('bg-dark-700', 'hover:bg-dark-800')
      } else if (this.hero) {
        classes.push(
          'text-white',
          'uppercase',
          'bg-gradient-to-r',
          'from-blue-700',
          'to-primary-500',
          'hover:to-blue-700',
          'hover:from-primary-500',
          
        )
      } else if (this.ghost) {
        classes.push('border border-dark-600 text-white font-bold font-sora hover:text-gray-300')
      } else if(this.heroPrimary) {
        classes.push('primary-btn font-sora')
      }
        else if(this.heroPrimaryWait) {
        classes.push('primary-btn font-sora')
      } else if(this.heroSecondary) {
        classes.push('secondary-btn font-sora')
      } else if(this.heroTertiary) {
        classes.push('tertiary-btn text-home font-sora')
      }

      if (this.status.isLoading()) {
        classes.push('pointer-events-none', 'cursor-not-allowed', 'opacity-75')
      }

      if(this.nonbgcolor){
        classes.push(
          'border-gradient',
          'bg-dark-blueish'
        )
      }
      if (this.disabled) {
        classes.push('pointer-events-none', 'cursor-disabled')
        // if (!this.ghost) {
        //   classes.push('opacity-50')
        // } else {
        //   classes.push('text-white')
        // }
      }

      return classes.join(' ')
    }
  }
})
</script>

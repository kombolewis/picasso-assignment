<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex flex-col items-center pt-8 lg:pt-16 z-40"
  >
    <transition v-if="close" name="fade" appear>
      <div
        class="absolute inset-0 bg-dark-600 opacity-75"
        @click="onClose"
      ></div>
    </transition>

    <transition name="fade-shrink-in" appear>
      <div
        class="
          relative
          w-5/6
          md:w-auto
          max-h-modal
          shadow-inner
          border
          max-w-5xl
          mx-auto
          rounded
          z-20
        "
      >
        <div class="absolute right-10 top-7 -mt-4 -mr-4">
          <button
            v-if="close"
            type="button"
            :class="classes"
            @click.stop="onClose"
          >
            &times;
          </button>
        </div>
        <slot class="overflow-y-auto"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isOpen: {
      required: true,
      type: Boolean
    },

    close: {
      required: false,
      default: true,
      type: Boolean
    },
    login: {
       required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    classes(): string {
      const classes = [
            'w-5',
            'h-5',
            'align-middle',
            'rounded-md',
            'shadow-md',
            'bg-dark-blueish',
            'text-light-pink', 
            'leading-none',
            'hover-scale',
            'outline-none',
            'focus:outline-none',
            'bg-close',
            'bg-cover'
      ]
      if (this.login) {
        classes.push('hidden')
      } 
      return classes.join(' ')
    }
  },

  /**
   * We close the modal on ESC
   */
  mounted() {
    const onEscape = (e: KeyboardEvent) => {
      if (this.isOpen && this.close && e.keyCode === 27) {
        this.onClose()
      }
    }

    document.addEventListener('keydown', onEscape)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },

  methods: {
    onClose() {
      this.$emit('closed')
    }
  }
})
</script>

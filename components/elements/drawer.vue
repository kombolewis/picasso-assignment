<template>
  <div>
    <div
      class="group flex justify-start w-full"
    >
    <span class="cursor-pointer flex-1" @click.stop="toggle">
      <slot name="header" />
      <span class="self-end ml-2 -mt-1">
        <v-ui-icon
          :icon="Icon.Dropdown"
          xs
          class="text-white group-hover:text-gray-200"
          :class="{ 'transform rotate-180': drawerIsOpen }"
        />
      </span>
    </span>
    </div>
    <div v-if="drawerIsOpen">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Icon } from '~/types'

export default Vue.extend({
  props: {
    customHandler: {
      required: false,
      type: Boolean,
      default: false
    },

    customIsOpen: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      Icon,
      isOpen: false
    }
  },

  computed: {
    drawerIsOpen(): boolean {
      return this.customIsOpen || this.isOpen
    }
  },

  methods: {
    toggle() {
      if (this.customHandler) {
        this.$emit('drawer-toggle')
        return
      }
      this.isOpen = !this.isOpen
    }
  }
})
</script>

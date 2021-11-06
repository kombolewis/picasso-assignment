<template>
  <div class="px-6 py-2 w-1/2 sm:w-1/4 md:w-auto md:px-2 lg:px-3 2xl:px-4 flex-grow-0 flex-shrink-0">
    <v-ui-text xs class="text-xs mb-1 w-full text-left block font-sora text-white opacity-30">
      {{ title }}
      <slot name="icon"></slot>
    </v-ui-text>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String
    }
  }
})
</script>

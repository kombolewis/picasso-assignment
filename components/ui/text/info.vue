<template>
  <p class="flex items-center text-xs font-sora font-normal text-white bg-yellow-200 ">
    <v-ui-text muted-md>
      {{ title }}
    </v-ui-text>
    <span class="flex-grow mx-4"></span>
    <v-ui-text emp>
      <slot></slot>
    </v-ui-text>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: true,
      default: '',
      type: String
    }
  }
})
</script>

<template>
  <div :style="{
      position,
      top,
      right,
      zIndex,
      height,
      filter,
      background,
      transform,
      opacity,
      width,
      borderRadius,
      border,
      borderLeft,
      borderBottom, 
      bottom,
      left
      }">
    <img :src="icon" class="h-full"/>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    zIndex: {
      required: false,
      type: String
    },
    border: {
      required: false,
      type: String
    },
    borderLeft: {
      required: false,
      type: String
    },
    borderBottom: {
      required: false,
      type: String
    },
    borderRadius: {
      required: false,
      type: String
    },
    filter: {
      required: false,
      type: String
    },
    opacity: {
      required: false,
      type: String
    },
    background: {
      required: false,
      type: String
    },
    transform: {
      required: false,
      type: String
    },
    icon: {
      required: false,
      type: String
    },
    top: {
      required: false,
      type: String
    },
    left: {
      required: false,
      type: String
    },
    right: {
      required: false,
      type: String
    },
    bottom: {
      required: false,
      type: String
    },
    position: {
      required: false,
      type: String
    },
    height:
    {
      required:false,
      type:String
    },
    width:
    {
      required:false,
      type:String
    },
  }
})
</script>

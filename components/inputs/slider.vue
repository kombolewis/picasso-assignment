
<template>
  <div class="w-full range-wrap flex items-center relative select-none mb-7 mt-4 left-1">
    <input
      id="input"
      ref="input"
      v-model="sliderValue"
      class="range"
      type="range"
      min="0"
      max="100"
      @input="handleChange"
    />
    <div
      id="input1"
      for="distance"
      :value="sliderValue"
      class="range-slider-tooltip"
    >
      <span class="font-sora text-white font-bold text-xs">
        {{ sliderValue ? Number(sliderValue).toFixed(0) : 0 }}%
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { BigNumber } from '@injectivelabs/utils'
import { nextTick } from 'node:process'
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    value: {
      required: false,
      type: String,
      default: ''
    },
    sliderValue: {
      required: false,
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      //sliderValue: 25
    }
  },

  mounted() {
   this.$nextTick(() => {
    this.setSliderPosition(this.sliderValue)
   });
  },

  updated() {
    this.setSliderPosition(this.sliderValue)
  },

  methods: {
    setSliderPosition(progress:Number) {
      const value =  Number(progress);
      const width = document.getElementById('input')?.clientWidth ?? 0
      const toolTipElement = document.getElementById('input1')
      let actualPixels = (value / 100) * width - (toolTipElement?.clientWidth ?? 2) / 2;
      if (progress > 96) {
        actualPixels = actualPixels - 15
      }

      if (progress < 5) {
        actualPixels = actualPixels + 5
      }

      if (toolTipElement !== undefined && toolTipElement !== null) {
        toolTipElement.style.left = `${actualPixels}px`
      }

      const style = this.$refs.input as HTMLInputElement
      style.style.background =
        'linear-gradient(to right, #3617E2 0%, #FC69FB  ' +
        value +
        '%, #242257 ' +
        value +
        '%, #242257 100%)'
    },

    handleChange(e: Event) {
      const target = e.target as HTMLFormElement
      const value = new BigNumber(target.value)
      const progress = target.value;
      this.setSliderPosition(progress);
      this.$emit('input', value.dp(2, BigNumber.ROUND_HALF_CEIL).toFixed())
      this.$emit('onValueChange', progress)
    }
  }
})
</script>

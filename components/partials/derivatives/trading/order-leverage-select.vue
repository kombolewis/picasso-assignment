<template>
<div>
 <!-- <div>
      <v-ui-text class="opacity-40 font-sora text-xsm pb-4 font-normal text-white"
        muted-md
        tag="h3"
        v-bind="{ '2xs': true }"
        v-html="$t('max_leverage', { max: maxLeverage })"
      >
      </v-ui-text>
    </div> -->
  <div class="flex items-center w-full">
    <v-ui-button-select
      v-for="l in leverages"
      :key="`leverage-${l}`"
      :value="leverage"
      :option="l.toString()"
      leveragebtn
      class="flex-1 text-xsm font-sora bg-blueish mx-0.5 border border-commuity"
      @selected="handleOnSelect(l)"
    >
      {{ `${l}x` }}
    </v-ui-button-select>
  </div>
  </div>
</template>

<script lang="ts">
import BigNumber from 'bignumber.js'
import Vue from 'vue'
import ledgerVue from '~/components/wallets/wallets/ledger.vue'
export default Vue.extend({
  props: {
    leverage: {
      type: String,
      required: true
    },

    maxLeverage: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      leverageSteps: [1, 2, 3, 5, 10, 20, 50, 100]
    }
  },

  computed: {
    leverages(): number[] {
      const { leverageSteps, maxLeverage } = this

      return leverageSteps.filter((l) => {
        return new BigNumber(l).lte(maxLeverage)
      })
    }
  },

  methods: {
    handleOnSelect(leverage: number) {
      this.$emit('change', leverage.toString())
    }
  }
})
</script>

<template>
  <div v-if="market" class="table-compact">
    <table class="table bg-light-purple">
      <thead>
        <tr>
          <th is="v-ui-table-th" class="w-1/3" left trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('price') }}</span>
            <v-ui-text  class="uppercase font-normal font-sora text-xs text-white">
              {{ market.quoteToken.symbol }}
            </v-ui-text>
          </th>
          <th is="v-ui-table-th" class="w-1/3" right trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('amount') }}</span>
            <v-ui-text  class="uppercase font-normal font-sora text-xs text-white">
              {{ market.baseToken.symbol }}
            </v-ui-text>
          </th>
          <th is="v-ui-table-th" class="w-1/3" center trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('time') }}</span>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UiSpotMarket } from '~/types'

export default Vue.extend({
  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    }
  }
})
</script>

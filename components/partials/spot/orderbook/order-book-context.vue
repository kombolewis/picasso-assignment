<template>
  <div v-if="market" class="table-compact border-b">
    <table class="table border-t bg-light-purple">
      <thead>
        <tr>
          <th is="v-ui-table-th" class="w-1/3" left trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('price') }}</span>
            <span class="text-white uppercase font-normal text-xs font-sora">
              ({{ market.quoteToken.symbol }})
            </span>
          </th>
          <th is="v-ui-table-th" class="w-1/3" right trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('amount') }}</span>
            <span class="font-bold text-white font-normal uppercase text-xs font-sora">
              ({{ market.baseToken.symbol }})
            </span>
          </th>
          <th is="v-ui-table-th" class="w-1/3 pr-2" right>
            <span class="font-sora text-xs font-normal text-white">{{ $t('total') }}</span>
            <span class="font-bold text-white font-normal uppercase text-xs font-sora">
              ({{ market.quoteToken.symbol }})
            </span>
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

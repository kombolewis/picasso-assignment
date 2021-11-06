<template>
  <div v-if="market" class="table-compact border-b">
    <table class="table border-t bg-light-purple">
      <thead>
        <tr>
          <th is="v-ui-table-th" class="w-1/3" left trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('price') }}</span>
            <span  class="font-normal text-xs font-sora text-white uppercase">
              {{ market.quoteToken.symbol }}
            </span>
          </th>
          <th is="v-ui-table-th" class="w-1/3" right trades>
            <span class="font-sora text-xs font-normal text-white">{{ $t('amount') }}</span>
            <span class="font-normal text-xs font-sora text-white uppercase">
              {{ market.baseToken.symbol }}
            </span>
          </th>
          <th is="v-ui-table-th" class="w-1/3" right>
            <span class="font-sora text-xs font-normal text-white">{{ $t('total') }}</span>
            <span class="font-normal text-xs font-sora text-white uppercase" >
              {{ market.quoteToken.symbol }}
            </span>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UiDerivativeMarket } from '~/types'

export default Vue.extend({
  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    }
  }
})
</script>

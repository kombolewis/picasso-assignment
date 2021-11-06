<template>
  <div class="table-compact table-select max-h-lw overflow-y-auto">
    <div class="w-full py-3 px-2">
      <div class="w-full relative bg-dark-black">
        <v-input
          v-model="filterMarkets"
          :placeholder="$t('filter_markets')"
          class="input-xs w-full"
        >
        </v-input>
        <span class="absolute mr-2 right-2 top-1 mt-1"
          ><v-ui-icon :icon="Icon.SpotSearch" xs class="text-gray-400"></v-ui-icon
        ></span>
      </div>
    </div>
    <!--
      <div slot="context" class="bg-black py-2">
        <div class="flex items-center justify-start">
          <div class="tabs"> 
            <ul role="tablist" class="tablist">
             <v-ui-button class="border border-white focus:border-transparent mx-2">
                <span>{{ $t('BNB Markets') }}</span>
              </v-ui-button>
             <v-ui-button class="border border-white focus:border-transparent mx-2">
                <span>{{ $t('BTC Markets') }}</span>
              </v-ui-button>
              <v-ui-button class="border border-white focus:border-transparent mx-2">
                <span>{{ $t('ALTS Markest') }}</span>
            </v-ui-button>
              <v-ui-button class="border border-white focus:border-transparent mx-2">
                <span>{{ $t('FIAT Markets') }}</span>
              </v-ui-button>
              <v-ui-button class="border border-white focus:border-transparent mx-2">
                <span>{{ $t('ETF') }}</span>
              </v-ui-button>
            </ul>
         </div>
        </div>
      </div> -->
    <div class="table-responsive ">
      <table class="table">
        <thead>
          <tr class="bg-blueish-dark">
            <th is="v-ui-table-th" left class="text-xs font-normal h-14 px-3">
              {{ $t('market') }}
            </th>
            <th is="v-ui-table-th" right class="text-xs font-normal h-14 px-3">
              <v-ui-text>
                {{ $t('last_traded_price') }}
              </v-ui-text>
            </th>
            <th is="v-ui-table-th" right class="text-xs font-normal h-14 px-3">
              <v-ui-text>
                {{ $t('market_change_24h') }}
              </v-ui-text>
            </th>
            <th is="v-ui-table-th" right class="text-xs font-normal h-14 px-3">
              <v-ui-text>
                {{ $t('market_volume_24h') }}
              </v-ui-text>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            is="v-derivative"
            v-for="({ market, summary }, index) in filteredMarkets"
            :key="`derivative-markets-${market.ticker}-${index}`"
            v-bind="{ market, marketSummary: summary }"
            @selected="$emit('selected')"
          ></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Derivative from './derivative.vue'
import {
  UiDerivativeMarket,
  Icon,
  UiDerivativeMarketSummary,
  UiDerivativeMarketAndSummary
} from '~/types'

export default Vue.extend({
  components: {
    'v-derivative': Derivative
  },

  data() {
    return {
      Icon,
      filterMarkets: ''
    }
  },

  computed: {
    markets(): UiDerivativeMarket[] {
      return this.$accessor.derivatives.markets
    },

    marketsSummary(): UiDerivativeMarketSummary[] {
      return this.$accessor.derivatives.marketsSummary
    },

    filteredMarkets(): UiDerivativeMarketAndSummary[] {
      const { filterMarkets, markets, marketsSummary } = this

      const query = filterMarkets.toLowerCase()

      return markets
        .map((market) => {
          return {
            market,
            summary: marketsSummary.find(
              (summary) => summary.marketId === market.marketId
            )
          }
        })
        .filter(({ market, summary }) => {
          const { ticker, quoteDenom } = market
          const satisfiesSearchCondition =
            quoteDenom.toLowerCase().startsWith(query) ||
            ticker.toLowerCase().startsWith(query) ||
            ticker.toLowerCase().indexOf(query)>=0

          return satisfiesSearchCondition && summary !== undefined
        }) as UiDerivativeMarketAndSummary[]
    }
  }
})
</script>

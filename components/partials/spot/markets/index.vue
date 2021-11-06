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
      <div slot="context" class="bg-blue py-2 h-20  flex items-center justify-start">
        <div>
          <div class="tabs"> 
            <ul role="tablist" class="tablist">
             <v-ui-button class="h-8 px-2 border border-light-black focus:border-light-white mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('BNB Markets') }}</span>
              </v-ui-button>
             <v-ui-button class="h-8 px-2 border border-light-black focus:border-light-white mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('BTC Markets') }}</span>
              </v-ui-button>
              <v-ui-button class="h-8 px-2 border border-light-black focus:border-light-white mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('ALTS Markests') }}</span>
            </v-ui-button>
              <v-ui-button class="h-8 px-2 border border-light-black focus:border-light-white mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('FIAT Markets') }}</span>
              </v-ui-button>
              <v-ui-button class="h-8 px-2 border border-light-black focus:border-light-white mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('ETF') }}</span>
              </v-ui-button>
            </ul>
          </div>
        </div>
      </div>-->
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr class="bg-blueish-dark">
            <th is="v-ui-table-th" left class="text-xs font-normal h-14 px-3">
              {{ $t('market') }}
              <!-- <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      />-->
            </th>
            <th is="v-ui-table-th" right class="text-xs font-normal h-14 px-3">
              <v-ui-text>  
                {{ $t('last_traded_price') }}
              </v-ui-text>
              <!--  <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      /> -->
            </th>
            <th is="v-ui-table-th" right class="text-xs font-normal h-14 px-3">
              <v-ui-text>
                {{ $t('market_change_24h') }}
              </v-ui-text>
             <!--  <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      /> -->
            </th>
            <th is="v-ui-table-th" right class="text-xs font-normal h-14 px-3">
              <v-ui-text>
                {{ $t('market_volume_24h') }}
              </v-ui-text>
            <!--   <v-ui-icon
        :icon="Icon.upAndDownSort"
        xs
        class="text-gray-500 group-hover:text-gray-300 p-1"
      /> -->
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            is="v-spot"
            v-for="({ market, summary }, index) in filteredMarkets"
            :key="`spot-markets-${market.ticker}-${index}`"
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
import Spot from './spot.vue'
import {
  UiSpotMarket,
  UiSpotMarketSummary,
  UiSpotMarketAndSummary,
  Icon
} from '~/types'

export default Vue.extend({
  components: {
    'v-spot': Spot
  },

  data() {
    return {
      filterMarkets: '',
      Icon
    }
  },

  computed: {
    markets(): UiSpotMarket[] {
      return this.$accessor.spot.markets
    },

    marketsSummary(): UiSpotMarketSummary[] {
      return this.$accessor.spot.marketsSummary
    },

    filteredMarkets(): UiSpotMarketAndSummary[] {
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
          const { ticker, baseDenom, quoteDenom } = market
          const satisfiesSearchCondition =
            baseDenom.toLowerCase().startsWith(query) ||
            quoteDenom.toLowerCase().startsWith(query) ||
            ticker.toLowerCase().startsWith(query) ||
            ticker.toLowerCase().indexOf(query)>=0

          return satisfiesSearchCondition && summary !== undefined
        }) as UiSpotMarketAndSummary[]
    }
  }
})
</script>

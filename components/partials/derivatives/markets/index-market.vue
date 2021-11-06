<template>
  <div class="table-compact table-select px-0.5 xl:px-4 pb-4">
    <div class="w-full py-2 px-2 xl:py-1">
      <div class="w-full relative xl:hidden">
        <v-input v-model="search" :placeholder="$t('filter_markets')" class="input-xs w-full"></v-input>
        <span class="absolute mr-2 right-2 top-1 mt-1">
          <v-ui-icon :icon="Icon.SpotSearch" xs class="text-gray-400"></v-ui-icon>
        </span>
      </div>
    </div>

    <div class="table-responsive table-compact overflow-y-hidden">
      <!--<div slot="context" class="bg-blue py-2 h-20  flex items-center justify-start">
        <div>
            <div  class="flex">
             <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('BNB Markets') }}</span>
              </v-ui-button>
             <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('BTC Markets') }}</span>
              </v-ui-button>
              <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('ALTS Markets') }}</span>
            </v-ui-button>
              <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('FIAT Markets') }}</span>
              </v-ui-button>
              <v-ui-button without-corner class="h-8 px-2 border border-light-white focus:border-light-black focus:bg-light-blue mx-2">
                <span class="font-poppins font-normal text-sm">{{ $t('ETF') }}</span>
              </v-ui-button>
            </div>
        </div> 
      </div>-->
      <table class="table">
        <thead>
          <tr class="flex w-full justify-between bg-light-blue px-2">
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>{{ $t('market') }}</v-ui-text>
              <v-ui-icon
                :icon="Icon.upAndDownSort"
                xs
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
                @click.stop="sort('market')"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>{{ $t('last_traded_price') }}</v-ui-text>
              <v-ui-icon
                :icon="Icon.upAndDownSort"
                xs
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
                @click.stop="sort('lastPrice')"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>{{ $t('market_change_24h') }}</v-ui-text>
              <v-ui-icon
                :icon="Icon.upAndDownSort"
                xs
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
                @click.stop="sort('change')"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>{{ $t('market_volume_24h') }}</v-ui-text>
              <v-ui-icon
                :icon="Icon.upAndDownSort"
                xs
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
                @click.stop="sort('volume')"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            is="v-derivative"
            v-for="({ market, summary }, index) in sortedMarket"
            :key="`derivative-markets-${market.ticker}-${index}`"
            class="flex justify-between items-center h-12 px-2 h-16 orders"
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
import Derivative from './market-derviative.vue'
import {
  UiDerivativeMarket,
  Icon,
  UiDerivativeMarketSummary,
  UiDerivativeMarketAndSummary,
  UiDerivativeMarketSummaryVars,
  UiDerivativeMarketVars
} from '~/types'

export default Vue.extend({
  components: {
    'v-derivative': Derivative
  },
  props: {
    search: {
      required: false,
      default: '',
      type: String
    }
  },

  data() {
    return {
      Icon,
      sortColumn: '',
      sortOrder: '',
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
      const { search, markets, marketsSummary } = this
      const query = search.toLowerCase()

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
    },
    sortedMarket(): UiDerivativeMarketAndSummary[] {
      const filterMarketsSort = [...this.filteredMarkets];
      if (this.sortColumn) {
        const sortColumn = this.sortColumn as UiDerivativeMarketVars;
        filterMarketsSort.sort((a: UiDerivativeMarketAndSummary, b: UiDerivativeMarketAndSummary) => {
          if (this.sortColumn === 'market') {
            const tempA = a.market.ticker.split('/')[0].toLowerCase()
            const tempB = b.market.ticker.split('/')[0].toLowerCase()
            if (this.sortOrder === 'asc') {
              return tempA > tempB ? 1 : -1
            } else {
              return tempA > tempB ? -1 : 1
            }
          } else {
            const summaryA: UiDerivativeMarketSummary = a.summary;
            const summaryB: UiDerivativeMarketSummary = b.summary;
            const sortSummaryColumn = sortColumn as UiDerivativeMarketSummaryVars;
            if(!summaryA || !summaryB || summaryA[sortSummaryColumn] === undefined || summaryB[sortSummaryColumn]  === undefined) {
              return 0;
            } else if (this.sortOrder === 'asc') {
              return (summaryA[sortSummaryColumn] as number) - (summaryB[sortSummaryColumn] as number)
            } else {
              return (summaryB[sortSummaryColumn] as number) - (summaryA[sortSummaryColumn] as number)
            }
          }
        })
      }
      return filterMarketsSort
    }
  },
  methods: {
    sort(s: UiDerivativeMarketVars) {
      if (this.sortOrder === 'desc' || this.sortOrder === '') {
        this.sortOrder = 'asc'
      } else {
        this.sortOrder = 'desc'
      }
      this.sortColumn = s
    }
  }
})
</script>

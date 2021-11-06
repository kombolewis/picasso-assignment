<template>
  <tr @click.stop="onRowClick">
    <td is="v-ui-table-td" divide class="pl-1">
      <div class="flex items-center">
        <img
          :src="market.baseToken.icon"
          :alt="market.baseToken.name"
          class="w-6 h-6 mr-2"
        /> 
        <div class="leading-none ">
          <span class="text-gray-100 font-semibold text-sm font-poppins ">{{ market.ticker.split('/')[0]}}</span>
          <span class="text-gray-400 text-sm font-normal font-poppins">
            /{{ market.ticker.split('/')[1]}}
          </span>
        </div>
      </div>
    </td>
    <td is="v-ui-table-td"  class="font-normal w-1/4 font-poppins px-4" left>
      <div v-if="lastTradedPrice.gt(0)" class="flex justify-start items-center font-poppins px-7">
        <v-ui-format-price
          v-bind="{
            value: lastTradedPrice,
            decimals: market.priceDecimals,
            class: {
              'text-primary-500': lastPriceChange === Change.Increase,
              'text-accent-500': lastPriceChange === Change.Decrease
            }
          }"
          class="mr-1 font-semibold font-poppins"
        />
        <v-ui-icon
          v-if="[Change.Decrease, Change.Increase].includes(lastPriceChange)"
          xs
          :rotate="lastPriceChange === Change.Decrease"
          :primary="lastPriceChange === Change.Increase"
          :accent="lastPriceChange === Change.Decrease"
          :icon="Icon.Arrow"
        />
      </div>
      <span v-else class="text-gray-500 px-10">&mdash;</span>
    </td>
    <td is="v-ui-table-td" left class="font-normal w-1/5 font-poppins">
      <v-ui-text poppins sm class="text-right font-semibold px-7 font-poppins">
        <v-ui-format-percent
          v-bind="{
            appendPlusSign: true,
            precision: 2,
            value: change.toFixed(),
            class: change.gte(0) ? '  text-primary-500 ' :  'text-red-500'
          }"
        />
      </v-ui-text>
    </td>
    <td is="v-ui-table-td" left class=" px-4 font-normal w-1/4 font-poppins">
      <v-ui-text v-if="volume.gt(0)" class="flex items-center justify-start font-poppins">
        <v-ui-format-number
          v-bind="{
            dontGroupValues: true,
            value: volume,
            decimals: 0
          }"
        />
        <small class="text-xs font-semibold font-poppins text-gray-500 ml-1">{{
          market.quoteToken.symbol
        }}</small>
      </v-ui-text>
      <span v-else class=" text-gray-500 px-6">&mdash;</span>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BigNumberInBase } from '@injectivelabs/utils'
import { ZERO_IN_BASE } from '~/app/utils/constants'
import { UiSpotMarket, Icon, Change, UiSpotMarketSummary } from '~/types'

export default Vue.extend({
  props: {
    market: {
      required: true,
      type: Object as PropType<UiSpotMarket>
    },

    marketSummary: {
      required: true,
      type: Object as PropType<UiSpotMarketSummary>
    }
  },

  data() {
    return {
      Icon,
      Change
    }
  },

  computed: {
    currentMarket(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    currentLastTradedPrice(): BigNumberInBase {
      return this.$accessor.spot.lastTradedPrice
    },

    lastTradedPrice(): BigNumberInBase {
      const {
        market,
        currentMarket,
        currentLastTradedPrice,
        marketSummary
      } = this

      if (!market || !marketSummary) {
        return ZERO_IN_BASE
      }

      if (
        currentMarket &&
        currentMarket.marketId === market.marketId &&
        currentLastTradedPrice
      ) {
        return currentLastTradedPrice
      }

      return new BigNumberInBase(marketSummary.price)
    },

    volume(): BigNumberInBase {
      const { market, marketSummary } = this

      if (!market || !marketSummary) {
        return ZERO_IN_BASE
      }

      return new BigNumberInBase(marketSummary.volume)
    },

    change(): BigNumberInBase {
      const { market, marketSummary } = this

      if (!market || !marketSummary) {
        return ZERO_IN_BASE
      }

      return new BigNumberInBase(marketSummary.change)
    },

    lastPriceChange(): Change {
      const { market, marketSummary } = this

      if (!market || !marketSummary) {
        return Change.NoChange
      }

      if (!marketSummary.lastPrice) {
        return Change.NoChange
      }

      if (
        new BigNumberInBase(marketSummary.lastPrice).eq(marketSummary.price)
      ) {
        return Change.NoChange
      }

      return new BigNumberInBase(marketSummary.price).gte(
        marketSummary.lastPrice
      )
        ? Change.Increase
        : Change.Decrease
    }
  },

  methods: {
    onRowClick() {
      const { market } = this

      this.$emit('selected')
      this.$router.push({
        name: 'spot-spot',
        params: {
          marketId: market.marketId,
          spot: market.slug
        }
      })
    }
  }
})
</script>

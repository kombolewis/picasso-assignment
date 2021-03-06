<template>
  <div v-if="market" class="mt-4 py-4 relative">
    <v-drawer
      :custom-handler="true"
      :custom-is-open="detailsDrawerOpen"
      @drawer-toggle="onDrawerToggle"
    >
      <p slot="header" class="flex justify-between text-base font-normal font-sora">
        <v-ui-text muted-md>
          {{ $t('total') }}
        </v-ui-text>
        <v-ui-text em class="flex text-white font-normal text-base">
          <span class="mr-1">≈</span>
          <v-ui-format-price
            v-bind="{
              value: totalWithFees,
              decimals: market.priceDecimals
            }"
          />
          <small class="text-white font-normal text-base pt-px ml-1">{{
            market.quoteToken.symbol
          }}</small>
        </v-ui-text>
      </p>
      <div class="text-xs mt-2 font-sora">
        <p class="flex justify-between group leading-6 opacity-40">
          <v-ui-text muted-sm class="group-hover:text-white">
            {{ $t('amount') }}
          </v-ui-text>
          <v-ui-text v-if="!amount.isNaN()" muted class="flex items-center">
            <v-ui-format-amount
              v-bind="{
                value: amount,
                decimals: market.quantityDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{ market.baseToken.symbol }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white">
            &mdash;
          </v-ui-text>
        </p>
        <!--<p
          v-if="!orderTypeReduceOnly"
          class="flex justify-between group leading-6 opacity-40"
        >
          <v-ui-text muted-sm class="group-hover:text-white flex items-center">
            {{ $t('liquidation_price') }}
          </v-ui-text>
          <v-ui-text
            v-if="liquidationPrice.gt(0)"
            muted
            class="flex items-center"
          >
            <v-ui-format-price
              v-bind="{
                value: liquidationPrice,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white">
            &mdash;
          </v-ui-text>
        </p> 
        <p
          v-if="!orderTypeReduceOnly"
          class="flex justify-between group leading-6 opacity-40"
        >
          <v-ui-text muted-sm class="group-hover:text-white">
            {{ $t('margin') }}
          </v-ui-text>
          <v-ui-text v-if="margin.gt(0)" muted class="flex items-center">
            <v-ui-format-price
              v-bind="{
                value: margin,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white">
            &mdash;
          </v-ui-text>
        </p>
        <!--
        <p class="flex justify-between group leading-6">
          <v-ui-text muted-sm class="group-hover:text-white">
            {{ $t('notional_value') }}
          </v-ui-text>
          <v-ui-text v-if="notionalValue.gt(0)" muted class="flex items-center">
            <span class="mr-1">≈</span>
            <v-ui-format-price
              v-bind="{
                value: notionalValue,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white">
            &mdash;
          </v-ui-text>
        </p>
        -->
        <p class="flex justify-between group leading-6">
          <v-ui-text muted-sm class="group-hover:text-white flex items-center"
            ><span class="mr-2">{{ $t('fee') }}</span
            ><v-ui-icon
              v-if="feeReturned.gt(0)"
              :icon="Icon.Info"
              class="text-gray-500 hover:text-gray-300"
              :tooltip="
                $t('fee_order_details_note', {
                  feeReturned: feeReturned.toFixed()
                })
              "
              2xs
          /></v-ui-text>
          <v-ui-text v-if="fees.gt(0)" muted class="flex items-center">
            <span class="mr-1">≈</span>
            <v-ui-format-price
              v-bind="{
                value: fees,
                decimals: market.priceDecimals
              }"
              class="text-gray-300"
            />
            <small class="opacity-75 ml-1">{{
              market.quoteToken.symbol
            }}</small>
          </v-ui-text>
          <v-ui-text v-else muted-sm class="group-hover:text-white">
            &mdash;
          </v-ui-text>
        </p>
        <!-- <p class="mt-2">
          <v-ui-text xs muted class="flex items-center">
            {{ $t('worst_price_note', { slippage: slippage.toFixed() }) }}
          </v-ui-text>
        </p> -->
      </div>
    </v-drawer>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BigNumberInBase } from '@injectivelabs/utils'
import Drawer from '~/components/elements/drawer.vue'
import { DerivativeOrderSide, Icon, UiDerivativeMarket } from '~/types'
import { DEFAULT_MAX_SLIPPAGE } from '~/app/utils/constants'

export default Vue.extend({
  components: {
    'v-drawer': Drawer
  },

  props: {
    orderType: {
      required: true,
      type: String as PropType<DerivativeOrderSide>
    },

    total: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    totalWithFees: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    liquidationPrice: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    margin: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    fees: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    feeReturned: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    notionalValue: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    price: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    amount: {
      required: true,
      type: Object as PropType<BigNumberInBase>
    },

    orderTypeReduceOnly: {
      required: true,
      type: Boolean
    },

    detailsDrawerOpen: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      Icon
    }
  },

  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    slippage(): BigNumberInBase {
      return new BigNumberInBase(DEFAULT_MAX_SLIPPAGE)
    }
  },

  methods: {
    onDrawerToggle() {
      this.$emit('drawer-toggle')
    }
  }
})
</script>

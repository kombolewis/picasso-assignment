<template>
  <modal :is-open="isModalOpen" @closed="closeModal">
    <div v-if="market" class="w-full md:w-3xl flex flex-col shadow bg-model bg-no-repeat bg-cover border-solid rounded-md
        border border-light-pink">
      <div class="mb-6 flex flex-wrap">
        <div class="w-full mb-14 px-4 pt-14">
          <h3 class="text-center text-xl font-semibold font-sora mb-4">
            {{ $t('withdraw_modal_title') }}
          </h3>
          <p class="text-sm text-center opacity-60 font-sora font-normal text-white pl-24 pr-28">
            {{ $t('withdraw_modal_note') }}
          </p>
        </div>
        <div class="w-full lg:w-1/2 pl-11 pr-6">
          <h3 class="text-center text-sm font-sora text-white font-normal ">
            {{ $t('withdraw_asset', { asset: market.baseToken.symbol }) }}
          </h3>
          <v-base :balance="baseTokenBalance" />
        </div>
        <div class="w-full lg:w-1/2 lg:border-l border-solid border-light-grey pl-6 pr-11">
          <h3 class="text-center text-sm font-sora text-white font-normal">
            {{ $t('withdraw_asset', { asset: market.quoteToken.symbol }) }}
          </h3>
          <v-quote :balance="quoteTokenBalance" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInBase, BigNumberInWei } from '@injectivelabs/utils'
import VBase from './withdraw/base.vue'
import VQuote from './withdraw/quote.vue'
import ModalElement from '~/components/elements/modal.vue'
import { Modal } from '~/types/enums'
import { UiSpotMarket, UiSubaccount } from '~/types'
import { ZERO_IN_BASE } from '~/app/utils/constants'

export default Vue.extend({
  components: {
    modal: ModalElement,
    VBase,
    VQuote
  },

  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    subaccount(): UiSubaccount | undefined {
      return this.$accessor.account.subaccount
    },

    baseTokenBalance(): BigNumberInBase {
      const { subaccount, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      if (!subaccount) {
        return ZERO_IN_BASE
      }

      const balance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.baseToken.denom.toLowerCase()
      )

      if (!balance) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balance.availableBalance || 0).toBase(
        market.baseToken.decimals
      )
    },

    quoteTokenBalance(): BigNumberInBase {
      const { subaccount, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      if (!subaccount) {
        return ZERO_IN_BASE
      }

      const balance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.quoteToken.denom.toLowerCase()
      )

      if (!balance) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balance.availableBalance || 0).toBase(
        market.quoteToken.decimals
      )
    },

    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.Withdraw]
    }
  },

  methods: {
    closeModal() {
      this.$accessor.modal.closeModal(Modal.Withdraw)
    }
  }
})
</script>

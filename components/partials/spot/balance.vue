<template>
  <v-panel :title="$t('injective_chain_balance')" class="h-full relative ">
    <div v-if="!isUserWalletConnected" class="w-full h-full">
      <v-ui-overlay :shadow="false">
        <p class="text-center">{{ $t('not_connected_balances') }}</p>
      </v-ui-overlay>
    </div>
    <div v-if="isUserWalletConnected && market" class="px-4 h-full pt-3.5 text-xs font-sora">
      <v-ui-text-info
      class="text-sm py-1"
        :title="$t('balance_asset', { asset: market.baseToken.symbol })"
      >
        <v-ui-format-amount
          class="font-normal text-sm"
          v-bind="{
            value: baseTokenBalance
          }"
        />
      </v-ui-text-info>
      <v-ui-text-info
        class="mt-3 text-sm py-1"
        :title="$t('balance_asset', { asset: market.quoteToken.symbol })"
      >
        <v-ui-format-amount
          class="font-normal text-sm"
          v-bind="{
            value: quoteTokenBalance
          }"
        />
      </v-ui-text-info>
    </div>
    <div v-if="isUserWalletConnected" slot="title-context">
      
    <div
      class="w-full
          h-full
          flex
          border-2
          border-pink-main
          rounded-lg
          py-1.5
          px-2
          items-center
          cursor-pointer
          group"
      @click="toggleDropdown"
    >
      <span
        class="
          mr-2
          tracking-wider
          text-md
          flex
          items-center
          select-none
        "
      >
        <span class="text-white text-xs group-hover:text-gray-200 font-sora">
          {{ $t('transfer') }}
        </span>
      </span>
       <v-ui-icon
        :icon="Icon.Dropdown"
        xs
        class="text-white group-hover:text-gray-300"
      /> 
    </div>
    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        v-on-clickaway="closeDropdown"
        class="
          absolute
          -mx-px
          flex
          justify-center
          flex-wrap
          top-12
          right-8
          bg-transfer-border
          bg-no-repeat
          bg-contain
        "
      >
        <div class="pt-5 pl-2 pr-4 pb-5 flex flex-col">
          <!-- <v-ui-button xs primary class="mb-4" @click.stop="openTransferModal">{{
            $t('deposit')
          }}</v-ui-button>
          <v-ui-button xs primary @click.stop="openTakeOutModal">{{
            $t('withdraw')
          }}</v-ui-button> -->
          <p class="font-sora text-sm text-white cursor-pointer pl-1 pt-1.5" @click.stop="openTransferModal">{{$t('deposit')}}</p>
          <p class="font-sora text-sm text-white cursor-pointer pl-1 mt-2"  @click.stop="openTakeOutModal">{{$t('withdraw')}}</p>
            
         </div>  
      </div>
    </transition>
    </div>
  </v-panel>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInBase, BigNumberInWei } from '@injectivelabs/utils'
import { directive as onClickaway } from 'vue-clickaway'
import { BankBalances, Modal, UiSpotMarket, Icon } from '~/types'
import { ZERO_IN_BASE } from '~/app/utils/constants'

export default Vue.extend({

  directives: {
    onClickaway
  },
  data() {
    return {
      Icon,
      isDropdownOpen: false
    }
  },

  computed: {
    market(): UiSpotMarket | undefined {
      return this.$accessor.spot.market
    },

    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    balances(): BankBalances {
      return this.$accessor.bank.balances
    },

    baseTokenBalance(): BigNumberInBase {
      const { balances, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      if (!balances[market.baseDenom]) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balances[market.baseDenom] || 0).toBase(
        market.baseToken.decimals
      )
    },

    quoteTokenBalance(): BigNumberInBase {
      const { balances, market } = this

      if (!market) {
        return ZERO_IN_BASE
      }

      if (!balances[market.quoteDenom]) {
        return ZERO_IN_BASE
      }

      return new BigNumberInWei(balances[market.quoteDenom] || 0).toBase(
        market.quoteToken.decimals
      )
    }
  },

  methods: {
    openTransferModal() {
      this.$accessor.modal.openModal(Modal.Transfer)
    },

    openTakeOutModal() {
      this.$accessor.modal.openModal(Modal.TakeOut)
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },

    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false
      }
    }
  
  }
})
</script>

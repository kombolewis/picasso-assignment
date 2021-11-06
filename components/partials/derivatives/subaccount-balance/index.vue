<template>
  <v-panel :title="$t('subaccount_funds_available')" class="h-full relative">
    <div v-if="!isUserWalletConnected" class="w-full h-full">
      <v-ui-overlay :shadow="false">
        <p class="text-center">{{ $t('not_connected_balances') }}</p>
      </v-ui-overlay>
    </div>
    <div v-if="isUserWalletConnected" class="table-compact">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th is="v-ui-table-th" left xs>
                <span>{{ $t('asset') }}</span>
              </th>
              <th is="v-ui-table-th" center xs>
                <span>{{ $t('available') }}</span>
              </th>
              <th is="v-ui-table-th" right xs>
                <span>{{ $t('balance') }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr is="v-balance" v-if="quoteBalance" :balance="quoteBalance"></tr>
            <tr is="v-balance-empty" v-else></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="isUserWalletConnected" slot="title-context">
      <div class= "w-full h-full flex items-center cursor-pointer group border-2
        border-pink-main
          rounded-lg
          py-1.5
          px-2"
      @click="toggleDropdown">

        <!-- <v-ui-button xs primary text @click.stop="openDepositModal">{{
          $t('deposit')
        }}</v-ui-button>
        <div class="mx-2 w-px h-4 bg-dark-500"></div>
        <v-ui-button xs primary text @click.stop="openWithdrawalModal">{{
          $t('withdraw')
        }}</v-ui-button> -->
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
          z-10
        "
      >
      <div class="pt-5 pl-2 pr-4 pb-3 flex flex-col">
        <p class="font-sora text-sm text-white cursor-pointer pl-1 pt-1.5" @click.stop="openDepositModal">{{$t('deposit')}}</p>
        <p class="font-sora text-sm text-white cursor-pointer pl-1 mt-2" @click.stop="openWithdrawalModal">{{$t('withdraw')}}</p>
      </div>
    </div>
    </transition>
    </div>
  </v-panel>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInWei } from '@injectivelabs/utils'
import { directive as onClickaway } from 'vue-clickaway'
import VBalance from './balance.vue'
import VBalanceEmpty from './balance-empty.vue'
import {
  Modal,
  UiDerivativeMarket,
  UiSubaccount,
  UiSubaccountBalanceWithToken,
  Icon
} from '~/types'
import { UI_DEFAULT_PRICE_DISPLAY_DECIMALS } from '~/app/utils/constants'

export default Vue.extend({
  directives: {
    onClickaway
  },

  components: {
    VBalance,
    VBalanceEmpty
  },

  data() {
    return {
      Icon,
      isDropdownOpen: false
    }
  },
  computed: {
    market(): UiDerivativeMarket | undefined {
      return this.$accessor.derivatives.market
    },

    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    subaccount(): UiSubaccount | undefined {
      return this.$accessor.account.subaccount
    },

    quoteBalance(): UiSubaccountBalanceWithToken | undefined {
      const { subaccount, market } = this

      if (!subaccount || !market) {
        return undefined
      }

      const quoteBalance = subaccount.balances.find(
        (balance) =>
          balance.denom.toLowerCase() === market.quoteDenom.toLowerCase()
      )

      return {
        totalBalance: new BigNumberInWei(
          quoteBalance ? quoteBalance.totalBalance : 0
        ),
        availableBalance: new BigNumberInWei(
          quoteBalance ? quoteBalance.availableBalance : 0
        ),
        displayDecimals: UI_DEFAULT_PRICE_DISPLAY_DECIMALS,
        token: market.quoteToken,
        denom: market.quoteDenom
      }
    }
  },

  methods: {
    openDepositModal() {
      this.$accessor.modal.openModal(Modal.Deposit)
    },

    openWithdrawalModal() {
      this.$accessor.modal.openModal(Modal.Withdraw)
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

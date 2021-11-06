<template>
  <modal :is-open="isModalOpen" @closed="closeModal">
    <div class="w-full md:w-3xl flex flex-col shadow bg-trade bg-no-repeat bg-cover border-solid rounded-md
        border border-light-pink px-1 py-2">
      <div class="flex flex-wrap max-h-scrollAbleModel overflow-y-auto">
        <div class="w-full mb-4 xl:pl-8 xl:pr-24 xl:pt-12 px:10 pt:12">
          <h3 class="text-xl font-semibold font-sora xl:mb-4 mb-6">
            {{ $t('acknowledge_title') }}
          </h3>
          <p class="text-xs text-center opacity-60 font-sora font-normal text-left text-white px-2 xl:px-0">
          Picasso Exchange is a non-custodial relayer built on Injective Protocol. Injective is a decentralized sidechain relayer network which serves as a layer-2 derivatives platform, trade execution coordinator (TEC), and decentralized orderbook built on top of Tendermint using the Cosmos-SDK framework.<br/><br />

          Your use of Picasso involves various risks, including, but not limited to, losses while digital assets are being supplied to Injective order-book or losses due to the fluctuation of prices of tokens in a trading pair.<br/><br />

          By trading on Picasso, you hereby agree, represent and warrant that:<br/>
          </p>
        </div>
        <div class="w-full mb-7 xl:pl-8 xl:pr-10 px-1">
          <div class="bg-dark-blue-main xl:pl-8 xl:pr-5 py-4 px-1 ">
          <p class="text-xs text-center font-sora  text-left font-normal text-white">
            You are not a person or company who is a resident of, national, or is located, incorporated or has a registered agent in, the United States, Canada, China, or any other country to which the United States, the United Kingdom or the European Union embargoes goods or imposes similar sanctions (collectively, “Restricted Territories”).<br/><br/>

            You will not in the future access this site or trade on Picasso while located within the United States or any of the above mentioned countries.<br/><br/>

            You are not using, and will not in the future use, a VPN to mask your physical location from a restricted location.<br/><br/>

            You are lawfully permitted to access this site and trade on spot and derivatives markets under the laws of the jurisdiction in which you reside and are located.<br/><br/>

            You understand the risks associated with entering into cryptocurrencies trading, derivative contracts and using leverage.<br /><br />

            You understand that Picasso is not registered or licensed by the CFTC, SEC, or any financial regulatory authority.
          </p>
          </div>
        </div>
        <div class="w-full mx-auto flex justify-center items-center pl-8 pb-8 pr-10">
            
            <v-ui-button full primary class="font-sora font-semibold text-xs" @click="agree()">{{ $t('i_agree') }}</v-ui-button>
          </div>
        </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { BigNumberInWei } from '@injectivelabs/utils'
import ModalElement from '~/components/elements/modal.vue'
import { Modal } from '~/types/enums'
import { UiSpotMarket, UiSubaccount } from '~/types'
import { ZERO_IN_WEI } from '~/app/utils/constants'

export default Vue.extend({
  props: {
    isOpen: {
      required: true,
      type: Boolean
    },

    close: {
      required: false,
      default: true,
      type: Boolean
    }
  },
  components: {
    modal: ModalElement,
  },

  computed: {
    // market(): UiSpotMarket | undefined {
    //   return this.$accessor.spot.market
    // },

    // subaccount(): UiSubaccount | undefined {
    //   return this.$accessor.account.subaccount
    // },

    // baseTokenBalance(): BigNumberInWei {
    //   const { subaccount, market } = this

    //   if (!market) {
    //     return ZERO_IN_WEI
    //   }

    //   if (!subaccount) {
    //     return ZERO_IN_WEI
    //   }

    //   const balance = subaccount.balances.find(
    //     (balance) =>
    //       balance.denom.toLowerCase() === market.baseToken.denom.toLowerCase()
    //   )

    //   if (!balance) {
    //     return ZERO_IN_WEI
    //   }

    //   return new BigNumberInWei(balance.availableBalance || 0)
    // },

    // quoteTokenBalance(): BigNumberInWei {
    //   const { subaccount, market } = this

    //   if (!market) {
    //     return ZERO_IN_WEI
    //   }

    //   if (!subaccount) {
    //     return ZERO_IN_WEI
    //   }

    //   const balance = subaccount.balances.find(
    //     (balance) =>
    //       balance.denom.toLowerCase() === market.quoteToken.denom.toLowerCase()
    //   )

    //   if (!balance) {
    //     return ZERO_IN_WEI
    //   }

    //   return new BigNumberInWei(balance.availableBalance || 0)
    // },

    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.Acknowledge]
    }
  },

  methods: {
    closeModal() {
      this.$router.push({ name: 'index' })
      this.$accessor.modal.closeModal(Modal.Acknowledge)
    },
    onClose() {
      this.$emit('closed')
       this.$router.push({ name: 'index' })
    },
    agree(){
      const timeInterval = 86400000;
      const now = new Date();
      const item = {
        value: "myLoginTime",
        expiry: now.getTime() + timeInterval
        };
        localStorage.setItem("myLoginTime", JSON.stringify(item));
        this.$accessor.modal.closeModal(Modal.Acknowledge)
    }
  }
})
</script>

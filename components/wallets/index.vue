<template>
  <div class="flex justify-between items-center relative px-3 xl:w-52 py-2">
    <div
    :class="isDropdownOpen ? 'is-active' : ''"
      class="
        select-none
        cursor-pointer
        group
        block
        w-full
        border-2
        border-solid
        rounded-md
        border-lightBlue
        p-4
      "
      @click="toggleDropdown"
    >
      <!-- <v-ui-icon
        :class="isUserWalletConnected ? 'text-primary-500' : 'text-white'"
        :icon="Icon.Wallet"
        lg
        class="mr-4 hidden md:block"
      /> -->
      <div class="whitespace-nowrap">
        <div v-if="!isUserWalletConnected" class="w-full">
            <!-- <p class="text-gray-500 text-2xs leading-none">
              {{ $t('not_connected') }}
            </p> -->
          <p class="text-white text-md font-sora">
            {{ $t('connect_wallet') }}
          </p>
        </div>
        <div v-else class="flex">
          <img :src="`/home/Wallet.svg`" alt="wallet" />
          <div class="ml-2">
          <p class="text-white text-2xs leading-none font-sora">
            {{ $t('connected') }}
          </p>
          <p class="font-bold text-sm text-white font-sora">
            <span>
              {{ formattedAddress }}
            </span>
            <span
              v-clipboard="() => injectiveAddress"
              v-clipboard:success="() => $toast.success($t('address_copied'))"
            >
              <!-- <v-ui-icon
                :icon="Icon.Copy"
                :tooltip="$t('copy_address')"
                class="text-gray-500 hover:text-primary-500"
                stroke-only
                xs
              /> -->
            </span>
          </p>
          </div>
        </div>
      </div>
      <v-ui-icon
        :icon="Icon.Dropdown"
        xs
        class="text-gray-500 group-hover:text-gray-300 ml-4 hidden"
      />
    </div>
    <transition name="fade">
    <div
      v-if="isDropdownOpen"
      v-on-clickaway="closeDropdown"
      :class="classes"
    >
      <div v-if="!isUserWalletConnected" class="pt-8 pr-4 pb-3 pl-3.5 w-52 h-40">
        <v-disclaimer v-if="TRANSFER_RESTRICTIONS_ENABLED" />
        <v-metamask />
        <hr class="border border-solid border-commuity" />
        <v-ledger />
      </div>
      <div v-else class="flex flex-wrap py-6 px-5">
        <!-- <div
          class="
            w-full
            font-semibold
            text-sm
            font-sora
            cursor-pointer
          "
          @click.stop="onTransferNavClick"
        >
          <span>{{ $t('transfer') }}</span>
        </div> -->
        <div
          class="
            w-full
            text-white
            font-sora
            text-sm
            cursor-pointer
            hover:bg-hover300
          "
          @click.stop="onLogoutClick"
        >
          <span>{{ $t('logout') }}</span>
        </div>
      </div>
    </div>
    </transition>
     <modal-login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AccountAddress } from '@injectivelabs/ts-types'
import { Wallet } from '@injectivelabs/web3-strategy'
import { directive as onClickaway } from 'vue-clickaway'
import { formatWalletAddress } from '@injectivelabs/utils'
import VDisclaimer from './disclaimer.vue'
import VMetamask from './wallets/metamask.vue'
import VLedger from './wallets/ledger.vue'
import { TRANSFER_RESTRICTIONS_ENABLED } from '~/app/utils/constants'
import { Icon, Modal } from '~/types'
import ModalLogin from '~/components/partials/login-modal.vue'
import { verifyUserAuthentication } from '~/utils/localStroage'

export default Vue.extend({
  components: {
    VMetamask,
    VLedger,
    VDisclaimer,
    'modal-login': ModalLogin
  },

  directives: {
    onClickaway
  },

  props: {
    landingPage: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      TRANSFER_RESTRICTIONS_ENABLED,
      Icon,
      isDropdownOpen: false,
      Wallet,
    }
  },

  computed: {
    isUserWalletConnected(): boolean {
      return this.$accessor.wallet.isUserWalletConnected
    },

    address(): AccountAddress {
      return this.$accessor.wallet.address
    },

    injectiveAddress(): AccountAddress {
      return this.$accessor.wallet.injectiveAddress
    },

    wallet(): Wallet {
      return this.$accessor.wallet.wallet
    },

    formattedAddress(): string {
      const { injectiveAddress } = this

      return formatWalletAddress(injectiveAddress)
    },

    classes(): string {
      const classes = [
        'absolute',
        'left-auto',
        'mr-0',
        '-mx-px',
        'bg-common-pattern',
        'bg-no-repeat',
        'bg-contain'
      ];

      if(!this.landingPage) {
        classes.push('mt-16', 'top-14', '-right-8')
      } else {
        classes.push('mt-1', 'bg-dark-main', 'top-20', 'mt-2.5')
      }

      return classes.join(' ')
    }
  },

  methods: {
    toggleDropdown() {
      // this.isDropdownOpen = !this.isDropdownOpen
      const authenticate = verifyUserAuthentication();
      if (!authenticate) {
        this.$accessor.modal.openModal(Modal.Login);
         document.body.style.overflow = 'hidden';
      }
      if(authenticate) {
        this.isDropdownOpen = !this.isDropdownOpen
      }
    },
    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false
      }
    },
    onLogoutClick() {
      this.$accessor.wallet.logout()
    },

    onTransferNavClick() {
      this.$accessor.modal.openModal(Modal.TransferOnChain)
    }
  }
})
</script>

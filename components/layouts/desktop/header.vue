<template>
  <header
    :class="classes"
  >
    <div class="xl:hidden flex mr-10 pt-1">
      <img
        :src="`/home/header-mobile-logo.svg`"
        class="cursor-pointer"
        @click.stop="goHome"
      />
    </div>
    <div
      :class="
        !landingPage
          ? 'xl:pt-12 pr-20 xl:block hidden'
          : 'xl:pt-6 xl:mr-12 xl:block hidden'
      "
    >
      <img
        :src="
          !landingPage
            ? `/home/header-desktop-logo.svg`
            : `/home/about-header_logo.svg`
        "
        class="cursor-pointer"
        @click.stop="goHome"
      />
    </div>
    <div class="hidden xl:flex">
      <div class="header-nav relative px-3 py-2.5 flex">
        <span class="mr-2 tracking-wider text-md flex items-center select-none">
          <span
            class="text-white group-hover:text-gray-200 font-sora"
            @click.stop="handleGoToMarket"
          >
            {{ $t('market') }}
          </span>
        </span>
      </div>
    </div>
    <div class="hidden xl:flex">
      <div class="header-nav relative px-3 py-2.5 flex">
        <span class="mr-2 tracking-wider text-md flex items-center select-none">
          <span
            class="text-white group-hover:text-gray-200 font-sora"
            @click.stop="handleGoToPortfolio"
          >
            Portfolio
          </span>
        </span>
      </div>
    </div>
    <div class="hidden xl:flex">
      <v-spot />
    </div>
    <div class="hidden xl:flex">
      <v-derivatives />
    </div>
    <mobile-menu />
    <div class="hidden xl:flex ml-auto">
      <v-about :landingPage="this.landingPage" />
    </div>
    <div class="hidden xl:flex">
      <v-community :landingPage="this.landingPage" />
    </div>
    <div class="hidden xl:flex sm:ml-auto xl:ml-0">
      <wallet-connect :landingPage="this.landingPage" />
    </div>
     <modal-login />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import VSpot from './spot.vue'
import VDerivatives from './derivatives.vue'
import VAbout from './about.vue'
import VCommunity from './community.vue'
import { Modal } from '~/types'
// import Logo from '~/components/layouts/logo.vue'
import MobileMenu from '~/components/layouts/mobile/menu.vue'
import WalletConnect from '~/components/wallets/index.vue'
import ModalLogin from '~/components/partials/login-modal.vue'
import { verifyUserAuthentication } from '~/utils/localStroage';


export default Vue.extend({
  components: {
    // Logo,
    VSpot,
    VDerivatives,
    MobileMenu,
    WalletConnect,
    VAbout,
    VCommunity,
    'modal-login': ModalLogin
  },

  props: {
    landingPage: {
      required: false,
      default: false,
      type: Boolean
    },
    market: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  computed: {
    classes(): string {
      const classes = [
        'w-full',
        'flex',
        'z-30',
        'relative',
        'xl:pb-4',
        'pb-20',
        'pl-24',
        'justify-evenly'
      ]
      /* if(this.market && !this.landingPage){
        classes.push('xl:pl-8','xl:pr-8','xl:pt-0', 'pt-4', 'pr-4', 'xl:max-w-screen-xl 2xl:max-w-screen-laptop-screen','xl:mx-auto')
      } */
      if (!this.landingPage) {
        classes.push('xl:pl-32', 'xl:pt-0', 'pt-4', 'xl:pr-32', 'pr-4','xl:max-w-screen-laptop-screen' ,'xl:mx-auto')
      } else {
        classes.push('xl:pt-1.5', 'pl-8', 'xl:pr-4', 'xl:pl-6', 'pt-4','pr-4','xl:max-w-screen-laptop-screen' ,'xl:mx-auto')
      }

      return classes.join(' ')
    }
  },

  methods: {
    goHome() {
      this.$router.push({ name: 'index' })
    },
    handleGoToMarket() {
      const authenticate = verifyUserAuthentication();
      if (!authenticate) {
        this.$accessor.modal.openModal(Modal.Login);
         document.body.style.overflow = 'hidden';
        }
        else{
        this.$router.push({ name: 'market' })
        }
    },
    handleGoToPortfolio() {
      const authenticate = verifyUserAuthentication();
      if (!authenticate) {
        this.$accessor.modal.openModal(Modal.Login);
         document.body.style.overflow = 'hidden';
        }
        else{
        this.$router.push({ name: 'portfolio' })
        }
    }
  }
})
</script>

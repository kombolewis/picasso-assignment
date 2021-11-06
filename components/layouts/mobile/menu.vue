<template>
  <div class="ml-4 block xl:hidden relative pt-2">
    <button
      :class="isMenuOpen ? 'is-active' : ''"
      class="
        hamburger hamburger--spin
        outline-none
        focus:outline-none
        block
        xl:hidden
      "
      type="button"
      @click.stop="toggleMenu"
    >
      <img :src="!isMenuOpen ? `/home/hamburger-logo.svg` : `/home/hamburger-close.svg`" class="cursor-pointer" />
      <!-- <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span> -->
    </button>

    <div
      v-on-clickaway="closeMenu"
      :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
      class="
        absolute
        top-12
        pl-4
        pr-4
        bg-dark-black
        min-w-xs
        right-0
        border-2
        border-solid
        rounded-xl
      border-light-blue-dark
        flex
        flex-col
      "
    >
      <div class="w-full p-2 mb-4 mt-8">
          <span slot="header" class="cursor-pointer px-2 font-sora text-lg text-white" @click.stop="handleGoToMarket">
            {{ $t('market') }}
          </span>
      </div>
      <div class="p-2 mb-4">
        <v-drawer>
          <span slot="header" class="cursor-pointer px-2 font-sora text-lg text-white">
            {{ $t('spot') }}
          </span>
          <div class="text-xs py-1">
            <v-spot />
          </div>
        </v-drawer>
      </div>
      <div class="mb-4 p-2">
          <v-drawer>
            <span slot="header" class="cursor-pointer px-2 font-sora text-lg text-white">
              {{ $t('derivatives') }}
            </span>
            <div class="text-xs py-1">
              <v-derivatives />
            </div>
          </v-drawer>
      </div>
      <div class="mb-4 p-2">
          <v-drawer>
            <span slot="header" class="cursor-pointer px-2 font-sora text-lg text-white">
              {{ $t('about') }}
            </span>
            <div class="text-xs">
              <v-about />
            </div>
          </v-drawer>
      </div>
      <div class="mb-8 p-2">
          <v-drawer>
            <span slot="header" class="cursor-pointer px-2 font-sora text-lg text-white">
              {{ $t('community') }}
            </span>
            <div class="text-xs py-1">
              <v-community />
            </div>
          </v-drawer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway'
import VAbout from './about-mobile.vue';
import VCommunity from './community-mobile.vue';
import VSpot from '~/components/partials/spot/markets/index-mobile.vue'
import VDerivatives from '~/components/partials/derivatives/markets/index-mobile.vue'
import Drawer from '~/components/elements/drawer.vue'

export default Vue.extend({
  components: {
    'v-drawer': Drawer,
    VSpot,
    VDerivatives,
    VAbout,
    VCommunity
  },

  directives: {
    onClickaway
  },

  data() {
    return {
      isMenuOpen: false
    }
  },

  methods: {
    closeMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    handleGoToMarket() {
      this.$router.push({ name: 'market' })
    }
  }
})
</script>

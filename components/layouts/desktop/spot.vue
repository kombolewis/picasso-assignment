<template>
  <div class="header-nav relative">
    <div
      :class="isDropdownOpen ? 'is-active' : ''"
      class="w-full h-full py-2 flex px-3 items-center cursor-pointer group"
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
        <span class="text-white group-hover:text-gray-200 font-sora">
          {{ $t('spot') }}
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
          -left-40
          top-12
          min-w-xl
          min-h-lg
          mt-12
          py-4
          px-0.5
          rounded rounded-tl-none
          bg-spot-pattern
          bg-no-repeat
          bg-contain
        "
      >
        <v-spot @selected="closeDropdown" />
      </div>
    </transition>
    <modal-login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway'
import VSpot from '~/components/partials/spot/markets/index.vue'
import ModalLogin from '~/components/partials/login-modal.vue'
import { Icon,Modal } from '~/types'
import { verifyUserAuthentication } from '~/utils/localStroage';

export default Vue.extend({
  directives: {
    onClickaway
  },

  components: {
    VSpot,
    'modal-login': ModalLogin
  },

  data() {
    return {
      Icon,
      isDropdownOpen: false
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
    }
  }
})
</script>

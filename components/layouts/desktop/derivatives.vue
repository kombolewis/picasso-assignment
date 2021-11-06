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
        <span class="group-hover:text-gray-200 font-sora">
          {{ $t('derivatives') }}
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
          -left-20
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
        <v-derivatives @selected="closeDropdown" />
      </div>
    </transition>
    <modal-login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway'
import VDerivatives from '~/components/partials/derivatives/markets/index.vue'
import ModalLogin from '~/components/partials/login-modal.vue'
import { Icon,Modal } from '~/types'
import { verifyUserAuthentication } from '~/utils/localStroage';

export default Vue.extend({
  directives: {
    onClickaway
  },

  components: {
    VDerivatives,
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
      this.isDropdownOpen = !this.isDropdownOpen
      //  const authenticate = verifyUserAuthentication();
      //  if (!authenticate) {
      //    this.$accessor.modal.openModal(Modal.Login);
      //   }
    },

    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false
      }
    }
  }
})
</script>

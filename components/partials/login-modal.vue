<template>
  <modal :is-open="isModalOpen" @closed="closeModal">
    <div class="w-full md:w-3xl flex flex-col shadow bg-model bg-no-repeat bg-cover
    border-solid rounded-md
        border border-light-pink px-1">
        <div class="xl:max-h-scrollAbleModel max-h-scrollAbleLogin overflow-y-auto">
        <div class="flex justify-center items-center mt-4">
        <img
        :src="`/home/header-desktop-logo.svg`"
         alt="logo"
      />
    </div>
    <div class="text-center mt-2 font-sora font-semibold">
      <h3>
        Closed Alpha Sign Up
      </h3>
      </div>
      <div class="mb-6 flex flex-wrap">
        <div class="w-full mb-2 px-4 pt-10">
        </div>
      <signUp />
      <login />
    </div>
    <div class="text-center font-sora font-semibold mb-2">
      <h3>
        Join our community
      </h3>
      </div>
    <div class="flex justify-center align-center w-full mb-6 items-center">
      <div class="h-8 w-6 md:mr-4 md:ml-0 mx-4">
        <img
          src="/images/twitter.svg"
          alt="twitter"
          class="h-full cursor-pointer"
          @click.stop="gotwitter"
        />
      </div>
      <div class="h-8 w-6 md:mr-4 md:ml-0 mx-4">
        <img
          src="/images/medium.svg"
          alt="medium"
          class="h-full cursor-pointer"
          @click.stop="gomedium"
        />
      </div>
      <div class="h-8 w-6 md:mr-4 md:ml-0 mx-4">
        <img
          src="/images/discord.svg"
          alt="discord"
          class="h-full cursor-pointer"
          @click.stop="godiscord"
        />
      </div>
    </div>
        </div>
  </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import login from './login.vue'
import signUp from './signUp.vue'
import ModalElement from '~/components/elements/modal.vue'
import { Modal } from '~/types/enums'

export default Vue.extend({
  components: {
    modal: ModalElement,
    login,
    signUp
  },
  computed: {
    isModalOpen(): boolean {
      return this.$accessor.modal.modals[Modal.Login]
    }
  },

  methods: {
    closeModal() {
      this.$router.push({ name: 'index' })
      this.$accessor.modal.closeModal(Modal.Login)
      // window.location.reload();
      document.body.style.overflow = 'unset';
    },
    gotwitter() {
      window.open('https://twitter.com/PicassoExchange', '_blank')
    },
    gomedium() {
      window.open('https://medium.com/@picasso.exchange', '_blank')
    },
    godiscord() {
      window.open('https://discord.gg/WXQpVy4qqz', '_blank')
    }
  }
})
</script>

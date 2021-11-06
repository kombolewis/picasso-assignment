<template>
  <div :class="
  !spotPage
        ? 'pb-4 xl:px-4 xl:mx-auto xl:max-w-screen-laptop-screen pt-11 px-6'
        : 'mb-4 xl:mt-16 mt-16 xl:mb-4 xl:w-full xl:mx-auto xl:max-w-screen-laptop-screen xl:px-32 px-6'
    ">
    <div class="flex justify-center w-full items-center pb-6 border-b border-gray-500 mb-4">
      <div class="h-8 w-6 md:mr-16 md:ml-0 mx-4">
        <img
          src="/images/twitter.svg"
          alt="twitter"
          class="h-full cursor-pointer"
          @click.stop="gotwitter"
        />
      </div>
      <div class="h-8 w-6 md:mr-16 md:ml-0 mx-4">
        <img
          src="/images/medium.svg"
          alt="medium"
          class="h-full cursor-pointer"
          @click.stop="gomedium"
        />
      </div>
      <div class="h-8 w-6 md:mr-16 md:ml-0 mx-4">
        <img
          src="/images/github.svg"
          alt="github"
          class="h-full cursor-pointer"
          @click.stop="gogithub"
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
    <div class="flex items-center flex-nowrap">
      <div class="flex order-1 w-1/2 xl:pl-1 xl:w-full">
        <span
          :class="
            !spotPage
              ? 'xl:mr-10 2xl:mr-20 xl:whitespace-nowrap font-sora text-sm'
              : 'xl:mr-10 xl:whitespace-nowrap font-sora text-sm'
          "
          >Copyright © 2021 Picasso Exchange</span
        >
      </div>
      <div
        class="flex flex-col order-1 w-1/2 xl:px-1 xl:w-full xl:flex-row xl:justify-end"
      >
        <span :class="
            !spotPage
              ? 'xl:mx-5 whitespace-nowrap ml-7 cursor-pointer text-right font-sora text-sm'
              : 'ml-7 xl:mr-5 cursor-pointer text-right xl:text-left whitespace-nowrap font-sora text-sm'
          "
          @click.stop="goPrivacy"
          >Privacy Policy</span
        >
        <span
          class="cursor-pointer text-right xl:text-left whitespace-nowrap font-sora text-sm"
          @click.stop="goTerms"
          >Terms and Conditions</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    spotPage: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  methods: {
    gotwitter() {
      window.open('https://twitter.com/PicassoExchange', '_blank')
    },
    gomedium() {
      window.open('https://medium.com/@picasso.exchange', '_blank')
    },
    godiscord() {
      window.open('https://discord.gg/WXQpVy4qqz', '_blank')
    },
    gogithub() {
      window.open('https://github.com/PicassoExchange', '_blank')
    },
    goPrivacy() {
      this.$router.push({ name: 'privacy_policy' })
    },
    goTerms() {
      this.$router.push({ name: 'terms' })
    }
  }
})
</script>

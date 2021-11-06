<template>
  <div class="header-nav relative">
    <transition name="fade">
      <div
        v-on-clickaway="closeDropdown"
        :class="classes"
      >
        <div class="px-5 py-5 flex flex-col">
          <div class="flex mb-4" @click.stop="gotwitter">
            <div>
              <img :src="'/home/twitter-community.svg'" />
            </div>
            <div class="ml-3">
              <p class="font-sora text-sm text-white">Twitter</p>
              <p class="font-sora text-xsm mt-1 text-white opacity-40">Stay in the pulse</p>
            </div>
          </div>
          <div class="flex" @click.stop="godiscord">
            <div>
              <img :src="'/home/discord-community.svg'" />
            </div>
            <div class="ml-3">
              <p class="font-sora text-sm text-white">Discord</p>
              <p class="font-sora text-xsm mt-1 text-white opacity-40">Meet the community</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway'
import { Icon } from '~/types'

export default Vue.extend({
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
      Icon,
      isDropdownOpen: false
    }
  },

  computed: {
    classes(): string {
      const classes = [
          '-mx-px',
          'border-2',
          'border-solid',
          'rounded-xl',
          'bg-dark-black',
          'border-light-blue-dark'
      ];

      if(!this.landingPage) {
        classes.push('mt-4')
      } else {
        classes.push('bg-dark-main', 'top-16', 'mt-2.5')
      }

      return classes.join(' ')
    }
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },

    closeDropdown() {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false
      }
    },

    gotwitter(){
      window.open('https://twitter.com/PicassoExchange','_blank');
    },

    godiscord(){
      window.open('https://discord.gg/WXQpVy4qqz','_blank');
    }
  }
})
</script>

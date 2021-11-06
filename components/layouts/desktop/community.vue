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
          {{ $t('community') }}
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
        :class="classes"
      >
        <div class="pt-8 pr-4 pb-3 pl-3.5 w-52 h-40 flex flex-col">
          <div class="flex mb-3" @click.stop="gotwitter">
            <div>
              <img :src="'/home/twitter-community.svg'" />
            </div>
            <div class="ml-3">
              <p class="font-sora text-sm text-white">Twitter</p>
              <p class="font-sora text-xsm mt-1 text-white opacity-40">Stay in the pulse</p>
            </div>
          </div>
          <hr class="border border-solid border-commuity" />
          <div class="flex mt-4"  @click.stop="godiscord">
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
          'absolute',
          '-mx-px',
          'flex',
          'justify-center',
          'flex-wrap',
          'bg-spot-common-pattern',
          'bg-no-repeat',
          'bg-contain'
      ];

      if(!this.landingPage) {
        classes.push('mt-10', 'top-20', '-left-1.5')
      } else {
        classes.push('top-16', 'mt-2.5')
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

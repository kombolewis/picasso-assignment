<template>
  <div class="header-nav relative">
    <transition name="fade">
      <div
        v-on-clickaway="closeDropdown"
        :class="classes"
      >
        <div class="py-5 pr-10 p-3.5 flex" @click.stop="goReadMore">
          <div>
            <img :src="'/home/blog.svg'" />
          </div>
          <div class="ml-3">
            <p class="font-sora text-sm text-white">Blog</p>
            <p class="font-sora text-xsm mt-2 text-white opacity-40">Read more about us</p>
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
        classes.push('mt-6', 'top-20')
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

    goReadMore() {
      window.open('https://medium.com/@picasso.exchange','_blank');
    }
  }
})
</script>

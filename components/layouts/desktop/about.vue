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
          {{ $t('about') }}
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
        <div class="pt-8 pr-10 pb-2.5 p-3.5 w-48 flex"  @click.stop = "gomedium">
          <div>
            <img :src="'/home/blog.svg'" />
          </div>
          <div class="ml-3">
            <p class="font-sora text-sm text-white" >Blog</p>
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
          'absolute',
          '-mx-px',
          'flex',
          'justify-center',
          'flex-wrap',
          '-left-10',
          'bg-spot_about-pattern',
          'bg-no-repeat'
      ];

      if(!this.landingPage) {
        classes.push('mt-10', 'top-20')
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
     gomedium(){
       window.open('https://medium.com/@picasso.exchange','_blank');
    }
  }
})
</script>

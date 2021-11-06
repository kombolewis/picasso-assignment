<template>
  <div
    class="min-h-screen max-w-8xl m-auto h-full w-full flex flex-col py-0 bg-market-pattern bg-blend-overlay bg-dark-light bg-no-repeat bg-cover"
  >
    <!-- <div class="w-full">
      <div class="container">
        <div class="text-center w-full lg:w-2/3 mx-auto pt-10 lg:pt-16">
          <h1 class="font-black text-white text-3xl uppercase tracking-wide">
            <img
              src="logo.svg"
              alt="Injective Protocol"
              class="h-40 mx-auto w-auto"
            />
          </h1>
          <h3
            class="text-primary-500 uppercase tracking-wider font-black mt-12"
          >
            {{ $t('welcome_to_ip') }}
          </h3>
          <h4 class="text-gray-300 text-lg mt-2">
            {{ $t('welcome_to_ip_sub') }}
          </h4>
        </div>
      </div>
    </div> -->
    <app-header market/>
   <!-- <div class="xl:max-w-screen-xl mx-auto xl:pl-14">
      <h1 class="lg:text-white text-3xl font-bold font-sora mb-14 mx-auto xl:pl-14 xl:text-5xl 2xl:mx-auto xl:my-14 xl:mx-14">
      Markets
    </h1>
    </div> -->
    <div class="container xl:px-32 xl:pb-4 max-w-screen-laptop-screen">
      <h1 class="lg:text-white text-3xl font-bold font-sora mb-14 text-center  xl:text-5xl xl:text-left 2xl:mx-auto xl:my-14">
      Markets
    </h1>
      <v-panel>
        <div
          slot="context"
          class="rounded-t-md bg-secondary-gradient-market pt-3 px-3"
        >
          <div class="flex items-center justify-between">
            <div class="tabsPink ">
              <ul role="tablist" class="tablist">
                <li
                  role="tab"
                  :aria-selected="component === components.spot"
                  class="tab"
                  @click.stop.prevent="onSelect(components.spot)"
                >
                  <span>{{ $t('Spot Markets') }}</span>
                </li>
                <!-- <li
                  role="tab"
                  :aria-selected="component === components.derviatives"
                  class="tab"
                  @click.stop.prevent="onSelect(components.derviatives)"
                >
                  <span>{{ $t('Derviatives') }}</span>
                </li> -->
              </ul>
            </div>
             <div class="hidden xl:flex">
              <div class="w-xl relative">
                <v-input
                  v-model="filterMarkets"
                  :placeholder="$t('filter_markets')"
                  class="input-xs w-full bg-light-purple"
                >
                </v-input>
                <span class="absolute mr-2 right-2 top-1 mt-1"
                  ><v-ui-icon
                    :icon="Icon.SpotSearch"
                    xs
                    class="text-gray-400"
                  ></v-ui-icon
                ></span>
              </div>
            </div> 
          </div>
        </div>
        <component :is="component" v-if="component" :search='filterMarkets'></component>
      </v-panel>
    </div>

    <!-- <div class="container">
      <div class="mt-12 w-full mx-auto lg:w-3/4">
        <v-panel :title="$t('spot_markets')">
          <div class="table-compact table-select px-4 pb-4">
            <v-spot />
          </div>
        </v-panel>
        <v-panel :title="$t('derivatives')" class="mt-6">
          <div class="table-compact table-select px-4 pb-4 mt-6">
            <v-derivatives />
          </div>
        </v-panel>
      </div>
    </div> -->
    <v-footer spotPage=true />
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import VSpot from '~/components/partials/spot/markets/index-market.vue'
import VDerivatives from '~/components/partials/derivatives/markets/index-market.vue'
import Header from '~/components/layouts/desktop/header.vue'
import { Icon } from '~/types'
import Footer from '~/components/partials/spot/footer.vue'
import { verifyUserAuthentication } from '~/utils/localStroage'

const components = {
  spot: 'v-spot',
  derviatives: 'v-derviatives'
}
export default Vue.extend({
  components: {
    'v-spot': VSpot,
    'v-derviatives': VDerivatives,
    'app-header': Header,
     'v-footer': Footer
  },
  data() {
    return {
      components,
      filterMarkets: '',
      component: components.spot,
      Icon
    }
  },

  mounted() {
    const authenticate = verifyUserAuthentication();
    if (!authenticate) {
         this.$router.push('/');
    }
  },

  methods: {
    onSelect(component: string) {
      this.component = component
    }
  }
})
</script>

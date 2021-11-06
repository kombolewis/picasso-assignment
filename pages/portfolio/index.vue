<template>
  <div
    class="min-h-screen max-w-8xl m-auto h-full w-full flex flex-col py-0 bg-market-pattern bg-blend-overlay bg-dark-light bg-no-repeat bg-cover"
  >
    <app-header />

    <div class="container xl:px-32 xl:pb-4 max-w-screen-laptop-screen">
      <h3 class="lg:text-white text-lg font-normal font-sora mb-4 text-center  xl:text-3xl xl:text-left 2xl:mx-auto my-14">
      Open Positions
      </h3>
      <v-panel>
        <div
          slot="context"
          class="rounded-t-md bg-secondary-gradient-market pt-3 px-3"
        >
          <div class="flex items-center justify-between">
            <div class="tabsPink ">
              <ul role="tablist" class="tablist">
                <li role="tab" class="tab">
                  <span>Open Positions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <portfolio />
      </v-panel>

      <h3 class="lg:text-white text-lg font-normal font-sora mb-4 text-center  xl:text-3xl xl:text-left 2xl:mx-auto my-14">
        Open Orders
      </h3>
      <v-panel>
        <div
          slot="context"
          class="rounded-t-md bg-secondary-gradient-market pt-3 px-3"
        >
          <div class="flex items-center justify-between">
            <div class="tabsPink ">
              <ul role="tablist" class="tablist">
                <li role="tab" class="tab">
                  <span>Open Derivative Orders (0)</span>
                </li>
                <li role="tab" class="tab">
                  <span>Open Spot Orders (0)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <order />
      </v-panel>
    </div>
    <v-footer spotPage=false />
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from '~/components/partials/portfolio/portfolio.vue'
import Order from '~/components/partials/portfolio/orders.vue'
import Header from '~/components/layouts/desktop/header.vue'
import Footer from '~/components/partials/spot/footer.vue'
import { verifyUserAuthentication } from '~/utils/localStroage'


export default Vue.extend({
  components: {
    'portfolio': Portfolio,
    'order': Order,
    'app-header': Header,
    'v-footer': Footer
  },


  mounted() {
    const authenticate = verifyUserAuthentication();
    if (!authenticate) {
         this.$router.push('/');
    }
  }
})
</script>

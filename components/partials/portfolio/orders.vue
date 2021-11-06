<template>
  <div class="table-compact table-select px-0.5 xl:px-4 pb-4">
    <div class="w-full py-2 px-2 xl:py-1"></div>
    <div class="table-responsive table-compact overflow-y-hidden">
      <table class="table">
        <thead>
          <tr class="flex w-full justify-between bg-light-blue px-2">
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Market</v-ui-text>
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Price</v-ui-text>
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Amount</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Total</v-ui-text>
              <v-ui-icon
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Side</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Unfilled</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Filled</v-ui-text>
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Actions</v-ui-text>
              <v-ui-icon
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
          </tr>
        </thead>
        <tbody>

          <tr
            v-for="(order,index) in  openOrders"
            :key="index"
            class="flex justify-between items-center h-12 px-2 h-16 orders"
          >
            <td>{{order.Market}}</td>
            <td>{{order.Price}}</td>
            <td>{{order.Amount}}</td>
            <td>{{order.Total}}</td>
            <td>{{order.Side}}</td>
            <td>{{order.Unfilled}}</td>
            <td>{{order.filled}}</td>
            <td></td>

          </tr>
        </tbody>
      </table>
    </div>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {openPosData,openOrders} from '~/utils/data.js'
import { Icon } from '~/types'

export default Vue.extend({
  data() {
    return {
      Icon,
      openPosData,
      openOrders
    }
  }

})
</script>

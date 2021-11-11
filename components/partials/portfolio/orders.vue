<template>
  <div class="table-compact table-select px-0.5 xl:px-4 pb-4">
    <div class="w-full py-2 px-2 xl:py-1"></div>
    <div class="table-responsive table-compact overflow-y-hidden">
      <table class="table">
      <thead class="">
        <tr class="bg-light-blue px-2 ">
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Market</span>
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Price</span>
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Amount</span>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Total</span>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Side</span>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Unfilled</span>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Filled</span>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
          </th>
          <th is="v-ui-table-th" center class="font-normal text-sm h-16 mx-2">
            <span>Actions</span>
          </th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in openOrders"
          :key="index"
          :class="'bg-red-900 orders'">
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.Market}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.Price}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.Amount}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.Total}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.Side}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.Unfilled}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >{{order.filled}}</v-ui-text>
          </td>
          <td is="v-ui-table-td"  center class="h-8 ">
            <v-ui-text muted-lg emp >&mdash;</v-ui-text>
          </td>
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

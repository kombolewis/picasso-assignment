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
              <v-ui-text>Entry Price</v-ui-text>
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
              <v-ui-text>Liquidation Price</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
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
              <v-ui-text>Unrealized Pnl</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Notionol Value</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Margin</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
            <th is="v-ui-table-th" class="text-left font-normal text-sm h-16 mx-2" flex>
              <v-ui-text>Leverage</v-ui-text>
              <v-ui-icon
                :icon="Icon.Info"
                sm
                class="text-gray-500 group-hover:text-gray-300 p-1 cursor-pointer"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(position,index) in  openPosData"
            :key="index"
            class="flex justify-between items-center h-12 px-2 h-16 orders"
          >
            <td>{{position.Market}}</td>
            <td>{{position.Entry_Price}}</td>
            <td>{{position.Amount}}</td>
            <td>{{position.Liquidation_Price}}</td>
            <td>{{position.Side}}</td>
            <td>{{position.Unrealized_Pnl}}</td>
            <td>{{position.Notionol_Value}}</td>
            <td>{{position.Margin}}</td>
            <td>{{position.Leverage}}</td> 
          </tr>
        </tbody>
      </table>
    </div>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {openPosData} from '~/utils/data.js'
import { Icon } from '~/types'

export default Vue.extend({
  data() {
    return {
      Icon,
      openPosData
    }
  }
})
</script>

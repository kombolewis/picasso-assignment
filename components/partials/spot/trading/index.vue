<template>
  <v-panel class="h-full bg-light-purple text-sm " :title="$t('trading')">
    <v-trade />
  </v-panel>
</template>

<script lang="ts">
import Vue from 'vue'
import Trade from './trade.vue'

export default Vue.extend({
  components: {
    'v-trade': Trade
  }
})
</script>

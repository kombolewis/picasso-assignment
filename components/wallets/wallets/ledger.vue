<template>
<div class="mt-4" >
    <div
      class="
        block
        cursor-pointer
      "
      @click="handleConnectClick"
    >
      <p class="font-sora text-sm text-white">Ledger</p>
      <p class="font-sora text-xsm mt-1 text-white opacity-40">Connect Using Hardware Wallet</p>
    </div>
    <v-modal-ledger
      :is-open="isLedgerModalOpen"
      @closed="isLedgerModalOpen = false"
    />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VModalLedger from '~/components/wallets/ledger/index.vue'
import { Icon } from '~/types'

export default Vue.extend({
  components: {
    VModalLedger
  },

  data() {
    return {
      Icon,
      isLedgerModalOpen: false
    }
  },

  methods: {
    handleConnectClick() {
      this.isLedgerModalOpen = true
    }
  }
})
</script>

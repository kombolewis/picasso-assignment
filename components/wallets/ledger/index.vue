<template>
  <modal :is-open="isOpen" @closed="onClose">
    <div class="w-full md:w-xl flex flex-col shadow-md mx-2 px-2 bg-model bg-no-repeat bg-cover border-solid rounded-md
        border border-light-pink">
      <div class="px-4 pt-14">
        <h3 class="text-center text-xl  font-semibold font-sora">
          {{ $t('select_ledger_address') }}
        </h3>
      </div>
      <v-ledger-address-manager />
      <v-ledger-confirm v-if="addresses.length > 0" @connected="onClose" />
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { Status } from '@injectivelabs/utils'
import { AccountAddress } from '@injectivelabs/ts-types'
import ModalElement from '~/components/elements/modal.vue'
import VLedgerAddressManager from '~/components/wallets/ledger/addresses.vue'
import VLedgerConfirm from '~/components/wallets/ledger/confirm.vue'

export default Vue.extend({
  components: {
    VLedgerAddressManager,
    VLedgerConfirm,
    modal: ModalElement
  },

  props: {
    isOpen: {
      required: true,
      type: Boolean
    }
  },

  data() {
    return {
      status: new Status(),
      addressStatus: new Status(),

      form: {
        address: ''
      }
    }
  },

  computed: {
    addresses(): AccountAddress[] {
      return this.$accessor.wallet.addresses
    }
  },

  mounted() {
    this.$accessor.wallet.setAddresses([])
    this.$accessor.wallet.connectLedger()
  },

  methods: {
    onClose() {
      if (this.status.isNotLoading()) {
        this.$emit('closed')
      }
    }
  }
})
</script>

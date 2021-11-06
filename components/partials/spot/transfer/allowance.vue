<template>
  <div class="w-full mx-auto mt-6">
    <v-ui-button
      :status="status"
      full
      :class="classes"
      @click.stop="handleClickSetAllowance"
    >
      {{ $t('set_allowance') }}
    </v-ui-button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Status } from '@injectivelabs/utils'
import { TokenWithBalance } from '~/types'

export default Vue.extend({
  props: {
    token: {
      required: true,
      type: Object as PropType<TokenWithBalance>
    },
    nonbgcolor: {
      required: false,
      default: false,
      type: Boolean
    },
    primary: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      status: new Status()
    }
  },
computed: {
     classes(): string {
      const classes = [];

      if(this.nonbgcolor){
        classes.push(
          'border-gradient',
          'bg-dark-blueish'
        )
      }
      if(this.primary){
        classes.push(
          'primary-btn'
        )
      }
      return classes.join(' ')
     }
   },
  methods: {
    handleClickSetAllowance() {
      this.status.setLoading()

      this.$accessor.token
        .setTokenAllowance(this.token)
        .then(() => {
          this.$emit('allowance-set')
          this.$toast.success(this.$t('allowance_set'))
        })
        .catch(this.$onRejected)
        .finally(() => {
          this.status.setIdle()
        })
    }
  }
   
})
</script>

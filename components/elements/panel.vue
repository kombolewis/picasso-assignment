<template>
  <v-ui-card class="h-full">
    <div class="flex flex-col justify-between h-full">
      <div
        v-if="title || $slots['title'] || $slots['title-context']"
        :class="classes"
      >
        <h4
          class="text-small font-sora text-white"
          :class="!$slots['context'] ? 'w-full' : ''"
        >
          <slot name="title">{{ title }}</slot>
        </h4>
        <slot name="title-context" />
      </div>
      <slot name="context" class="items-center flex justify-between w-full" />
      <div :class="tableClasses">
        <slot ref="content" />
      </div>
    </div>
  </v-ui-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: false,
      default: '',
      type: String
    },

    portalName: {
      required: false,
      default: '',
      type: String
    },

    extraClasses: {
      required: false,
      default: '',
      type: String
    },

    orderBook: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    classes(): string {
      const classes = [
        'border-b',
        'items-center',
        'flex',
        'justify-between',
        'px-4',
        'h-12',
        'w-full',
        'v-panel-title',
        'bg-light-blue',
        'rounded-t-md'
      ];
      // eslint-disable-next-line no-console
      if(this.extraClasses) {
        classes.push(this.extraClasses);
      }
      return classes.join(' ');
    },

    tableClasses(): string {
      const tableClasses = [
        'flex-1',
        'v-panel-content',
        'bg-light-purple'
      ];

      if(this.orderBook) {
        tableClasses.push('overflow-y-hidden');
      } else {
        tableClasses.push('overflow-y-auto');
      }

      return tableClasses.join(' ');
    }
  }
})
</script>

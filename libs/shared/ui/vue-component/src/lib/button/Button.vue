<script setup lang="ts">
  import { Primitive, type PrimitiveProps } from 'radix-vue'
  import type { HTMLAttributes } from 'vue'

  import { cn } from '@hiskio/utility'

  import { type ButtonVariants, buttonVariants } from '.'

  interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    as?: string
    class?: HTMLAttributes['class']
    isLoading?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    as: 'button',
  })
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
    <div :style="`${isLoading ? 'min-width: 98px' : ''}`" class="flex justify-center gap-1" v-if="isLoading">
      <svg class="mr-1 inline h-5 w-5 animate-spin align-text-bottom" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          data-darkreader-inline-stroke=""
          style="--darkreader-inline-stroke: currentColor"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          data-darkreader-inline-fill=""
          style="--darkreader-inline-fill: currentColor"
        ></path>
      </svg>
      <!-- 載入中 -->
      <span>載入中</span>
    </div>
    <div v-else>
      <slot />
    </div>
  </Primitive>
</template>

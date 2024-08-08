<script setup lang="ts">
  import { AlertDialogAction, type AlertDialogActionProps } from 'radix-vue'
  import { computed, type HTMLAttributes } from 'vue'

  import { cn } from '@hiskio/utility'

  import { buttonVariants } from '../button'

  const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>()

  const delegatedProps = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { class: _, ...delegated } = props

    return delegated
  })
</script>

<template>
  <AlertDialogAction v-bind="delegatedProps" :class="cn(buttonVariants(), props.class)">
    <slot />
  </AlertDialogAction>
</template>

<script setup lang="ts">
  import { AvatarRoot } from 'radix-vue'
  import type { HTMLAttributes } from 'vue'

  import { cn } from '@hiskio/utility'

  import { avatarVariant, type AvatarVariants } from '.'

  const props = withDefaults(
    defineProps<{
      class?: HTMLAttributes['class']
      size?: AvatarVariants['size']
      shape?: AvatarVariants['shape']
    }>(),
    {
      size: 'sm',
      shape: 'circle',
    },
  )
</script>

<template>
  <div>
    <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
      <slot />
    </AvatarRoot>
  </div>
</template>

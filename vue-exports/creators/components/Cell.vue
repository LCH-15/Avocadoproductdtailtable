<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justifyContent,
      width: `${width}px`,
      minWidth: `${width}px`,
      maxWidth: `${width}px`,
      overflow: 'hidden',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Fixed pixel width for this cell */
  width: number
  /** Horizontal alignment of content inside the cell */
  align?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
})

const justifyContent = computed(() => {
  const justifyMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  } as const
  return justifyMap[props.align]
})
</script>

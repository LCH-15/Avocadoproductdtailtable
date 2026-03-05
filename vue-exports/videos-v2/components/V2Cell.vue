<template>
  <div
    :style="{
      width: `${width}px`,
      minWidth: `${width}px`,
      maxWidth: `${width}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      overflow: 'hidden',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  width: number
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left',
})
</script>

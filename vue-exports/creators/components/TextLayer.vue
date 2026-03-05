<template>
  <span :style="computedStyle">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

export type TextVariant =
  | 'body'       // 12px Regular #374151
  | 'label'      // 12px Medium  #111827
  | 'gmv'        // 12px SemiBold #111827
  | 'sub'        // 11px Regular #9CA3AF
  | 'header'     // 14px SemiBold #111827

interface Props {
  variant?: TextVariant
  /** Truncate with ellipsis when content overflows */
  truncate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'body',
  truncate: false,
})

const VARIANT_STYLES: Record<TextVariant, CSSProperties> = {
  body:   { fontSize: '12px', fontWeight: 400, color: '#374151' },
  label:  { fontSize: '12px', fontWeight: 500, color: '#111827' },
  gmv:    { fontSize: '12px', fontWeight: 600, color: '#111827' },
  sub:    { fontSize: '11px', fontWeight: 400, color: '#9CA3AF' },
  header: { fontSize: '14px', fontWeight: 600, color: '#111827' },
}

const computedStyle = computed(() => ({
  fontFamily: "'Inter', sans-serif",
  ...VARIANT_STYLES[props.variant],
  whiteSpace: 'nowrap',
  overflow: props.truncate ? 'hidden' : 'visible',
  textOverflow: props.truncate ? 'ellipsis' : 'clip',
  display: 'block',
}))
</script>

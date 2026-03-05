<template>
  <div
    :style="{
      position: 'relative',
      width: '48px',
      height: '36px',
      borderRadius: '8px',
      overflow: 'hidden',
      flexShrink: 0,
      border: '1.5px solid #FFFFFF',
      boxSizing: 'border-box',
    }"
  >
    <!-- Image -->
    <img
      :src="src"
      :alt="alt"
      :style="{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }"
    />

    <!-- Scrim -->
    <div
      :style="{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
      }"
    />

    <!-- Play icon — 20px white circle, centered -->
    <div
      :style="{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    >
      <div
        :style="{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
        }"
      >
        <Play :size="8" fill="#111827" stroke="none" :style="{ marginLeft: '1px' }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Play } from 'lucide-vue-next'

interface Props {
  /** Image URL */
  src: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'video',
})
</script>

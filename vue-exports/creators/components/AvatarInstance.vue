<template>
  <div
    :style="{
      position: 'relative',
      width: '40px',
      height: '40px',
      flexShrink: 0,
    }"
  >
    <!-- Circle image -->
    <div
      :style="{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '1.5px solid rgba(0,0,0,0.08)',
      }"
    >
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
    </div>

    <!-- Rank badge -->
    <div
      :style="{
        position: 'absolute',
        bottom: '-2px',
        right: '-2px',
        minWidth: '16px',
        height: '16px',
        borderRadius: '8px',
        background: '#111827',
        border: '1.5px solid #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 3px',
      }"
    >
      <span
        :style="{
          fontFamily: \"'Inter', sans-serif\",
          fontSize: '9px',
          fontWeight: 600,
          color: '#FFFFFF',
          lineHeight: 1,
        }"
      >
        {{ rank }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** Image URL */
  src: string
  /** Alt text / creator name */
  alt: string
  /** Rank badge rendered bottom-right */
  rank: number
}

defineProps<Props>()
</script>

<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '14px',
    }"
  >
    <span
      :style="{
        fontFamily: \"'Inter', sans-serif\",
        fontSize: '18px',
        fontWeight: 700,
        color: '#111827',
      }"
    >
      {{ title }}
    </span>
    <span
      :style="{
        fontFamily: \"'Inter', sans-serif\",
        fontSize: '11px',
        fontWeight: 600,
        color: '#fff',
        background: badgeColor,
        borderRadius: '6px',
        padding: '2px 8px',
      }"
    >
      {{ badge }}
    </span>
    <span
      :style="{
        fontFamily: \"'Inter', sans-serif\",
        fontSize: '12px',
        fontWeight: 400,
        color: '#9CA3AF',
      }"
    >
      {{ note }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  badge: string
  badgeColor: string
  note: string
}

defineProps<Props>()
</script>

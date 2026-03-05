<template>
  <div
    role="rowheader"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: `${LIVE_GAP}px`,
      paddingLeft: `${LIVE_PAD_X}px`,
      paddingRight: `${LIVE_PAD_X}px`,
      paddingTop: '12px',
      paddingBottom: '12px',
      background: '#F9FAFB',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    }"
  >
    <div
      v-for="header in HEADERS"
      :key="header.label"
      :style="{
        width: `${header.width}px`,
        minWidth: `${header.width}px`,
        maxWidth: `${header.width}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: header.align === 'center' ? 'center' : 'flex-start',
        overflow: 'hidden',
      }"
    >
      <span
        :style="{
          fontFamily: \"'Inter', sans-serif\",
          fontSize: '14px',
          fontWeight: 600,
          color: '#111827',
        }"
      >
        {{ header.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LIVE_COL, LIVE_GAP, LIVE_PAD_X } from './liveColSpec'

const HEADERS = [
  { label: 'LIVE Stream',         width: LIVE_COL.live,              align: 'left' },
  { label: 'Total Units Sold',    width: LIVE_COL.unitsSold,         align: 'center' },
  { label: 'GMV',                 width: LIVE_COL.gmv,               align: 'center' },
  { label: 'Cumulative Viewers',  width: LIVE_COL.cumulativeViewers, align: 'center' },
  { label: 'LIVE Duration',       width: LIVE_COL.liveDuration,      align: 'center' },
  { label: 'Viewers Peak',        width: LIVE_COL.viewersPeak,       align: 'center' },
  { label: 'Start Time',          width: LIVE_COL.startTime,         align: 'center' },
]
</script>

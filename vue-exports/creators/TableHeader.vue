<template>
  <div
    role="rowheader"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '16px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      background: '#F9FAFB',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    }"
  >
    <Cell v-for="header in HEADERS" :key="header.label" :width="header.width">
      <TextLayer variant="header">{{ header.label }}</TextLayer>
    </Cell>
  </div>
</template>

<script setup lang="ts">
import Cell from './components/Cell.vue'
import TextLayer from './components/TextLayer.vue'

// Column widths matching TableRow
const COL = {
  name:     240,
  units:    120,
  gmv:      120,
  date:     150,
  videoGPM: 120,
  liveGPM:  120,
  videos:   212,
}

const HEADERS = [
  { label: 'Creator Name',       width: COL.name     },
  { label: 'Units Sold',         width: COL.units    },
  { label: 'GMV',                width: COL.gmv      },
  { label: 'Date / TTP',         width: COL.date     },
  { label: 'Video GPM',          width: COL.videoGPM },
  { label: 'LIVE GPM',           width: COL.liveGPM  },
  { label: 'Highest GMV Videos', width: COL.videos   },
]
</script>

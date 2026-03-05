<template>
  <div
    role="rowheader"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: `${V2_GAP}px`,
      paddingLeft: `${V2_PAD_X}px`,
      paddingRight: `${V2_PAD_X}px`,
      paddingTop: '12px',
      paddingBottom: '12px',
      background: '#F9FAFB',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    }"
  >
    <V2Cell v-for="header in HEADERS" :key="header.label" :width="header.width">
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
    </V2Cell>
  </div>
</template>

<script setup lang="ts">
import V2Cell from './components/V2Cell.vue'
import { V2_COL, V2_GAP, V2_PAD_X } from './colSpec'

const HEADERS = [
  { label: 'Video',           width: V2_COL.video          },
  { label: 'Total Units Sold', width: V2_COL.unitsSold      },
  { label: 'GMV',             width: V2_COL.gmv            },
  { label: 'Views',           width: V2_COL.views          },
  { label: 'Likes',           width: V2_COL.likes          },
  { label: 'Engagement Rate', width: V2_COL.engagementRate },
  { label: 'Comments',        width: V2_COL.comments       },
  { label: 'Published',       width: V2_COL.published      },
]
</script>

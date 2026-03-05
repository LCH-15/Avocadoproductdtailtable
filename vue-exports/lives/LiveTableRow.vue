<template>
  <div
    role="row"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: `${LIVE_GAP}px`,
      paddingLeft: `${LIVE_PAD_X}px`,
      paddingRight: `${LIVE_PAD_X}px`,
      height: `${LIVE_ROW_H}px`,
      background: hovered ? '#F9FAFB' : '#FFFFFF',
      borderBottom: showDivider ? '1px solid rgba(0,0,0,0.05)' : 'none',
      transition: 'background 100ms ease',
      cursor: 'default',
    }"
  >
    <!-- 1 — Live cell [362px] — left-aligned -->
    <div
      :style="{
        width: `${LIVE_COL.live}px`,
        minWidth: `${LIVE_COL.live}px`,
        maxWidth: `${LIVE_COL.live}px`,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }"
    >
      <LiveCell
        :thumbnail-src="thumbnailSrc"
        :title="title"
        :creator-avatar="creatorAvatar"
        :creator-name="creatorName"
        :emoji="emoji"
      />
    </div>

    <!-- 2 — Units Sold — Regular #374151 -->
    <div :style="cellStyle(LIVE_COL.unitsSold)">
      <span :style="textStyle('#374151', 400)">{{ unitsSold }}</span>
    </div>

    <!-- 3 — GMV — SemiBold #111827 -->
    <div :style="cellStyle(LIVE_COL.gmv)">
      <span :style="textStyle('#111827', 600)">{{ gmv }}</span>
    </div>

    <!-- 4 — Cumulative Viewers — Regular #6B7280 -->
    <div :style="cellStyle(LIVE_COL.cumulativeViewers)">
      <span :style="textStyle('#6B7280', 400)">{{ cumulativeViewers }}</span>
    </div>

    <!-- 5 — LIVE Duration — Regular #374151 HH:MM:SS -->
    <div :style="cellStyle(LIVE_COL.liveDuration)">
      <span :style="textStyle('#374151', 400)">{{ liveDuration }}</span>
    </div>

    <!-- 6 — Viewers Peak — Regular #374151 -->
    <div :style="cellStyle(LIVE_COL.viewersPeak)">
      <span :style="textStyle('#374151', 400)">{{ viewersPeak }}</span>
    </div>

    <!-- 7 — Start Time — Regular #6B7280 YYYY-MM-DD -->
    <div :style="cellStyle(LIVE_COL.startTime)">
      <span :style="textStyle('#6B7280', 400)">{{ startTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LiveCell from './components/LiveCell.vue'
import { LIVE_COL, LIVE_GAP, LIVE_PAD_X, LIVE_ROW_H } from './liveColSpec'

interface Props {
  // LiveCell props
  thumbnailSrc: string
  title: string
  creatorAvatar: string
  creatorName: string
  emoji?: string
  // data columns
  unitsSold: string
  gmv: string
  cumulativeViewers: string
  /** HH:MM:SS */
  liveDuration: string
  viewersPeak: string
  /** YYYY-MM-DD */
  startTime: string
  showDivider?: boolean
}

withDefaults(defineProps<Props>(), {
  showDivider: true,
})

const emit = defineEmits<{
  hover: [data: Props, isHovered: boolean]
}>()

const hovered = ref(false)

function cellStyle(width: number) {
  return {
    width: `${width}px`,
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }
}

function textStyle(color: string, weight: 400 | 600) {
  return {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    fontWeight: weight,
    color,
    whiteSpace: 'nowrap',
  }
}

function handleMouseEnter() {
  hovered.value = true
}

function handleMouseLeave() {
  hovered.value = false
}
</script>

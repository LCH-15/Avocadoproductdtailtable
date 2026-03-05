<template>
  <div
    role="row"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: `${V2_GAP}px`,
      paddingLeft: `${V2_PAD_X}px`,
      paddingRight: `${V2_PAD_X}px`,
      height: `${V2_ROW_H}px`,
      background: hovered ? '#F9FAFB' : '#FFFFFF',
      borderBottom: showDivider ? '1px solid rgba(0,0,0,0.05)' : 'none',
      transition: 'background 100ms ease',
      cursor: 'default',
    }"
  >
    <!-- 1 — Video -->
    <V2Cell :width="V2_COL.video" align="left">
      <V2VideoCell
        :thumbnail-src="thumbnailSrc"
        :title="title"
        :duration="duration"
        :creator-avatar="creatorAvatar"
        :creator-name="creatorName"
      />
    </V2Cell>

    <!-- 2 — Total Units Sold — Regular #374151 -->
    <V2Cell :width="V2_COL.unitsSold" align="center">
      <span :style="txtStyle('#374151', 400)">{{ unitsSold }}</span>
    </V2Cell>

    <!-- 3 — GMV — SemiBold #111827 -->
    <V2Cell :width="V2_COL.gmv" align="center">
      <span :style="txtStyle('#111827', 600)">{{ gmv }}</span>
    </V2Cell>

    <!-- 4 — Views — Regular #6B7280 -->
    <V2Cell :width="V2_COL.views" align="center">
      <span :style="txtStyle('#6B7280', 400)">{{ views }}</span>
    </V2Cell>

    <!-- 5 — Likes — Regular #6B7280 -->
    <V2Cell :width="V2_COL.likes" align="center">
      <span :style="txtStyle('#6B7280', 400)">{{ likes }}</span>
    </V2Cell>

    <!-- 6 — Engagement Rate — Regular #22C55E green -->
    <V2Cell :width="V2_COL.engagementRate" align="center">
      <span :style="txtStyle('#22C55E', 400)">{{ engagementRate }}</span>
    </V2Cell>

    <!-- 7 — Comments — Regular #374151 -->
    <V2Cell :width="V2_COL.comments" align="center">
      <span :style="txtStyle('#374151', 400)">{{ comments }}</span>
    </V2Cell>

    <!-- 8 — Published — Regular #6B7280 YYYY-MM-DD -->
    <V2Cell :width="V2_COL.published" align="center">
      <span :style="txtStyle('#6B7280', 400)">{{ published }}</span>
    </V2Cell>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import V2Cell from './components/V2Cell.vue'
import V2VideoCell from './components/V2VideoCell.vue'
import { V2_COL, V2_GAP, V2_PAD_X, V2_ROW_H } from './colSpec'

interface Props {
  // VideoCell props
  thumbnailSrc: string
  title: string
  duration: string
  creatorAvatar: string
  creatorName: string
  // data columns
  unitsSold: string
  gmv: string
  views: string
  likes: string
  /** Displayed green */
  engagementRate: string
  comments: string
  /** YYYY-MM-DD */
  published: string
  showDivider?: boolean
}

withDefaults(defineProps<Props>(), {
  showDivider: true,
})

const emit = defineEmits<{
  hover: [data: Props, isHovered: boolean]
}>()

const hovered = ref(false)

function txtStyle(color: string, weight: 400 | 600) {
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
  emit('hover', { ...defineProps<Props>() }, true)
}

function handleMouseLeave() {
  hovered.value = false
  emit('hover', { ...defineProps<Props>() }, false)
}
</script>

<template>
  <div
    role="row"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '16px',
      paddingLeft: '16px',
      paddingRight: '16px',
      height: '64px',
      background: backgroundColor,
      borderBottom: showDivider ? '1px solid rgba(0,0,0,0.05)' : 'none',
      boxShadow: resolvedVariant === 'selected' ? 'inset 3px 0 0 0 #22C55E' : 'none',
      cursor: 'pointer',
      transition: 'background 100ms ease',
      userSelect: 'none',
    }"
  >
    <!-- Slot 1 — Name [240px] -->
    <Cell :width="COL.name">
      <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', overflow: 'hidden' }">
        <AvatarInstance :src="avatarSrc" :alt="creatorName" :rank="rank" />
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden', flex: 1 }">
          <TextLayer variant="label" :truncate="true">{{ creatorName }}</TextLayer>
          <TextLayer variant="sub" :truncate="true">{{ handle }}</TextLayer>
        </div>
      </div>
    </Cell>

    <!-- Slot 2 — Units Sold [120px] -->
    <Cell :width="COL.units">
      <TextLayer variant="body">{{ unitsSold }}</TextLayer>
    </Cell>

    <!-- Slot 3 — GMV [120px] -->
    <Cell :width="COL.gmv">
      <TextLayer variant="gmv">{{ gmv }}</TextLayer>
    </Cell>

    <!-- Slot 4 — Date [150px] -->
    <Cell :width="COL.date">
      <TextLayer variant="body">{{ date }}</TextLayer>
    </Cell>

    <!-- Slot 5 — Video GPM [120px] -->
    <Cell :width="COL.videoGPM">
      <TextLayer variant="body">{{ videoGPM }}</TextLayer>
    </Cell>

    <!-- Slot 6 — Live GPM [120px] -->
    <Cell :width="COL.liveGPM">
      <TextLayer variant="body">{{ liveGPM }}</TextLayer>
    </Cell>

    <!-- Slot 7 — Videos [212px] -->
    <Cell :width="COL.videos">
      <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'center' }">
        <div
          v-for="(src, i) in thumbnails"
          :key="i"
          :style="{ marginLeft: i === 0 ? 0 : '-8px', zIndex: 3 - i, position: 'relative' }"
        >
          <ThumbnailInstance :src="src" :alt="`${creatorName} video ${i + 1}`" />
        </div>
      </div>
    </Cell>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Cell from './components/Cell.vue'
import TextLayer from './components/TextLayer.vue'
import AvatarInstance from './components/AvatarInstance.vue'
import ThumbnailInstance from './components/ThumbnailInstance.vue'

export type RowVariant = 'default' | 'hover' | 'selected'

interface Props {
  // Name cell
  avatarSrc: string
  creatorName: string
  handle: string
  rank: number
  // Data columns
  unitsSold: string
  gmv: string
  date: string
  videoGPM: string
  liveGPM: string
  thumbnails: [string, string, string]
  // State
  variant?: RowVariant
  showDivider?: boolean
  selected?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDivider: true,
})

const emit = defineEmits<{
  click: [data: Props, isSelected: boolean]
  hover: [data: Props, isHovered: boolean]
}>()

// Column widths
const COL = {
  name:     240,
  units:    120,
  gmv:      120,
  date:     150,
  videoGPM: 120,
  liveGPM:  120,
  videos:   212,
}

const BG: Record<RowVariant, string> = {
  default:  '#FFFFFF',
  hover:    '#F9FAFB',
  selected: '#F0FDF4',
}

// Local state
const hovered = ref(false)
const uncontrolledSelected = ref(false)

const isSelected = computed(() => props.selected ?? uncontrolledSelected.value)

const resolvedVariant = computed<RowVariant>(() => {
  if (props.variant) return props.variant
  if (isSelected.value) return 'selected'
  if (hovered.value) return 'hover'
  return 'default'
})

const backgroundColor = computed(() => BG[resolvedVariant.value])

function handleClick() {
  uncontrolledSelected.value = !uncontrolledSelected.value
  emit('click', props, uncontrolledSelected.value)
}

function handleMouseEnter() {
  hovered.value = true
  emit('hover', props, true)
}

function handleMouseLeave() {
  hovered.value = false
  emit('hover', props, false)
}
</script>

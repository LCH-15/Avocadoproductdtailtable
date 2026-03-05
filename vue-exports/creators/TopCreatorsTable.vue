<template>
  <div
    role="table"
    aria-label="Top 10 GMV Creators"
    :style="{
      background: '#FFFFFF',
      borderRadius: '14px',
      border: '1px solid rgba(0,0,0,0.10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      overflow: 'hidden',
      width: '1210px',
    }"
  >
    <!-- Header -->
    <TableHeader />

    <!-- 10 × TableRow instances -->
    <TableRow
      v-for="(creator, idx) in tableData"
      :key="creator.rank"
      :rank="creator.rank"
      :avatar-src="creator.avatarSrc"
      :creator-name="creator.name"
      :handle="creator.handle"
      :units-sold="creator.units"
      :gmv="creator.gmv"
      :date="creator.date"
      :video-g-p-m="creator.videoGPM"
      :live-g-p-m="creator.liveGPM"
      :thumbnails="creator.thumbnails"
      :show-divider="idx < tableData.length - 1"
      @click="(data, isSelected) => emit('row-click', data, idx)"
      @hover="(data, isHovered) => emit('row-hover', data, idx, isHovered)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'

// Avatar images
const AVATARS: string[] = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
  'https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80',
]

// Thumbnail image pool
const THUMBS: string[] = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
  'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
  'https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
  'https://images.unsplash.com/photo-1560707854-fb9a1cba29e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=96',
]

function t(i: number): [string, string, string] {
  return [
    THUMBS[(i + 0) % THUMBS.length],
    THUMBS[(i + 1) % THUMBS.length],
    THUMBS[(i + 2) % THUMBS.length],
  ]
}

// 10 creator records
const CREATORS = [
  { rank: 1,  name: 'Sophie Anderson', handle: '@sophiebeauty',   units: '12,480', gmv: '$248,600', date: 'Jan 14, 2025', videoGPM: '$18.40', liveGPM: '$22.10' },
  { rank: 2,  name: 'Marcus Chen',     handle: '@marcustech',     units: '10,920', gmv: '$198,340', date: 'Jan 16, 2025', videoGPM: '$16.70', liveGPM: '$19.80' },
  { rank: 3,  name: 'Bella Rivera',    handle: '@bellalifestyle',  units:  '9,750', gmv: '$176,200', date: 'Jan 18, 2025', videoGPM: '$15.20', liveGPM: '$17.50' },
  { rank: 4,  name: 'James Hartwell',  handle: '@jamesfitness',   units:  '8,300', gmv: '$154,800', date: 'Jan 20, 2025', videoGPM: '$14.90', liveGPM: '$16.30' },
  { rank: 5,  name: 'Priya Nair',      handle: '@priyacooks',     units:  '7,840', gmv: '$139,500', date: 'Jan 22, 2025', videoGPM: '$13.60', liveGPM: '$15.70' },
  { rank: 6,  name: 'Ethan Walker',    handle: '@ethanoutdoors',  units:  '7,200', gmv: '$122,400', date: 'Jan 23, 2025', videoGPM: '$12.80', liveGPM: '$14.20' },
  { rank: 7,  name: 'Luna Kim',        handle: '@lunafashion',    units:  '6,580', gmv: '$108,900', date: 'Jan 25, 2025', videoGPM: '$11.90', liveGPM: '$13.40' },
  { rank: 8,  name: 'Noah Patel',      handle: '@noahgadgets',    units:  '5,960', gmv:  '$94,600', date: 'Jan 27, 2025', videoGPM: '$11.20', liveGPM: '$12.80' },
  { rank: 9,  name: 'Aria Thompson',   handle: '@ariamakeup',     units:  '5,310', gmv:  '$82,750', date: 'Jan 28, 2025', videoGPM: '$10.50', liveGPM: '$11.90' },
  { rank: 10, name: 'Dylan Brooks',    handle: '@dylanfood',      units:  '4,870', gmv:  '$71,400', date: 'Jan 30, 2025', videoGPM:  '$9.80', liveGPM: '$10.60' },
]

const tableData = computed(() => 
  CREATORS.map((c, idx) => ({
    ...c,
    avatarSrc: AVATARS[idx],
    thumbnails: t(idx),
  }))
)

const emit = defineEmits<{
  'row-click': [data: any, index: number]
  'row-hover': [data: any, index: number, isHovered: boolean]
}>()
</script>

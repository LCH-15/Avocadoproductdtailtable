<template>
  <div :style="appStyles">
    <h1 :style="titleStyles">Vue 3 Table Components Demo</h1>
    <p :style="subtitleStyles">
      Exported from React to Vue 3 Composition API with `<script setup>` syntax
    </p>

    <!-- Section 1: Top 10 GMV Creators -->
    <section :style="sectionStyles">
      <SectionTitle
        title="Top 10 GMV Creators"
        badge="7 columns · 1210px"
        badge-color="#22C55E"
        note="Hover + click-select interactions · avatar + video thumbnails · 64px row height"
      />
      <div :style="{ overflowX: 'auto' }">
        <TopCreatorsTable
          @row-click="handleCreatorClick"
          @row-hover="handleCreatorHover"
        />
      </div>
    </section>

    <!-- Section 2: Top 10 GMV Related Videos V2 -->
    <section :style="sectionStyles">
      <SectionTitle
        title="Top 10 GMV Related Videos"
        badge="8 columns · 1210px"
        badge-color="#6366F1"
        note="Video cell 326px · engagement rate in #22C55E · 80×60px thumbnails · 80px row height"
      />
      <div :style="{ overflowX: 'auto' }">
        <TopVideosTableV2 @row-hover="handleVideoHover" />
      </div>
    </section>

    <!-- Section 3: Top 10 GMV Related Lives -->
    <section :style="sectionStyles">
      <SectionTitle
        title="Top 10 GMV Related Lives"
        badge="7 columns · 1210px"
        badge-color="#EF4444"
        note="Live cell 362px · red LIVE badges · streaming data · 80px row height"
      />
      <div :style="{ overflowX: 'auto' }">
        <TopLivesTable @row-hover="handleLiveHover" />
      </div>
    </section>

    <!-- Event Log (for demonstration) -->
    <section :style="sectionStyles">
      <SectionTitle
        title="Event Log"
        badge="Demo"
        badge-color="#9CA3AF"
        note="Click or hover rows to see events emitted"
      />
      <div :style="eventLogStyles">
        <div v-for="(event, idx) in eventLog" :key="idx" :style="eventItemStyles">
          {{ event }}
        </div>
        <div v-if="eventLog.length === 0" :style="{ color: '#9CA3AF', fontStyle: 'italic' }">
          No events yet. Interact with the tables above.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TopCreatorsTable from './creators/TopCreatorsTable.vue'
import TopVideosTableV2 from './videos-v2/TopVideosTableV2.vue'
import TopLivesTable from './lives/TopLivesTable.vue'
import SectionTitle from './components/SectionTitle.vue'

const eventLog = ref<string[]>([])

function addEvent(message: string) {
  eventLog.value.unshift(message)
  if (eventLog.value.length > 10) {
    eventLog.value = eventLog.value.slice(0, 10)
  }
}

function handleCreatorClick(data: any, index: number) {
  addEvent(`🖱️ Creator row ${index + 1} clicked: ${data.creatorName}`)
}

function handleCreatorHover(data: any, index: number, isHovered: boolean) {
  if (isHovered) {
    addEvent(`👆 Creator row ${index + 1} hovered: ${data.creatorName}`)
  }
}

function handleVideoHover(data: any, index: number, isHovered: boolean) {
  if (isHovered) {
    addEvent(`👆 Video row ${index + 1} hovered: ${data.title}`)
  }
}

function handleLiveHover(data: any, index: number, isHovered: boolean) {
  if (isHovered) {
    addEvent(`👆 Live row ${index + 1} hovered: ${data.title}`)
  }
}

// Styles
const appStyles = {
  minHeight: '100vh',
  background: '#F3F4F6',
  padding: '48px 40px 80px',
  fontFamily: "'Inter', sans-serif",
}

const titleStyles = {
  fontSize: '32px',
  fontWeight: 700,
  color: '#111827',
  marginBottom: '8px',
}

const subtitleStyles = {
  fontSize: '16px',
  color: '#6B7280',
  marginBottom: '56px',
}

const sectionStyles = {
  marginBottom: '56px',
}

const eventLogStyles = {
  background: '#FFFFFF',
  borderRadius: '14px',
  border: '1px solid rgba(0,0,0,0.10)',
  padding: '20px',
  maxHeight: '300px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

const eventItemStyles = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '13px',
  color: '#374151',
  padding: '8px 12px',
  background: '#F9FAFB',
  borderRadius: '6px',
  borderLeft: '3px solid #6366F1',
}
</script>

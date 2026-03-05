<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
      overflow: 'hidden',
    }"
  >
    <!-- Thumbnail 80×60, radius 8 -->
    <div
      :style="{
        position: 'relative',
        width: '80px',
        height: '60px',
        borderRadius: '8px',
        overflow: 'hidden',
        flexShrink: 0,
        border: '1px solid rgba(0,0,0,0.07)',
      }"
    >
      <!-- Image -->
      <img
        :src="thumbnailSrc"
        :alt="title"
        :style="{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }"
      />

      <!-- Subtle gradient scrim — bottom for readability -->
      <div
        :style="{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.38) 100%)',
        }"
      />

      <!-- LIVE badge — top-left -->
      <div
        :style="{
          position: 'absolute',
          top: '5px',
          left: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          background: 'rgba(239,68,68,0.92)',
          borderRadius: '4px',
          paddingLeft: '4px',
          paddingRight: '5px',
          paddingTop: '2px',
          paddingBottom: '2px',
        }"
      >
        <!-- Pulsing dot -->
        <div
          :style="{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#FFFFFF',
            flexShrink: 0,
          }"
        />
        <span
          :style="{
            fontFamily: \"'Inter', sans-serif\",
            fontSize: '9px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1,
            letterSpacing: '0.04em',
          }"
        >
          LIVE
        </span>
      </div>
    </div>

    <!-- Text stack (vertical flex, gap 6) -->
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
      }"
    >
      <!-- Title — 12px SemiBold #111827, truncate 1 line -->
      <span
        :style="{
          fontFamily: \"'Inter', sans-serif\",
          fontSize: '12px',
          fontWeight: 600,
          color: '#111827',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 1.4,
        }"
      >
        {{ title }}
      </span>

      <!-- Creator row — 20px avatar + name 11px #6B7280 + optional emoji -->
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }"
      >
        <!-- Avatar 20px circular -->
        <div
          :style="{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '1px solid rgba(0,0,0,0.08)',
          }"
        >
          <img
            :src="creatorAvatar"
            :alt="creatorName"
            :style="{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }"
          />
        </div>

        <!-- Creator name -->
        <span
          :style="{
            fontFamily: \"'Inter', sans-serif\",
            fontSize: '11px',
            fontWeight: 400,
            color: '#6B7280',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }"
        >
          {{ creatorName }}
        </span>

        <!-- Optional emoji -->
        <span v-if="emoji" :style="{ fontSize: '12px', lineHeight: 1, flexShrink: 0 }">
          {{ emoji }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  thumbnailSrc: string
  title: string
  creatorAvatar: string
  creatorName: string
  /** Optional emoji shown after creator name, e.g. "🔥" */
  emoji?: string
}

defineProps<Props>()
</script>

# Quick Start Guide

Get up and running with Vue 3 table components in 5 minutes.

---

## 🚀 Installation (30 seconds)

```bash
# Install icon library
npm install lucide-vue-next

# Add Inter font to index.html
# <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 📋 Copy & Paste Examples

### Example 1: Basic Creators Table

```vue
<script setup lang="ts">
import TopCreatorsTable from './vue-exports/creators/TopCreatorsTable.vue'

function onRowClick(data: any, index: number) {
  console.log(`Clicked: ${data.creatorName} at position ${index + 1}`)
}
</script>

<template>
  <TopCreatorsTable @row-click="onRowClick" />
</template>
```

### Example 2: All Three Tables

```vue
<script setup lang="ts">
import TopCreatorsTable from './vue-exports/creators/TopCreatorsTable.vue'
import TopVideosTableV2 from './vue-exports/videos-v2/TopVideosTableV2.vue'
import TopLivesTable from './vue-exports/lives/TopLivesTable.vue'
</script>

<template>
  <div style="padding: 40px; background: #F3F4F6;">
    <div style="margin-bottom: 56px;">
      <h2>Top Creators</h2>
      <TopCreatorsTable />
    </div>
    
    <div style="margin-bottom: 56px;">
      <h2>Top Videos</h2>
      <TopVideosTableV2 />
    </div>
    
    <div>
      <h2>Top Live Streams</h2>
      <TopLivesTable />
    </div>
  </div>
</template>
```

### Example 3: With Event Tracking

```vue
<script setup lang="ts">
import { ref } from 'vue'
import TopCreatorsTable from './vue-exports/creators/TopCreatorsTable.vue'

const events = ref<string[]>([])

function addEvent(msg: string) {
  events.value.unshift(msg)
  if (events.value.length > 5) events.value.pop()
}

function handleClick(data: any, idx: number) {
  addEvent(`✓ Clicked row ${idx + 1}: ${data.creatorName}`)
}

function handleHover(data: any, idx: number, hovered: boolean) {
  if (hovered) {
    addEvent(`→ Hovering row ${idx + 1}: ${data.creatorName}`)
  }
}
</script>

<template>
  <div>
    <TopCreatorsTable 
      @row-click="handleClick"
      @row-hover="handleHover"
    />
    
    <!-- Event log -->
    <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px;">
      <h3>Recent Events</h3>
      <div v-for="event in events" :key="event" style="padding: 4px 0;">
        {{ event }}
      </div>
    </div>
  </div>
</template>
```

---

## 📦 What's Included

| Table | Events | Rows | Columns | Special Features |
|-------|--------|------|---------|-----------------|
| **Creators** | `@row-click`, `@row-hover` | 10 | 7 | Avatars, thumbnails, select state |
| **Videos** | `@row-hover` | 10 | 8 | Video thumbnails, engagement rate |
| **Lives** | `@row-hover` | 10 | 7 | LIVE badges, duration timers |

---

## 🎨 Customization

### Change Container Background

```vue
<template>
  <div style="background: #1a1a1a; padding: 40px;">
    <TopCreatorsTable />
  </div>
</template>
```

### Add Scrollable Container

```vue
<template>
  <div style="width: 100%; overflow-x: auto;">
    <TopCreatorsTable />
  </div>
</template>

<style scoped>
div::-webkit-scrollbar {
  height: 8px;
}
div::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 4px;
}
</style>
```

### Responsive Wrapper

```vue
<template>
  <div class="responsive-table">
    <TopCreatorsTable />
  </div>
</template>

<style scoped>
.responsive-table {
  width: 100%;
  max-width: 1210px;
  margin: 0 auto;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .responsive-table {
    padding: 0 16px;
  }
}
</style>
```

---

## 🔧 Event Payloads

### Creators Table Events

```typescript
// @row-click
(data: {
  creatorName: string,    // "Sophie Anderson"
  handle: string,         // "@sophiebeauty"
  gmv: string,           // "$248,600"
  unitsSold: string,     // "12,480"
  // ... more fields
}, index: number) => void

// @row-hover
(data: {...}, index: number, isHovered: boolean) => void
```

### Videos Table Events

```typescript
// @row-hover
(data: {
  title: string,              // "My Full Skincare Routine..."
  duration: string,           // "4:32"
  engagementRate: string,     // "8.87%"
  views: string,              // "3.2M"
  // ... more fields
}, index: number, isHovered: boolean) => void
```

### Lives Table Events

```typescript
// @row-hover
(data: {
  title: string,               // "✨ Skincare Secrets LIVE..."
  cumulativeViewers: string,   // "420K"
  liveDuration: string,        // "02:14:38"
  // ... more fields
}, index: number, isHovered: boolean) => void
```

---

## 🐛 Troubleshooting

### Icons Not Showing
```bash
npm install lucide-vue-next
```

### Font Looks Different
Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### TypeScript Errors
```bash
npm install -D typescript@^5.0.0
```

### Images Not Loading
Check Unsplash URLs are accessible. Replace with your own if needed.

---

## 📚 More Resources

- **Full Documentation**: See `/vue-exports/USAGE.md`
- **Conversion Details**: See `/vue-exports/CONVERSION-SUMMARY.md`
- **Demo App**: See `/vue-exports/App.vue`

---

## ⚡ One-Liner Setup

```bash
npm i lucide-vue-next && echo '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">' && echo "Done! Import components now."
```

---

## 💡 Pro Tips

1. **Wrap in overflow container** for horizontal scroll on mobile
2. **Use events for analytics** - track which rows users interact with
3. **Combine with search** - filter the data array before passing to table
4. **Add loading states** - show skeleton while fetching data
5. **Implement pagination** - show 10 rows at a time from larger dataset

---

## 🎯 Common Use Cases

### Dashboard
```vue
<TopCreatorsTable @row-click="showCreatorDetails" />
```

### Analytics
```vue
<TopVideosTableV2 @row-hover="preloadVideoData" />
```

### Live Monitoring
```vue
<TopLivesTable @row-hover="showLiveStats" />
```

---

**That's it!** You're ready to use the tables. Check the full docs for advanced features.

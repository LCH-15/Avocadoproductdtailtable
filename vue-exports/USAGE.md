# Vue 3 Table Components - Usage Guide

Complete guide for using the Vue 3 table components exported from React.

---

## Installation

### 1. Install Required Dependencies

```bash
npm install lucide-vue-next
```

### 2. Add Inter Font

Add to your `index.html` or main CSS file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Or in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

---

## Quick Start

### Basic Usage - Top 10 GMV Creators Table

```vue
<script setup lang="ts">
import TopCreatorsTable from '@/vue-exports/creators/TopCreatorsTable.vue'

function handleRowClick(data, index) {
  console.log('Row clicked:', data.creatorName, 'at index', index)
}

function handleRowHover(data, index, isHovered) {
  console.log('Row hover:', data.creatorName, isHovered ? 'entered' : 'left')
}
</script>

<template>
  <TopCreatorsTable 
    @row-click="handleRowClick"
    @row-hover="handleRowHover"
  />
</template>
```

### Basic Usage - Top 10 Videos Table

```vue
<script setup lang="ts">
import TopVideosTableV2 from '@/vue-exports/videos-v2/TopVideosTableV2.vue'

function handleVideoHover(data, index, isHovered) {
  console.log('Video:', data.title, isHovered)
}
</script>

<template>
  <TopVideosTableV2 @row-hover="handleVideoHover" />
</template>
```

### Basic Usage - Top 10 Lives Table

```vue
<script setup lang="ts">
import TopLivesTable from '@/vue-exports/lives/TopLivesTable.vue'

function handleLiveHover(data, index, isHovered) {
  console.log('Live stream:', data.title, isHovered)
}
</script>

<template>
  <TopLivesTable @row-hover="handleLiveHover" />
</template>
```

---

## Events API

### TopCreatorsTable Events

#### `@row-click`
Emitted when a row is clicked.

**Payload:**
- `data` (object): Row data including `creatorName`, `handle`, `gmv`, etc.
- `index` (number): Zero-based row index (0-9)

**Example:**
```vue
<TopCreatorsTable @row-click="(data, idx) => console.log(data.creatorName)" />
```

#### `@row-hover`
Emitted when mouse enters or leaves a row.

**Payload:**
- `data` (object): Row data
- `index` (number): Row index
- `isHovered` (boolean): `true` when entering, `false` when leaving

**Example:**
```vue
<TopCreatorsTable @row-hover="(data, idx, hovered) => {
  if (hovered) showTooltip(data)
}" />
```

### TopVideosTableV2 Events

#### `@row-hover`
Emitted when mouse enters or leaves a video row.

**Payload:**
- `data` (object): Video data including `title`, `duration`, `engagementRate`, etc.
- `index` (number): Row index
- `isHovered` (boolean): Hover state

### TopLivesTable Events

#### `@row-hover`
Emitted when mouse enters or leaves a live stream row.

**Payload:**
- `data` (object): Live stream data including `title`, `cumulativeViewers`, etc.
- `index` (number): Row index
- `isHovered` (boolean): Hover state

---

## Advanced Usage

### Tracking Selected Rows (Creators Table)

The Creators table supports row selection. Each row maintains its own selected state internally, or you can control it:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import TopCreatorsTable from '@/vue-exports/creators/TopCreatorsTable.vue'

const selectedRows = ref<Set<number>>(new Set())

function handleRowClick(data, index) {
  if (selectedRows.value.has(index)) {
    selectedRows.value.delete(index)
  } else {
    selectedRows.value.add(index)
  }
  
  console.log('Selected rows:', Array.from(selectedRows.value))
}
</script>

<template>
  <TopCreatorsTable @row-click="handleRowClick" />
</template>
```

### Custom Event Handling

```vue
<script setup lang="ts">
import { ref } from 'vue'
import TopCreatorsTable from '@/vue-exports/creators/TopCreatorsTable.vue'
import TopVideosTableV2 from '@/vue-exports/videos-v2/TopVideosTableV2.vue'

const recentActivity = ref<string[]>([])

function logActivity(message: string) {
  recentActivity.value.unshift(`[${new Date().toLocaleTimeString()}] ${message}`)
  if (recentActivity.value.length > 5) {
    recentActivity.value.pop()
  }
}

function handleCreatorClick(data, index) {
  logActivity(`Clicked creator: ${data.creatorName} (GMV: ${data.gmv})`)
}

function handleVideoHover(data, index, isHovered) {
  if (isHovered) {
    logActivity(`Viewing video: ${data.title}`)
  }
}
</script>

<template>
  <div>
    <TopCreatorsTable @row-click="handleCreatorClick" />
    <TopVideosTableV2 @row-hover="handleVideoHover" />
    
    <!-- Activity log -->
    <div class="activity-log">
      <div v-for="activity in recentActivity" :key="activity">
        {{ activity }}
      </div>
    </div>
  </div>
</template>
```

---

## Component Props

All table components are **self-contained** with data included. They don't accept props for data (the data is embedded in each component for demonstration purposes).

If you need to pass custom data, you can:

1. **Fork the component** and modify the data array
2. **Create a wrapper component** that accepts props and passes them to a modified version
3. **Use the individual row/cell components** to build a custom table

### Example: Custom Data with Row Component

```vue
<script setup lang="ts">
import { ref } from 'vue'
import TableHeader from '@/vue-exports/creators/TableHeader.vue'
import TableRow from '@/vue-exports/creators/TableRow.vue'

const customCreators = ref([
  {
    rank: 1,
    avatarSrc: 'https://example.com/avatar1.jpg',
    creatorName: 'Custom Creator',
    handle: '@custom',
    unitsSold: '15,000',
    gmv: '$300,000',
    date: 'Jan 1, 2025',
    videoGPM: '$20.00',
    liveGPM: '$25.00',
    thumbnails: ['url1', 'url2', 'url3'] as [string, string, string],
  },
  // ... more creators
])
</script>

<template>
  <div class="custom-table">
    <TableHeader />
    <TableRow
      v-for="(creator, idx) in customCreators"
      :key="creator.rank"
      v-bind="creator"
      :show-divider="idx < customCreators.length - 1"
    />
  </div>
</template>

<style scoped>
.custom-table {
  background: #FFFFFF;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.10);
  overflow: hidden;
  width: 1210px;
}
</style>
```

---

## Styling & Customization

### Using with Tailwind CSS

While the components use inline styles, you can wrap them in containers with Tailwind classes:

```vue
<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <TopCreatorsTable />
    </div>
    <div class="mb-8">
      <TopVideosTableV2 />
    </div>
  </div>
</template>
```

### Custom Container Styles

```vue
<template>
  <div :style="containerStyles">
    <TopCreatorsTable />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TopCreatorsTable from '@/vue-exports/creators/TopCreatorsTable.vue'

const containerStyles = computed(() => ({
  maxWidth: '1210px',
  margin: '0 auto',
  padding: '24px',
  background: '#FFFFFF',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}))
</script>
```

### Responsive Wrapper

```vue
<template>
  <div class="table-wrapper">
    <TopCreatorsTable />
  </div>
</template>

<style scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* smooth scrolling on iOS */
}

/* Custom scrollbar */
.table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.table-wrapper::-webkit-scrollbar-track {
  background: #F3F4F6;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 4px;
}

.table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}
</style>
```

---

## TypeScript Support

All components are fully typed with TypeScript.

### Type Imports

```typescript
import type { RowVariant } from '@/vue-exports/creators/TableRow.vue'

// Row variants: 'default' | 'hover' | 'selected'
const variant: RowVariant = 'selected'
```

### Event Handler Types

```vue
<script setup lang="ts">
import type { Ref } from 'vue'

interface CreatorData {
  creatorName: string
  handle: string
  gmv: string
  // ... other fields
}

const handleClick = (data: CreatorData, index: number): void => {
  console.log(data, index)
}

const handleHover = (data: CreatorData, index: number, isHovered: boolean): void => {
  console.log(data, index, isHovered)
}
</script>
```

---

## Performance Tips

### 1. Event Handler Optimization

Use `v-memo` for row components if rendering many tables:

```vue
<TableRow
  v-for="(item, idx) in items"
  :key="item.id"
  v-memo="[item.id, selectedId]"
  v-bind="item"
/>
```

### 2. Lazy Loading

Load tables on-demand using `defineAsyncComponent`:

```vue
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const TopCreatorsTable = defineAsyncComponent(
  () => import('@/vue-exports/creators/TopCreatorsTable.vue')
)
</script>
```

### 3. Virtual Scrolling (for large datasets)

For tables with 100+ rows, consider using `vue-virtual-scroller`:

```bash
npm install vue-virtual-scroller
```

---

## Common Patterns

### Pattern 1: Analytics Dashboard

```vue
<script setup lang="ts">
import { ref } from 'vue'
import TopCreatorsTable from '@/vue-exports/creators/TopCreatorsTable.vue'
import TopVideosTableV2 from '@/vue-exports/videos-v2/TopVideosTableV2.vue'

const selectedCreator = ref<string | null>(null)

function handleCreatorClick(data, index) {
  selectedCreator.value = data.creatorName
  // Fetch additional analytics for this creator
}
</script>

<template>
  <div class="dashboard">
    <TopCreatorsTable @row-click="handleCreatorClick" />
    
    <div v-if="selectedCreator" class="detail-panel">
      <h2>Analytics for {{ selectedCreator }}</h2>
      <TopVideosTableV2 />
    </div>
  </div>
</template>
```

### Pattern 2: Export to CSV

```vue
<script setup lang="ts">
function exportToCSV(data: any[], filename: string) {
  const headers = Object.keys(data[0])
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(h => row[h]).join(','))
  ].join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

// Usage with table data
function exportCreators() {
  // Extract data from table component or maintain separate data source
  exportToCSV(creatorsData, 'top-creators.csv')
}
</script>
```

### Pattern 3: Search & Filter

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import TableRow from '@/vue-exports/creators/TableRow.vue'
import TableHeader from '@/vue-exports/creators/TableHeader.vue'

const searchQuery = ref('')
const allCreators = ref([/* your data */])

const filteredCreators = computed(() => 
  allCreators.value.filter(c => 
    c.creatorName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)
</script>

<template>
  <div>
    <input v-model="searchQuery" placeholder="Search creators..." />
    
    <div class="table-container">
      <TableHeader />
      <TableRow
        v-for="(creator, idx) in filteredCreators"
        :key="creator.rank"
        v-bind="creator"
      />
    </div>
  </div>
</template>
```

---

## Troubleshooting

### Images Not Loading

Ensure Unsplash URLs are accessible. If behind a firewall, replace with your own image URLs.

### TypeScript Errors

Make sure you have the correct TypeScript version:
```bash
npm install -D typescript@^5.0.0
```

### Lucide Icons Not Showing

Install the correct package:
```bash
npm install lucide-vue-next
```

### Styling Issues

Ensure the Inter font is loaded and no conflicting global styles override the inline styles.

---

## Migration from React

Key differences when migrating from the React version:

| React | Vue 3 |
|-------|-------|
| `useState` | `ref` or `reactive` |
| `onClick` | `@click` |
| `onMouseEnter` | `@mouseenter` |
| Props spreading `{...props}` | `v-bind` |
| Children | Slots (`<slot />`) |
| CSS-in-JS style object | `:style` binding |
| `useEffect` | `watch` or `watchEffect` |
| Custom events | `defineEmits` + `emit()` |

---

## Support & Resources

- **Vue 3 Documentation**: https://vuejs.org/guide/introduction.html
- **Composition API**: https://vuejs.org/guide/extras/composition-api-faq.html
- **TypeScript with Vue**: https://vuejs.org/guide/typescript/overview.html
- **Lucide Icons**: https://lucide.dev/guide/packages/lucide-vue-next

---

## License

These components are provided as-is for use in your projects. Modify freely to suit your needs.

# Vue 3 Table Components Export

This directory contains Vue 3 Composition API versions of the React table components, using `<script setup>` syntax with TypeScript.

## Features

- ✅ Vue 3 Composition API with `<script setup>`
- ✅ TypeScript support
- ✅ Reactive data using `ref` and `computed`
- ✅ Event emitters for row interactions (`@row-click`, `@row-hover`)
- ✅ v-for rendering for dynamic rows
- ✅ Exact design specifications maintained (1210px width, Inter font, color tokens)

## Table Systems Included

### 1. Top 10 GMV Creators (`/creators`)
- 7 columns with creator avatars and video thumbnails
- Row height: 64px
- Interactive hover + click-select states

### 2. Top 10 GMV Related Videos V2 (`/videos-v2`)
- 8 columns with 80×60px video thumbnails
- Row height: 80px
- Engagement rate in green (#22C55E)

### 3. Top 10 GMV Related Lives (`/lives`)
- 7 columns with LIVE badges
- Row height: 80px
- Streaming data with red LIVE indicators

## Component Architecture

Each table follows modular atomic component structure:

```
TableName/
├── components/
│   ├── Cell.vue              # Generic cell container
│   ├── TextLayer.vue         # Typography component
│   ├── AvatarInstance.vue    # Circular avatar with rank badge
│   └── ThumbnailInstance.vue # Video thumbnail with play icon
├── TableRow.vue              # Row component with cells
├── TableHeader.vue           # Header row
└── Table.vue                 # Main table container
```

## Usage Example

```vue
<script setup>
import TopCreatorsTable from './vue-exports/creators/TopCreatorsTable.vue'

// Listen to row events
function handleRowClick(rowData, index) {
  console.log('Row clicked:', rowData, index)
}

function handleRowHover(rowData, index, isHovered) {
  console.log('Row hover:', rowData, index, isHovered)
}
</script>

<template>
  <TopCreatorsTable 
    @row-click="handleRowClick"
    @row-hover="handleRowHover"
  />
</template>
```

## Design Specifications

- **Container**: 1210px width, 14px radius, white background
- **Typography**: Inter font family
  - Headers: 14px SemiBold #111827
  - Content: 12px Regular #374151
  - GMV values: 12px SemiBold #111827
- **Spacing**: 16px horizontal gap, 16px padding
- **Row States**: default (white), hover (#F9FAFB), selected (#F0FDF4)
- **Colors**: 
  - Engagement rate: #22C55E
  - LIVE badge: #EF4444
  - Borders: rgba(0,0,0,0.05) for dividers, rgba(0,0,0,0.10) for container

## Installation Requirements

Ensure you have the following in your Vue 3 project:

```bash
npm install lucide-vue-next  # For icons (Play, etc.)
```

## Notes

- All images use Unsplash URLs (same as React version)
- Components maintain exact pixel-perfect layout from Figma design
- Responsive behavior preserved
- All hover states and interactions replicated

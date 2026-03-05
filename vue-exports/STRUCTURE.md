# Vue 3 Table Components - Directory Structure

Complete visualization of the exported Vue 3 table components.

---

## 📁 Directory Tree

```
vue-exports/
│
├── 📄 README.md                      # Overview, features, installation
├── 📄 USAGE.md                       # Comprehensive usage guide
├── 📄 QUICK-START.md                 # 5-minute quick start
├── 📄 CONVERSION-SUMMARY.md          # React → Vue conversion details
├── 📄 STRUCTURE.md                   # This file
├── 📄 index.ts                       # Main export file
├── 📄 package.json                   # Package configuration
├── 📄 App.vue                        # Demo application
│
├── 📁 creators/                      # Top 10 GMV Creators Table
│   ├── 📁 components/
│   │   ├── 📄 Cell.vue              # Generic cell container (240-212px)
│   │   ├── 📄 TextLayer.vue         # Typography system (body/label/gmv/sub/header)
│   │   ├── 📄 AvatarInstance.vue    # 40×40px avatar with rank badge
│   │   └── 📄 ThumbnailInstance.vue # 48×36px video thumbnail with play icon
│   ├── 📄 TableHeader.vue           # Header row with 7 column labels
│   ├── 📄 TableRow.vue              # Interactive row (64px height)
│   └── 📄 TopCreatorsTable.vue      # Main table container (1210px)
│
├── 📁 videos-v2/                     # Top 10 GMV Related Videos Table
│   ├── 📁 components/
│   │   ├── 📄 V2Cell.vue            # Cell container for videos (326-100px)
│   │   └── 📄 V2VideoCell.vue       # 80×60px thumbnail + metadata stack
│   ├── 📄 colSpec.ts                # Column widths & constants
│   ├── 📄 V2TableHeader.vue         # Header row with 8 column labels
│   ├── 📄 V2TableRow.vue            # Video row (80px height)
│   └── 📄 TopVideosTableV2.vue      # Main table container (1210px)
│
├── 📁 lives/                         # Top 10 GMV Related Lives Table
│   ├── 📁 components/
│   │   └── 📄 LiveCell.vue          # 80×60px thumbnail with LIVE badge
│   ├── 📄 liveColSpec.ts            # Column widths & constants
│   ├── 📄 LiveTableHeader.vue       # Header row with 7 column labels
│   ├── 📄 LiveTableRow.vue          # Live stream row (80px height)
│   └── 📄 TopLivesTable.vue         # Main table container (1210px)
│
└── 📁 components/                    # Shared components
    └── 📄 SectionTitle.vue          # Title with badge component
```

---

## 📊 Component Hierarchy

### Top 10 GMV Creators Table

```
TopCreatorsTable.vue (1210px container)
├── TableHeader.vue
│   └── Cell.vue × 7
│       └── TextLayer.vue (header variant)
│
└── TableRow.vue × 10 (64px each)
    ├── Cell.vue (Name 240px)
    │   ├── AvatarInstance.vue (40×40px)
    │   └── TextLayer.vue × 2 (label + sub)
    │
    ├── Cell.vue (Units 120px)
    │   └── TextLayer.vue (body)
    │
    ├── Cell.vue (GMV 120px)
    │   └── TextLayer.vue (gmv variant)
    │
    ├── Cell.vue (Date 150px)
    │   └── TextLayer.vue (body)
    │
    ├── Cell.vue (VideoGPM 120px)
    │   └── TextLayer.vue (body)
    │
    ├── Cell.vue (LiveGPM 120px)
    │   └── TextLayer.vue (body)
    │
    └── Cell.vue (Videos 212px)
        └── ThumbnailInstance.vue × 3 (overlapping -8px)
```

### Top 10 GMV Related Videos V2 Table

```
TopVideosTableV2.vue (1210px container)
├── V2TableHeader.vue
│   └── V2Cell.vue × 8
│
└── V2TableRow.vue × 10 (80px each)
    ├── V2Cell.vue (Video 326px)
    │   └── V2VideoCell.vue
    │       ├── Thumbnail (80×60px)
    │       │   ├── Play icon
    │       │   └── Duration badge
    │       └── Text stack
    │           ├── Title (12px SemiBold)
    │           ├── Duration (11px)
    │           └── Creator (20px avatar + name)
    │
    ├── V2Cell.vue (Units 110px)
    ├── V2Cell.vue (GMV 110px)
    ├── V2Cell.vue (Views 100px)
    ├── V2Cell.vue (Likes 100px)
    ├── V2Cell.vue (EngRate 130px) [green]
    ├── V2Cell.vue (Comments 90px)
    └── V2Cell.vue (Published 100px)
```

### Top 10 GMV Related Lives Table

```
TopLivesTable.vue (1210px container)
├── LiveTableHeader.vue
│   └── Cell × 7
│
└── LiveTableRow.vue × 10 (80px each)
    ├── Cell (Live 362px)
    │   └── LiveCell.vue
    │       ├── Thumbnail (80×60px)
    │       │   ├── LIVE badge (red) [top-left]
    │       │   └── Gradient scrim
    │       └── Text stack
    │           ├── Title (12px SemiBold)
    │           └── Creator (20px avatar + name + emoji)
    │
    ├── Cell (Units 110px)
    ├── Cell (GMV 110px)
    ├── Cell (CumViewers 140px)
    ├── Cell (Duration 130px)
    ├── Cell (Peak 120px)
    └── Cell (StartTime 110px)
```

---

## 🎨 Design Token Reference

### Typography Scale

| Variant | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| `header` | 14px | 600 | #111827 | Table headers |
| `label` | 12px | 500 | #111827 | Creator names |
| `gmv` | 12px | 600 | #111827 | GMV values (bold) |
| `body` | 12px | 400 | #374151 | Regular data |
| `sub` | 11px | 400 | #9CA3AF | Handles, metadata |

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Gray-900 | #111827 | Headers, GMV values |
| Gray-700 | #374151 | Body text |
| Gray-500 | #6B7280 | Secondary text |
| Gray-400 | #9CA3AF | Subtle text |
| Gray-50 | #F9FAFB | Hover background |
| Green-500 | #22C55E | Engagement rate, selected |
| Green-50 | #F0FDF4 | Selected background |
| Red-500 | #EF4444 | LIVE badges |
| White | #FFFFFF | Default background |

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Gap | 16px | Between cells |
| Padding-X | 16px | Row horizontal padding |
| Padding-Y | 12px | Header vertical padding |
| Border-radius | 14px | Container corners |
| Small-radius | 8px | Thumbnails, badges |

### Layout Dimensions

#### Creators Table (1210px total)
| Column | Width | Content |
|--------|-------|---------|
| Name | 240px | Avatar + 2 text lines |
| Units | 120px | Number |
| GMV | 120px | Currency (bold) |
| Date | 150px | Date string |
| VideoGPM | 120px | Currency |
| LiveGPM | 120px | Currency |
| Videos | 212px | 3 thumbnails |
| **Padding** | 32px | 16px × 2 |
| **Gaps** | 96px | 16px × 6 |

#### Videos V2 Table (1210px total)
| Column | Width | Content |
|--------|-------|---------|
| Video | 326px | Thumbnail + metadata |
| Units | 110px | Number |
| GMV | 110px | Currency (bold) |
| Views | 100px | Number |
| Likes | 100px | Number |
| EngRate | 130px | Percentage (green) |
| Comments | 90px | Number |
| Published | 100px | Date |
| **Padding** | 32px | 16px × 2 |
| **Gaps** | 112px | 16px × 7 |

#### Lives Table (1210px total)
| Column | Width | Content |
|--------|-------|---------|
| Live | 362px | Thumbnail + metadata |
| Units | 110px | Number |
| GMV | 110px | Currency (bold) |
| CumViewers | 140px | Number |
| Duration | 130px | HH:MM:SS |
| Peak | 120px | Number |
| StartTime | 110px | Date |
| **Padding** | 32px | 16px × 2 |
| **Gaps** | 96px | 16px × 6 |

---

## 🔌 Import Patterns

### Individual Components

```typescript
// Import specific table
import TopCreatorsTable from './vue-exports/creators/TopCreatorsTable.vue'

// Import table parts
import TableHeader from './vue-exports/creators/TableHeader.vue'
import TableRow from './vue-exports/creators/TableRow.vue'

// Import atomic components
import Cell from './vue-exports/creators/components/Cell.vue'
import TextLayer from './vue-exports/creators/components/TextLayer.vue'
import AvatarInstance from './vue-exports/creators/components/AvatarInstance.vue'
```

### Batch Imports

```typescript
// Import all from index
import {
  TopCreatorsTable,
  TopVideosTableV2,
  TopLivesTable,
  type RowVariant,
  type TextVariant,
} from './vue-exports'
```

### Dynamic Imports

```typescript
// Lazy load for code splitting
const TopCreatorsTable = defineAsyncComponent(
  () => import('./vue-exports/creators/TopCreatorsTable.vue')
)
```

---

## 📦 Bundle Sizes (Approximate)

| Component | Size (uncompressed) | Size (gzipped) |
|-----------|---------------------|----------------|
| TopCreatorsTable | ~15 KB | ~4 KB |
| TopVideosTableV2 | ~12 KB | ~3 KB |
| TopLivesTable | ~11 KB | ~3 KB |
| **All three** | ~38 KB | ~10 KB |

*Note: Sizes include embedded demo data. Remove data for production use.*

---

## 🧩 Component Dependencies

### External Dependencies
- `vue` (peer dependency)
- `lucide-vue-next` (for Play icon)

### Internal Dependencies

**Creators Table:**
- Cell.vue
- TextLayer.vue
- AvatarInstance.vue
- ThumbnailInstance.vue
- TableHeader.vue
- TableRow.vue
- TopCreatorsTable.vue

**Videos V2 Table:**
- V2Cell.vue
- V2VideoCell.vue
- V2TableHeader.vue
- V2TableRow.vue
- TopVideosTableV2.vue
- colSpec.ts

**Lives Table:**
- LiveCell.vue
- LiveTableHeader.vue
- LiveTableRow.vue
- TopLivesTable.vue
- liveColSpec.ts

---

## 🎯 File Purposes

| File Type | Purpose | Example |
|-----------|---------|---------|
| `Table.vue` | Main container, data, events | `TopCreatorsTable.vue` |
| `TableHeader.vue` | Column labels | `V2TableHeader.vue` |
| `TableRow.vue` | Individual row logic | `LiveTableRow.vue` |
| `Cell.vue` | Column container | `Cell.vue`, `V2Cell.vue` |
| `*Cell.vue` | Complex cell content | `V2VideoCell.vue`, `LiveCell.vue` |
| `*Instance.vue` | Atomic components | `AvatarInstance.vue` |
| `TextLayer.vue` | Typography system | `TextLayer.vue` |
| `colSpec.ts` | Constants, widths | `liveColSpec.ts` |

---

## 🚀 Development Workflow

1. **Choose a table** based on your use case
2. **Import the component** in your Vue 3 app
3. **Add event listeners** for interactivity
4. **Wrap in container** for responsive behavior
5. **Customize styling** via wrapper components
6. **Replace demo data** with real API data

---

## 📝 Quick Reference

### Most Commonly Used

```typescript
// 1. Import
import TopCreatorsTable from './vue-exports/creators/TopCreatorsTable.vue'

// 2. Use
<TopCreatorsTable @row-click="handleClick" @row-hover="handleHover" />

// 3. Handle events
function handleClick(data: any, index: number) { }
function handleHover(data: any, index: number, hovered: boolean) { }
```

### Building Custom Tables

```typescript
// Use individual components
import TableHeader from './vue-exports/creators/TableHeader.vue'
import TableRow from './vue-exports/creators/TableRow.vue'

// Build your own table
<div class="custom-table">
  <TableHeader />
  <TableRow v-for="item in data" :key="item.id" v-bind="item" />
</div>
```

---

For more details, see:
- 📖 **USAGE.md** - Complete usage guide
- 🚀 **QUICK-START.md** - Get started in 5 minutes
- 🔄 **CONVERSION-SUMMARY.md** - React → Vue conversion notes

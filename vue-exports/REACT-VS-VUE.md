# React vs Vue 3 - Side-by-Side Comparison

Visual comparison of the same table components in React and Vue 3.

---

## 📊 Component Structure

### React (Original)
```tsx
// /src/app/components/row/TableRowCreator.tsx
import React, { useState } from "react";
import { Cell } from "./Cell";
import { TextLayer } from "./TextLayer";

export interface TableRowCreatorProps {
  creatorName: string;
  gmv: string;
  // ... more props
}

export function TableRowCreator({
  creatorName,
  gmv,
  onClick,
}: TableRowCreatorProps) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        onClick ? onClick() : setSelected((p) => !p);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: selected ? "#F0FDF4" : hovered ? "#F9FAFB" : "#FFFFFF",
      }}
    >
      <Cell width={240}>
        <TextLayer variant="label">{creatorName}</TextLayer>
      </Cell>
      <Cell width={120}>
        <TextLayer variant="gmv">{gmv}</TextLayer>
      </Cell>
    </div>
  );
}
```

### Vue 3 (Converted)
```vue
<!-- /vue-exports/creators/TableRow.vue -->
<template>
  <div
    @click="handleClick"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    :style="{
      background: selected ? '#F0FDF4' : hovered ? '#F9FAFB' : '#FFFFFF',
    }"
  >
    <Cell :width="240">
      <TextLayer variant="label">{{ creatorName }}</TextLayer>
    </Cell>
    <Cell :width="120">
      <TextLayer variant="gmv">{{ gmv }}</TextLayer>
    </Cell>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Cell from './components/Cell.vue'
import TextLayer from './components/TextLayer.vue'

interface Props {
  creatorName: string
  gmv: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()

const hovered = ref(false)
const selected = ref(false)

function handleClick() {
  selected.value = !selected.value
  emit('click')
}
</script>
```

---

## 🔄 State Management

### React: useState Hook
```tsx
import { useState } from "react";

function Component() {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  
  // Use state
  setHovered(true);
  console.log(hovered); // false (not updated yet)
  
  // Update derived state
  const background = hovered ? "#F9FAFB" : "#FFFFFF";
  
  return <div style={{ background }}>{/* ... */}</div>;
}
```

### Vue 3: ref and computed
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const hovered = ref(false)
const selected = ref(false)

// Use state
hovered.value = true
console.log(hovered.value) // true (updated immediately)

// Computed derived state
const background = computed(() => 
  hovered.value ? '#F9FAFB' : '#FFFFFF'
)
</script>

<template>
  <div :style="{ background }">
    <!-- ... -->
  </div>
</template>
```

---

## 🎯 Event Handling

### React: Callback Props
```tsx
interface Props {
  onClick?: (data: any, index: number) => void;
  onHover?: (data: any, isHovered: boolean) => void;
}

function TableRow({ onClick, onHover }: Props) {
  const handleClick = () => {
    onClick?.(rowData, rowIndex);
  };
  
  const handleHover = () => {
    onHover?.(rowData, true);
  };
  
  return (
    <div onClick={handleClick} onMouseEnter={handleHover}>
      {/* ... */}
    </div>
  );
}

// Usage
<TableRow 
  onClick={(data, idx) => console.log(data)} 
  onHover={(data, hovered) => console.log(hovered)}
/>
```

### Vue 3: defineEmits
```vue
<script setup lang="ts">
const emit = defineEmits<{
  click: [data: any, index: number]
  hover: [data: any, isHovered: boolean]
}>()

function handleClick() {
  emit('click', rowData, rowIndex)
}

function handleHover() {
  emit('hover', rowData, true)
}
</script>

<template>
  <div @click="handleClick" @mouseenter="handleHover">
    <!-- ... -->
  </div>
</template>

<!-- Usage -->
<TableRow 
  @click="(data, idx) => console.log(data)" 
  @hover="(data, hovered) => console.log(hovered)"
/>
```

---

## 📦 Props Definition

### React: Interface + Destructuring
```tsx
interface TableRowProps {
  creatorName: string;
  handle: string;
  gmv: string;
  optional?: boolean;
}

function TableRow({
  creatorName,
  handle,
  gmv,
  optional = false,
}: TableRowProps) {
  return (
    <div>
      <span>{creatorName}</span>
      <span>{handle}</span>
      <span>{gmv}</span>
    </div>
  );
}

// Usage
<TableRow 
  creatorName="Sophie" 
  handle="@sophie" 
  gmv="$248,600"
/>
```

### Vue 3: defineProps with TypeScript
```vue
<script setup lang="ts">
interface Props {
  creatorName: string
  handle: string
  gmv: string
  optional?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  optional: false,
})
</script>

<template>
  <div>
    <span>{{ creatorName }}</span>
    <span>{{ handle }}</span>
    <span>{{ gmv }}</span>
  </div>
</template>

<!-- Usage -->
<TableRow 
  creator-name="Sophie" 
  handle="@sophie" 
  gmv="$248,600"
/>
```

---

## 🔁 List Rendering

### React: Array.map()
```tsx
interface Creator {
  id: number;
  name: string;
  gmv: string;
}

const creators: Creator[] = [
  { id: 1, name: "Sophie", gmv: "$248,600" },
  { id: 2, name: "Marcus", gmv: "$198,340" },
];

function CreatorsTable() {
  return (
    <div>
      {creators.map((creator, idx) => (
        <TableRow
          key={creator.id}
          name={creator.name}
          gmv={creator.gmv}
          showDivider={idx < creators.length - 1}
        />
      ))}
    </div>
  );
}
```

### Vue 3: v-for Directive
```vue
<script setup lang="ts">
interface Creator {
  id: number
  name: string
  gmv: string
}

const creators: Creator[] = [
  { id: 1, name: 'Sophie', gmv: '$248,600' },
  { id: 2, name: 'Marcus', gmv: '$198,340' },
]
</script>

<template>
  <div>
    <TableRow
      v-for="(creator, idx) in creators"
      :key="creator.id"
      :name="creator.name"
      :gmv="creator.gmv"
      :show-divider="idx < creators.length - 1"
    />
  </div>
</template>
```

---

## 🎨 Conditional Rendering

### React: Ternary / && Operator
```tsx
function Component({ emoji, isLive, showDivider }) {
  return (
    <div>
      {/* Conditional element */}
      {emoji && <span>{emoji}</span>}
      
      {/* Conditional attribute */}
      <div style={{
        background: isLive ? "#EF4444" : "#FFFFFF",
        borderBottom: showDivider ? "1px solid #ccc" : "none",
      }}>
        Content
      </div>
      
      {/* Conditional component */}
      {isLive ? (
        <LiveBadge />
      ) : (
        <RegularBadge />
      )}
    </div>
  );
}
```

### Vue 3: v-if / v-show Directives
```vue
<template>
  <div>
    <!-- Conditional element -->
    <span v-if="emoji">{{ emoji }}</span>
    
    <!-- Conditional attribute -->
    <div :style="{
      background: isLive ? '#EF4444' : '#FFFFFF',
      borderBottom: showDivider ? '1px solid #ccc' : 'none',
    }">
      Content
    </div>
    
    <!-- Conditional component -->
    <LiveBadge v-if="isLive" />
    <RegularBadge v-else />
  </div>
</template>
```

---

## 💅 Style Binding

### React: Style Object
```tsx
function Component({ width, hovered, selected }) {
  const dynamicStyles = {
    width: `${width}px`,
    background: hovered ? "#F9FAFB" : "#FFFFFF",
    boxShadow: selected ? "inset 3px 0 0 0 #22C55E" : "none",
    transition: "background 100ms ease",
  };
  
  return (
    <div style={dynamicStyles}>
      <span style={{ fontSize: 12, color: "#374151" }}>
        Text
      </span>
    </div>
  );
}
```

### Vue 3: :style Binding
```vue
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  width: number
  hovered: boolean
  selected: boolean
}>()

const dynamicStyles = computed(() => ({
  width: `${props.width}px`,
  background: props.hovered ? '#F9FAFB' : '#FFFFFF',
  boxShadow: props.selected ? 'inset 3px 0 0 0 #22C55E' : 'none',
  transition: 'background 100ms ease',
}))
</script>

<template>
  <div :style="dynamicStyles">
    <span :style="{ fontSize: '12px', color: '#374151' }">
      Text
    </span>
  </div>
</template>
```

---

## 🧩 Child Components / Slots

### React: Children Prop
```tsx
// Cell component
interface CellProps {
  width: number;
  children: React.ReactNode;
}

function Cell({ width, children }: CellProps) {
  return (
    <div style={{ width }}>
      {children}
    </div>
  );
}

// Usage
<Cell width={240}>
  <TextLayer>Sophie Anderson</TextLayer>
  <TextLayer>@sophie</TextLayer>
</Cell>
```

### Vue 3: Slots
```vue
<!-- Cell.vue component -->
<script setup lang="ts">
interface Props {
  width: number
}
defineProps<Props>()
</script>

<template>
  <div :style="{ width: `${width}px` }">
    <slot />
  </div>
</template>

<!-- Usage -->
<Cell :width="240">
  <TextLayer>Sophie Anderson</TextLayer>
  <TextLayer>@sophie</TextLayer>
</Cell>
```

---

## 🔢 Computed Values

### React: useMemo Hook
```tsx
import { useMemo } from "react";

function Component({ variant, hovered, selected }) {
  const resolvedVariant = useMemo(() => {
    if (variant) return variant;
    if (selected) return "selected";
    if (hovered) return "hover";
    return "default";
  }, [variant, hovered, selected]);
  
  const backgroundColor = useMemo(() => {
    const colors = {
      default: "#FFFFFF",
      hover: "#F9FAFB",
      selected: "#F0FDF4",
    };
    return colors[resolvedVariant];
  }, [resolvedVariant]);
  
  return <div style={{ background: backgroundColor }} />;
}
```

### Vue 3: computed
```vue
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: string
  hovered: boolean
  selected: boolean
}>()

const resolvedVariant = computed(() => {
  if (props.variant) return props.variant
  if (props.selected) return 'selected'
  if (props.hovered) return 'hover'
  return 'default'
})

const backgroundColor = computed(() => {
  const colors = {
    default: '#FFFFFF',
    hover: '#F9FAFB',
    selected: '#F0FDF4',
  }
  return colors[resolvedVariant.value]
})
</script>

<template>
  <div :style="{ background: backgroundColor }" />
</template>
```

---

## 📱 Complete Component Comparison

### React: Full Table Row
```tsx
import React, { useState } from "react";
import { Cell } from "./Cell";
import { TextLayer } from "./TextLayer";
import { AvatarInstance } from "./AvatarInstance";

export interface TableRowProps {
  avatarSrc: string;
  creatorName: string;
  handle: string;
  gmv: string;
  onClick?: () => void;
}

export function TableRow({
  avatarSrc,
  creatorName,
  handle,
  gmv,
  onClick,
}: TableRowProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      role="row"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: 16,
        padding: "0 16px",
        height: 64,
        background: hovered ? "#F9FAFB" : "#FFFFFF",
        cursor: "pointer",
      }}
    >
      <Cell width={240}>
        <div style={{ display: "flex", gap: 10 }}>
          <AvatarInstance src={avatarSrc} alt={creatorName} />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextLayer variant="label">{creatorName}</TextLayer>
            <TextLayer variant="sub">{handle}</TextLayer>
          </div>
        </div>
      </Cell>
      
      <Cell width={120}>
        <TextLayer variant="gmv">{gmv}</TextLayer>
      </Cell>
    </div>
  );
}
```

### Vue 3: Full Table Row
```vue
<template>
  <div
    role="row"
    @click="emit('click')"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    :style="{
      display: 'flex',
      gap: '16px',
      padding: '0 16px',
      height: '64px',
      background: hovered ? '#F9FAFB' : '#FFFFFF',
      cursor: 'pointer',
    }"
  >
    <Cell :width="240">
      <div :style="{ display: 'flex', gap: '10px' }">
        <AvatarInstance :src="avatarSrc" :alt="creatorName" />
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
          <TextLayer variant="label">{{ creatorName }}</TextLayer>
          <TextLayer variant="sub">{{ handle }}</TextLayer>
        </div>
      </div>
    </Cell>
    
    <Cell :width="120">
      <TextLayer variant="gmv">{{ gmv }}</TextLayer>
    </Cell>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Cell from './components/Cell.vue'
import TextLayer from './components/TextLayer.vue'
import AvatarInstance from './components/AvatarInstance.vue'

interface Props {
  avatarSrc: string
  creatorName: string
  handle: string
  gmv: string
}

defineProps<Props>()

const emit = defineEmits<{
  click: []
}>()

const hovered = ref(false)
</script>
```

---

## 🎯 Key Takeaways

### Syntax Differences
| Feature | React | Vue 3 |
|---------|-------|-------|
| **State** | `useState(value)` | `ref(value)` |
| **Access State** | Direct: `state` | `.value`: `state.value` |
| **Events** | `onEvent={fn}` | `@event="fn"` |
| **Props** | Destructure params | `defineProps<T>()` |
| **Emit** | Callback props | `defineEmits<T>()` |
| **Computed** | `useMemo(() => ...)` | `computed(() => ...)` |
| **Loops** | `.map()` | `v-for` |
| **Condition** | `{cond && ...}` | `v-if="cond"` |
| **Styles** | `style={{}}` | `:style="{}"` |
| **Children** | `{children}` | `<slot />` |

### Conceptual Differences
- **React**: Explicit state updates, immutable patterns
- **Vue 3**: Reactive proxies, automatic tracking
- **React**: JSX mixes logic and template
- **Vue 3**: Separate template and script sections
- **React**: Callbacks for events
- **Vue 3**: Event emitters with typed payloads

### Both Frameworks
- ✅ TypeScript support
- ✅ Composition API pattern
- ✅ Component modularity
- ✅ Reactive state management
- ✅ Modern, performant

---

## 📚 Further Reading

- **React Docs**: https://react.dev/
- **Vue 3 Docs**: https://vuejs.org/
- **React to Vue Guide**: https://vuejs.org/guide/extras/composition-api-faq.html

---

This comparison should help you understand the conversion patterns used throughout the exported components.

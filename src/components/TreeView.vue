<template>
  <div 
    class="tree-view"
    :style="{ 'margin-left': `${depth * 15}px` }"
  >
    <div 
      :class="['tree-view__inner', { selected: node.isSelected}]"
      @click="nodeClicked"
    >
      <IconSprite 
        v-if="hasChildren"
        id="folder"
        viewBox="0 -3 30 24"
        :name="icon"
      />
      <IconSprite
        v-else
        id="file"
        viewBox="0 0 24 30"
        name="file"
      />
      {{ node.name }}
    </div>

  </div>
  <TreeView
    v-if="expanded"
    v-for="child in node.children"
    :key="child.name"
    :node="child"
    :depth="depth + 1"
    @onClick="(node: ITreeNode) => emit('onClick', node)"
  />
</template>

<script setup lang="ts">
import type { ITreeNode } from '../interfaces'
interface IProps {
  node: ITreeNode
  depth?: number
}
const props = withDefaults(defineProps<IProps>(), {
  depth: 0
})

interface IEmits {
  (e: 'onClick', node: ITreeNode): void
}

const emit = defineEmits<IEmits>()

const expanded = ref<boolean>(false)
const icon = computed(() => expanded.value ? 'folder-minus' : 'folder-plus')
const hasChildren = computed(() => props.node.children)

const nodeClicked = () => {
  expanded.value = !expanded.value
  emit('onClick', props.node)
}
</script>

<style lang="scss" scoped>
.tree-view {
  text-align: left;

  &__inner {
    display: inline;
    cursor: pointer;
    padding: 3px 3px 0 0;
    border: 1px solid transparent;
    border-radius: 5px;
    &.selected{
      background-color: $primary;
      color: white;
    }
    &:hover {
      border: 1px solid $success;
    }
  }
}
</style>
<template>
  <div class="container">
    <main>
      <Button 
        @click="isVisibleModal = true"
      >
        Открыть
      </Button>
      <div 
        v-if="isShowSelectedInstanse"
        class="selected-box"
      >
        Вы выбрали {{ selectedFolder?.children ? 'папку' : 'файл' }}: <br> c именем {{ selectedFolder?.name }} <br> и ID {{ selectedFolder?.id }}
      </div>
      <Modal
        v-if="isVisibleModal"
        :title="titleModal"
        @confirm="isShowSelectedInstanse = true"
        @close="isVisibleModal = false">
        <TreeView 
          :node="tree"
          @onClick="setSelectedFolder"
        />
      </Modal>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { ITreeNode } from '../interfaces'
import { dataTree } from '../mockData'
const isVisibleModal = ref<boolean>(false)
const isShowSelectedInstanse = ref<boolean>(false)
const selectedFolder = ref<ITreeNode>()
const titleModal = 'Список папок текущего проекта'
const tree = ref<ITreeNode>(dataTree)


const setSelected = (tree: ITreeNode, id: number) => {
  if (tree.id === id) {
    tree.isSelected = true
  } else {
    delete tree.isSelected
  }
  if (tree.children) {
    tree.children.forEach((child) => setSelected(child, id))
  }
  return tree
}

const setSelectedFolder = (node: ITreeNode) => {
  selectedFolder.value = node
  setSelected(tree.value, node.id)
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 97vh;
  justify-content: center;
  align-items: center;
}

.selected-box {
  margin-top: 50px;
  padding: 15px;
  border: 2px solid $success;
}
</style>
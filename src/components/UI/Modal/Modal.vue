<template>
  <Teleport to="body">
    <div class="modal" @click.self="emit('close')">
      <div class="modal__wrapper">
        <div class="modal__header">
          <div class="modal__title">{{ props.title }}</div>
          <IconSprite id="modal_close" class="modal__close" name="close" @click="emit('close')" />
        </div>
        <div class="modal__body">
          <slot />
        </div>
        <div class="modal__footer">
          <div class="modal__btns">
            <Button class="modal__btn" color="success" @click="confirm">OK</Button>
            <Button class="modal__btn" color="danger" @click="emit('close')">Закрыть</Button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}
const props = defineProps<IProps>()

interface IEmits {
  (e: 'confirm'): void
  (e: 'close'): void
}

const emit = defineEmits<IEmits>()

const confirm = () => {
  emit('close')
  emit('confirm')
}
</script>

<style scoped lang="scss">
@import 'modal.scss'
</style>

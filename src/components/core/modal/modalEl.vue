<template>
  <teleport to="body">
    <Transition name="fade">
      <div class="modal">
        <div class="modal__backdrop"></div>
        <slot/>
      </div>
    </Transition>
  </teleport>
</template>

<script>
export default {
  mounted() {
    const body = document.body;
    const width = body.getBoundingClientRect().width;
    body.style['margin-right'] = `calc(100vw - ${width}px)`;
    body.classList.add('overflow-hidden');
  },
  beforeUnmount() {
    const body = document.body;
    body.style['margin-right'] = `0`;
    body.classList.remove('overflow-hidden');
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: auto;
  pointer-events: none;

  .modal__backdrop {
    background-color: rgba($color: #00023b, $alpha: 0.75);
    position: fixed;
    top: 0;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    cursor: pointer;
    pointer-events: all;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

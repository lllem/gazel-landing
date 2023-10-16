<template>

  <div
  v-if="open"
  class="modal__backdrop"
  @click="open = false"></div>

  <div v-if="open" class="modal">
    <div class="modal__wrapper p-4">
      <div class="modal__content bg-white rounded-xl shadow-xl p-4 my-10 container max-w-screen-sm mx-auto">

        <button class="modal__close" @click="open = false">
          <icon-el icon="x-mark"/>
        </button>

        <header class="modal__header text-2xl font-bold mb-4">
          <slot name="header"/>
          <slot name="default"/>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    modelValue: Boolean,
  },

  computed: {
    open: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },

  methods: {},

  mounted() {
    const body = document.body;
    const width = body.getBoundingClientRect().width;
    body.style['margin-right'] = `calc(100vw - ${width}px)`;
    body.classList.add('overflow-hidden');
  },

  unmounted() {
    const body = document.body;
    body.style['margin-right'] = `0`;
    body.classList.remove('overflow-hidden');
  },

}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: auto;
  pointer-events: none;

  .modal__wrapper {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
  }

  .modal__content {
    position: relative;
    pointer-events: all;
  }

  .modal__close {
    font-size: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 4rem;
    height: 4rem;
    transition: all 0.33s;
    line-height: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:hover {
      transform: rotate(90deg);
    }
  }
}

.modal__backdrop {
  background-color: rgba($color: #00023b, $alpha: 0.75);
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  cursor: pointer;
}
</style>

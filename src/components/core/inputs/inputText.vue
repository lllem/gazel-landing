<template>
  <div class="input-text">
    <input
    type="text"
    v-model="inputText"
    class="input-text__input"
    :data-maska="maska"
    v-maska
    placeholder=""
    />

    <span class="input-text__label">Placeholder</span>
  </div>
</template>

<script>
import { vMaska } from "maska" // отдельная зависимость

export default {
  props: {
    modelValue: String,
    maska: String,
  },

  computed: {
    inputText: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    }
  },

  directives: { maska: vMaska }, // отдельная зависимость
}
</script>

<style lang="scss">
.input-text {
  // border: 1px solid rgba(red, 0.25);
  display: inline-flex;
  position: relative;
  font-size: 1em;
  font-weight: 600;

  .input-text__input,
  .input-text__label {
    width: 100%;
    line-height: 2em;
  }

  .input-text__input {
    background-color: transparent;
    outline: none;
  }

  .input-text__label {
    position: absolute;
    top: 0;
    bottom: 0;
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 0.25s ease;
  }

  .input-text__input:focus,
  .input-text__input:not(:placeholder-shown) {
    & ~ .input-text__label {
      transform: translateY(-45%) scale(0.8);
    }
  }

  &::before,
  &::after {
    content: '';
    display: inline-flex;
    border-bottom: 3px solid #3b82f6;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>

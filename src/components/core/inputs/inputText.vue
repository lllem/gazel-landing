<template>
  <div class="input-text">
    <input
    ref="input"
    :type="type || 'text'"
    v-model="inputText"
    class="input-text__input"
    :data-maska="maska"
    v-maska
    :placeholder="placeholder || ''"
    :pattern="pattern"
    :required="required"
    @change="touched"
    />

    <span class="input-text__label">{{ label }}</span>
    <span class="input-text__indicator"></span>
  </div>
</template>

<script>
import { vMaska } from "maska" // отдельная зависимость

export default {
  props: {
    type: String,
    modelValue: String,
    maska: String,
    required: Boolean,
    pattern: String,
    placeholder: String,
    label: String,
    focus: Boolean, // Если нужно установить фокус
  },

  methods: {
    // Чтобы не показывать что поле не валидно пока его не трогали
    touched() {
      this.$refs.input.classList.add('touched')
    }
  },

  computed: {
    inputText: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },

    valid() {
      if(!this.isMounted) return
      console.log(this.$refs.input)
      return this.$refs.input
    },
  },

  directives: { maska: vMaska }, // отдельная зависимость

  mounted() {
    if (this.focus) this.$refs.input.focus()
  },
}
</script>

<style lang="scss">
.input-text {
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

  .input-text__indicator {
    display: inline-flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.25s;
    border-bottom: 3px solid #3b82f6;
    opacity: 0.5;
  }

  .input-text__input:focus,
  .input-text__input:not(:placeholder-shown) {
    & ~ .input-text__label {
      transform: translateY(-45%) scale(0.75);
    }
  }

  .input-text__input:focus {
    & ~ .input-text__indicator {
      opacity: 1;
    }
  }

  .input-text__input.touched:not(:valid) {
    & ~ .input-text__indicator {
      opacity: 1;
      border-color: red;
    }
  }

  &::before,
  &::after {
    content: '';
  }
}
</style>

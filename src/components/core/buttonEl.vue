<template>
  <component
  :is="defineComponent"
  :to="to"
  :href="href"
  class="button px-4 font-semibold text-white
  border-solid border-2 rounded-lg transition
  "
  :class="{
    'button_disabled bg-indigo-400 border-indigo-400': disabled,
    'border-blue-600 hover:border-blue-500': !disabled,
    'button_lg text-xl': lg,
    'text-sm': !lg,
    'bg-blue-600 hover:bg-blue-500': !(outline || disabled),
  }"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    el: String, // тег элемента определяется автоматически атрибутами, но этим свойством можно задать его вручную
    to: String, // Кнопка может быть router-ссылкой
    href: String, // Кнопка может быть ссылкой
    lg: Boolean,  // Делает кнопку большой
    disabled: Boolean, // Неактивная
    outline: Boolean, // Стиль, делает с обводкой
  },

  computed: {
    defineComponent() {
      if (this.el) return this.el
      if (this.to) return 'router-link'
      if (this.href) return 'a'
      return 'button'
    }
  },
}
</script>

<style lang="scss">
.button {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  line-height: 1;
  height: 2.75em;
  user-select: none;
  text-decoration: none;

  &.button_lg {
    height: 2.5em;
  }

  &.button_disabled {
    pointer-events: none;
  }
}
</style>

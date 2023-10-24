<template>
  <h2
  class="subtitle uppercase tracking-widest font-extrabold text-xl mb-4 text-center"
  :class="{ 'text-blue-400 t-gradient_invert': invert, 'text-blue-800 t-gradient': !invert }"
  >
    <slot/>
  </h2>
</template>

<script>
export default {
  props: {
    invert: Boolean,
  },
}
</script>

<style lang="scss">
.subtitle {
  &::after {
    content: '';
    display: block;
    margin: 0.75rem auto 1.5rem;
    height: 3px;
    width: 3rem;
    background-color: #00d0ff;
  }
}
</style>

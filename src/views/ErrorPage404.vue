<template>
  <div class="error-404 bg-dark text-white">
    <HeaderBlock/>
    <div class="container max-w-screen-lg mx-auto text-center py-9">
      <div
      class="error-404__bg w-full bg-dark bg-contain"
      style="background-image: url('/assets/img/auto/auto_sobol.webp');"
      ></div>

      <!-- <img src="@/assets/img/auto/auto_sobol.webp" class="error-404__bg bg-dark" alt="Авто"> -->

      <h1 class="error-404__title font-extrabold text-sky-300 mb-5">404</h1>
      <h2 class="error-404__subtitle text-4xl mb-5 font-bold">Страница не найдена</h2>
      <p><router-link to="/" class="text-lg text-sky-300 font-bold">На главную</router-link></p>
    </div>
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'

export default {
  components: {
    HeaderBlock,
  },
}
</script>

<style lang="scss" scoped>
.error-404 {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .container {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    * {
      position: relative;
    }

    .error-404__title {
      font-size: 8rem;
      line-height: 1;
    }

    .error-404__bg {
      position: absolute;
      background-blend-mode: hard-light;
      opacity: 0.25;
      top: 0;
      bottom: 0;
    }
  }
}
</style>

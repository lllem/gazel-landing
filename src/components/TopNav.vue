<template>
  <header class="top-nav bg-dark text-white py-3" ref="topNav">
    <nav class="flex flex-row container max-w-screen-lg justify-between px-4 mx-auto gap-4 items-center">

      <router-link class="logo font-bold block leading-5" to="/">
        <img class="logo w-full" src="@/assets/img/logo/logo_symbol_invert.svg" alt="Вывоз мусора Газелью" />
      </router-link>

      <div class="mx-auto hidden md:inline-block">
        <selectCity/>
      </div>

      <div class="ml-auto">
        <a class="font-bold nowrap" href="tel:+7 900 000 0000">
          <iconEl icon="phone" solid class="text-blue-300"/>
          <span class="ms-1">+7 900 000 0000</span>
        </a>
      </div>

      <div class="hidden md:inline-block">
        <router-link to="/" class="px-4 py-2 font-semibold text-sm
        text-white rounded-md
        border-blue-500 border-solid border-2
        opacity-100">Рассчитать стоимость</router-link>
        <!-- TODO Modal -->
      </div>

      <div class="">
        <button
        @click="openOrderModal"
        class="px-4 py-2 font-semibold text-sm
        border-blue-500 border-solid border-2
        bg-blue-500 text-white rounded-md shadow-sm opacity-100
        shadow-blue-500/50">Заказать</button>
      </div>

      <!-- <sidebarBlock/> -->
    </nav>
  </header>
</template>

<script>
import selectCity from '@/components/select-city/selectCity.vue'
// import sidebarBlock from '@/components/sidebar/sidebarBlock.vue'

export default {
  components: {
    selectCity,
    // sidebarBlock,
  },
  methods: {
    openOrderModal(){
      this.$store.dispatch('openOrderModal', true)
    },
    scrollHandler() {
      if (window.scrollY > 10) this.$refs.topNav.classList.add('scrolled')
      else this.$refs.topNav.classList.remove('scrolled')
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollHandler);
    this.scrollHandler();
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.scrollHandler);
  },
};
</script>

<style lang="scss">
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(-100%);
  transition: all 0.6s;

  &.scrolled {
    transform: translateY(0);
  }

  .logo {
    width: 1.75rem;
  }
}
</style>

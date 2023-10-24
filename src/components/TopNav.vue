<template>
  <header class="top-nav bg-dark text-white py-3" ref="topNav">
    <nav class="flex flex-row container max-w-screen-lg justify-between px-4 mx-auto gap-3 md:gap-4 items-center">

      <router-link class="logo font-bold block leading-5" to="/">
        <img class="logo w-full" src="@/assets/img/logo/logo_symbol_invert.svg" alt="Вывоз мусора Газелью" />
      </router-link>

      <div class="mx-auto hidden md:inline-block">
        <selectCity/>
      </div>

      <a class="font-bold nowrap ms-auto" href="tel:+7 900 000 0000">
        <i class="text-blue-500 ani-pulse">
          <iconEl icon="phone" class="ani-ring" solid/>
        </i>
        <span class="ms-1">{{ contacts.tel }}</span>
      </a>

      <buttonEl to="/" outline class="align-self-end">
        <CalculatorIcon class="icon"/>
        <span class="hidden sm:inline">Рассчитать стоимость</span>
      </buttonEl>

      <buttonEl @click="openOrderModal" class="align-self-end">
        <PhoneArrowDownLeftIcon class="icon" />
        <span class="hidden sm:inline">Заказать</span>
      </buttonEl>

    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import selectCity from '@/components/select-city/selectCity.vue'
import { CalculatorIcon, PhoneArrowDownLeftIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    selectCity,
    CalculatorIcon,
    PhoneArrowDownLeftIcon,
  },

  computed: {
    ...mapGetters([
      'contacts',
    ]),
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

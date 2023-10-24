<template>
  <section
  class="header text-white bg-dark pt-10"
  :class="{ 'onscroll': pageYOffset }"
  >
    <div class="container grid grid-cols-12 max-w-screen-lg mx-auto px-4 gap-4">

      <div class="header__right-block col-span-6 md:col-span-5 text-end">
        <router-link to="/" class="logo gap-3 grid grid-cols-10 items-center mb-3">
          <img
          class="logo__symbol col-span-3"
          src="@/assets/img/logo/logo_symbol_invert.svg" alt="Вывоз мусора Газелью"
          data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100"
          />
          <img
          class="logo__text col-span-7"
          src="@/assets/img/logo/logo_text_invert.svg"
          alt="Вывоз мусора Газелью"
          data-aos="fade-left" data-aos-duration="1400" data-aos-delay="400"
          />
        </router-link>

        <div class="mx-auto col-span-12 md:col-span-7"
        data-aos="fade-left" data-aos-duration="1400" data-aos-delay="600"
        >
          <selectCity/>
        </div>
      </div>

      <div class="my-1 col-span-12 md:col-span-7">
        <h1 class="font-bold text-xl mb-1"
        data-aos="fade-up" data-aos-duration="600" data-aos-delay="700"
        >Вывоз мусора ГАЗелью и помощь грузчиков</h1>

        <p
        class="mb-6 leading-5 text-blue-200"
        data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800"
        >Профессиональный вывоз мусора ГАЗелью с погрузкой от компании «<strong class="font-bold text-white">Вывоз мусора ГАЗелью</strong>»! Возьмем на себя все задачи, от сбора отходов до их доставки на полигон. Избавьтесь от всего лишнего, не тратя силы и время!</p>

        <div>

          <buttonEl
          @click="openOrderModal" class="me-6"
          data-aos="fade-up" data-aos-duration="1400" data-aos-delay="900"
          >Заказать</buttonEl>

          <a class="font-bold text-xl nowrap inline-block" :href="`tel:${ contacts.tel }`"
          data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1100"
          >
            <i class="text-blue-500 ani-pulse">
              <iconEl icon="phone" class="ani-ring" solid/>
            </i>
            <span class="ms-1">{{ contacts.tel }}</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import selectCity from '@/components/select-city/selectCity.vue'

export default {
  components: {
    selectCity,
  },

  data() {
    return {
      pageYOffset: null,
    };
  },

  methods: {
    scrollHandler() {
      this.pageYOffset = window.pageYOffset
    },
    openOrderModal(){
      this.$store.dispatch('openOrderModal', true)
    },
  },

  computed: {
    ...mapGetters([
      'contacts'
    ]),
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
}
</script>

<style lang="scss">
.header {
  position: relative;
  z-index: 1;

  .header__right-block {
    width: min(280px, 100%);
  }
}
</style>

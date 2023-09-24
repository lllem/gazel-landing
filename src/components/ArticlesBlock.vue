<template>
  <section class="articles-block text-center py-10 bg-dark text-white">
    <div
    class="container max-w-lg md:max-w-screen-lg mx-auto md:px-3--"
    v-if="articles && articles.length"
    >

      <subtitleEl invert>Статьи</subtitleEl>

      <swiper
      :spaceBetween="16"
      :centeredSlides="false"
      :slidesPerView="1.5"
      :loop="false"
      :grabCursor="true"
      :slidesOffsetAfter="32"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :modules="modules"
      :breakpoints="{
        '640': {
          slidesPerView: 2.5,
        },
        '768': {
          slidesPerView: 3.5,
        },
        '1024': {
          slidesPerView: 3.5,
        },
      }"
      :pagination="{
        dynamicBullets: true,
      }"
      class="articles-slider mb-4"
      >
        <swiper-slide
        v-for="article in articles"
        :key="`${ article.img }_${ Math.random()*1000000 }`"
        class="py-2 w-full"
        >
          <ArticleCard
          :to="article.link"
          :key="`${ article.img }_${ Math.random()*1000000 }`"
          :img="`/assets/img/articles/preview/${ article.img }`"
          class="h-full"
          >
            <template v-slot:title>
              {{ article.title }}
            </template>
            <!-- <template v-slot:desc>{{ article.desc }}</template> -->
          </ArticleCard>
        </swiper-slide>
      </swiper>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleCard from '@/components/core/ArticleCard.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';

export default {
  components: {
    ArticleCard,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'articles',
    ]),
  },
  mounted() {
    this.$store.dispatch('loadArticles')
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens.scss';
@import 'swiper/css';
@import 'swiper/css/pagination';

.articles-block {
  .swiper {
    $border-style: 1px solid rgba(#fff, 0.15);
    border-left: $border-style;
    border-right: $border-style;

    &::before,
    &::after {
      content: '';
      width: 1rem;
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 2;
    }

    &::before {
      left: 0;
      background-image: linear-gradient(90deg, $dark 0%, rgba($dark, 0) 100%);
    }

    &::after {
      right: 0;
      background-image: linear-gradient(-90deg, rgba($dark, 0.85) 0%, rgba($dark, 0.5) 25%, rgba($dark, 0) 100%);
    }

    .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
      background-color: #fff !important;
    }

    .swiper-wrapper {
      padding: 0 1rem 2rem 1rem;
    }
  }

}
</style>

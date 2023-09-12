<template>
  <div class="furgon text-start flex flex-col justify-between-- bg-dark-2">

    <div class="furgon__img aspect-square align-self-start">
      <keep-alive>
        <swiper
        id="furgonImgSlider"
        class="furgon-img-slider"
        ref="furgonImgSlider"
        :speed="800"
        :effect="'fade'"
        :modules="modules"
        :thumbs="{ swiper: thumbsSwiper }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: true,
        }"
        >
          <swiper-slide
          v-for="furgon in furgons"
          :key="`furgon_${ furgon.title }_${ Math.random()*100000 }`"
          >
            <img :src="`./assets/img/auto/${ furgon.img }`" class="img-cover" />
          </swiper-slide>
        </swiper>
      </keep-alive>
    </div>


    <div class="furgon__desc text-center p-4 align-self-end grow">
      <h3 class="calculator__subtitle tracking-widest uppercase font-extrabold text-sm">Фургон</h3>

      <swiper
      id="furgonTitleSlider"
      class="furgon__title"
      :speed="400"
      :grabCursor="true"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: false,
          translate: ['-10%', 0, 0],
          opacity: 0,
        },
        next: {
          translate: ['10%', 0, 0],
          opacity: 0,
        },
      }"
      :modules="modules"
      :thumbs="{ swiper: thumbsSwiper }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide
        v-for="furgon in furgons"
        :key="`furgon_${ furgon.title }_${ Math.random()*100000 }`"
        >
          <h4 class="font-bold text-4xl mb-4">{{ furgon.title }}</h4>
        </swiper-slide>
      </swiper>

      <swiper
      id="furgonTableSlider"
      class="furgon__table"
      :speed="400"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: false,
          opacity: 0,
        },
        next: {
          opacity: 0,
        },
      }"
      :modules="modules"
      :thumbs="{ swiper: thumbsSwiper }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide
        v-for="furgon in furgons"
        :key="`furgon_${ furgon.title }_${ Math.random()*100000 }`"
        >
          <miniTable :tabledata="[
            {
              title: 'Длина кузова',
              val: `${new Intl.NumberFormat('ru-RU').format(furgons[activeIndex].length)} м`,
            },
            {
              title: 'Высота кузова',
              val: `${new Intl.NumberFormat('ru-RU').format(furgons[activeIndex].height)} м`,
            },
            {
              title: 'Грузоподъёмность',
              val: `до ${furgons[activeIndex].weight} т`,
            },
          ]" class="furgon__info"/>
        </swiper-slide>
      </swiper>
    </div>

    <div class="align-self-end grow">
      <keep-alive>
        <swiper
        id="furgonIconsSlider"
        class="furgon__slider"
        ref="furgon__slider"
        :speed="800"
        :slides-per-view="2.5"
        :spaceBetween="32"
        :centeredSlides="true"
        :loop="false"
        :grabCursor="true"
        :modules="modules"
        :thumbs="{ swiper: thumbsSwiper }"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        >
          <swiper-slide
          v-for="furgon in furgons"
          :key="`furgon_${ furgon.title }_${ Math.random()*1000000 }`"
          class="px-2 w-full"
          >
            <img :src="`./assets/img/auto/${ furgon.icon }`" :alt="furgon.title">
          </swiper-slide>
        </swiper>
      </keep-alive>
    </div>

    <div class="align-self-end">
      <swiper
      id="furgonNavSlider"
      class="furgon__nav px-9 font-bold text-2xl"
      :speed="800"
      :slides-per-view="4"
      :spaceBetween="0"
      :loop="false"
      :modules="modules"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      >
        <swiper-slide
        v-for="furgon in furgons"
        :key="`furgon_${ furgon.title }_${ Math.random()*1000000 }`"
        class="w-full text-center px-0 py-4"
        :title="furgon.title"
        >
          {{ furgon.vol }}&nbsp;м<sup>3</sup>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCreative, Pagination, EffectFade, Thumbs } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade";

export default {
  props: {
    modelValue: Number,
    // value: { type: [Boolean, Object] },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
      activeIndex: 0,
      sliders: {
        furgonImgSlider: null,
        furgonTitleSlider: null,
        furgonIconsSlider: null,
        furgonNavSlider: null,
        furgonTableSlider: null,
      },
    };
  },
  computed: {
    selectedFurgon: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
    ...mapGetters([
      'furgons',
    ]),
  },
  methods: {
    onSwiper(swiper) {
      this.sliders[swiper.el.id] = swiper;
    },
    onSlideChange(slider) {
      this.goToSlide(slider.activeIndex);
    },
    goToSlide (activeIndex) {
      for (let slider in this.sliders) {
        this.sliders[slider].slideTo(activeIndex, 1000, false);
      }
      this.activeIndex = activeIndex;
      this.selectedFurgon = this.furgons[activeIndex].vol;
    },
  },
  setup() {
    return {
      modules: [
        Autoplay,
        EffectCreative,
        Pagination,
        EffectFade,
        Thumbs,
      ],
    };
  },
  mounted() {
    this.thumbsSwiper = this.sliders.furgonNavSlider;
    this.goToSlide(0);
  },
}
</script>


<style lang="scss">
@import '@/assets/styles/tokens.scss';

.furgon {
  position: relative;

  .swiper {
    user-select: none;
  }

  .furgon__nav {
    .swiper-slide {
      position: relative;
      cursor: pointer;
      color: rgb(147 197 253);
      transition: all 0.6s;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        display: inline-block;
        left: 50%;
        right: 50%;
        height: 4px;
        opacity: 0;
        transition: all 0.6s;
        background-color: cyan;
      }

      &.swiper-slide-thumb-active {
        color: #fff;

        &::after {
          opacity: 1;
          left: 0;
          right: 0;
        }
      }
    }
  }

  .furgon__img {
    position: relative;
    z-index: 1;
    margin-bottom: -40%;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      z-index: 100;
      background-image: linear-gradient(
        rgba($dark-2, 0%),
        rgba($dark-2, 5%) 25%,
        rgba($dark-2, 95%) 50%,
        $dark-2
      );
    }
  }

  .furgon__desc {
    position: relative;
    z-index: 2;
  }

  .furgon__info {
    max-width: 14rem;
    z-index: 3;
  }

  .furgon__slider {
    $slider-bg: cyan;
    background-image: linear-gradient(
      rgba($slider-bg, 0%),
      rgba($slider-bg, 5%) 25%,
      rgba($slider-bg, 15%) 80%,
      rgba($slider-bg, 0%)
    );
  }

  .furgon__nav {
    position: relative;
    z-index: 4;
  }
}
</style>

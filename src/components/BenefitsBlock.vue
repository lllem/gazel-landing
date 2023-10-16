<template>
  <section class="mt-5 mb-10 text-center container max-w-screen-lg mx-auto">

    <div class="px-4">
      <p class="mb-2 uppercase font-bold text-blue-600">Главные преимущества сотрудничества с нами</p>
    </div>

    <swiper
    :slides-per-view="3"
    :spaceBetween="32"
    :centeredSlides="true"
    :loop="true"
    :grabCursor="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1024': {
        slidesPerView: 5,
      },
    }"
    class="benefits-slider pt-8 mb-4"
    >
      <swiper-slide
      v-for="benefit in benefits"
      :key="`benefit_${ benefit.title }_${ Math.random()*1000000 }`"
      class="benefit py-2 w-full"
      >
        <iconEl :icon="benefit.icon" class="benefit__icon mx-auto mb-3 text-indigo-400 text-center"/>
        <p class="text-sm font-semibold lh-1 mb-2 text-indigo-900" v-html="benefit.title"></p>
      </swiper-slide>
    </swiper>

    <p class="mb-10 text-lg max-w-screen-md mx-auto font-semibold px-4 text-indigo-800">Далеко не&nbsp;все фирмы, предлагающие такую услугу, могут гарантировать профессиональный подход, для нас&nbsp;же это основной принцип в&nbsp;работе.</p>

  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {},
  data() {
    return {
      benefits: [
        {
          title: 'Возможность быстрого выезда',
          description: 'Прибудем к вам в течение часа, если требуется',
          icon: 'bolt',
        },
        {
          title: 'Вежливые, опрятные, физически сильные грузчики, которые умеют и&nbsp;любят работать',
          icon: 'users',
        },
        {
          title: 'Официальное сотрудничество строго по&nbsp;договору',
          icon: 'clipboard-document-check',
        },
        {
          title: 'Прозрачные цены на&nbsp;вывоз мусора ГАЗелью',
          description: 'banknotes',
          icon: '',
        },
        {
          title: 'Удобные способы оплаты',
          description: '',
          icon: 'credit-card',
        },
        {
          title: 'Собственный автопарк',
          icon: 'truck',
        },
        {
          title: 'Более 10&nbsp;лет опыта',
          icon: 'trophy',
        },
        {
          title: 'Работа 24/7',
          icon: 'clock',
        },
        {
          title: 'Лояльные цены',
          description: 'Никаких доплат и&nbsp;переплат, только честные и&nbsp;фиксированные цены',
          icon: 'circle-stack',
        },
        {
          title: 'Большой охват территории',
          description: 'Москва, ближайшее Подмосковье, область',
          icon: 'globe-alt',
        },
        {
          title: 'Оперативность выполнения заказов',
          description: 'Быстрые сроки исполнения за&nbsp;счёт использования собственной техники',
          icon: 'bolt',
        },
        {
          title: 'Безопасность окружающей среды',
          description: 'Мы не&nbsp;загрязняем природу, все отходы вывозятся на&nbsp;специальный полигон или&nbsp;сдаются на&nbsp;утилизацию',
          icon: 'sun',
        },
      ]
    };
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
}
</script>


<style lang="scss">


.benefits-slider {
  position: relative;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 6rem;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 100;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background-image: linear-gradient(90deg, #fff, #fff0);
  }

  &::after {
    right: 0;
    background-image: linear-gradient(90deg, #fff0, #fff);
  }

  .benefit {
    max-width: 12rem;

    .benefit__icon {
      font-size: 3rem;
      // transition: all 0.75s;
    }

    &.swiper-slide-active {
      .benefit__icon {
        color: #027fff;
        transform: scale(1.5);
        transform-origin: 50% 75%;
      }
    }
  }
}

</style>

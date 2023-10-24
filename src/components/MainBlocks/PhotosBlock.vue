<template>
  <section
  class="photos-block py-10 bg-dark text-white"
  :class="{
    'photos-block_opened': blockOpened,
  }"
  >
    <div class="container max-w-screen-lg mx-auto px-4">

      <div class="columns-2 md:columns-3 lg:columns-3 gap-4">
        <img class="photos-block__photo mb-5 rounded-md shadow" v-for="img in images" :src="`/assets/img/photos/preview/${ img }`" alt="TODO" :key="img">
      </div>

      <footer class="photos-block__footer text-center py-10">
        <buttonEl
        outline
        @click="blockOpened = !blockOpened"
        class="photos-block__button"
        >{{ blockOpened ? 'Свернуть' : 'Показать ещё' }}</buttonEl>
      </footer>

    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      blockOpened: false,
      images: [
        '1.w_Ic-ba5bxsqTu0WFpqi-9xaaRGo2nmZpVptH6BQZRk.webp',
        '002.webp',
        'image.webp',
        '03-vyvoz-musora-v-spb.webp',
        '3ba05ba7910a1402fe0edd62f590cb75.webp',
        '25-ford-transit-2014.webp',
        '500x400.webp',
        '879ead407e743008bed3b496080a7eea.webp',
        '1200x900n (1).webp',
        '2018-02-07-PHOTO-00000029.webp',
        '47447522-14697529605296137_origin.webp',
        '5207287114656795_95d3.webp',
        'DSC_0338.webp',
        'DSC_0397.webp',
        'gazel_hleb_isoterm2.webp',
        'IMG_1514-scaled.webp',
        'man-meshki-demontazh.webp',
        'qXqy1GTou-k.webp',
        't64166fa9.webp',
        'transit-l2-h2-4.webp',
        'vyivoz-stroitelnogo-musora-s-gruzchikami.webp',
        'worker-carrying-bag-cement-male-construction-site-63410384.webp',
        'Заказать-услуги-грузчиков-в-Москве.webp',
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/tokens.scss';

.photos-block {
  position: relative;
  z-index: 3;
  max-height: 100vh;
  overflow: hidden;

  .photos-block__photo {
    cursor: pointer;
  }

  &.photos-block_opened {
    max-height: unset;

    .photos-block__footer {
      position: sticky !important; // TODO
      bottom: 0;

      &::before {
        height: 3rem;
        background-image: linear-gradient(
          rgba($dark, 0),
          rgba($dark, 0.75),
          rgba($dark, 0.5),
        );
      }
    }
  }

  .photos-block__footer {
    position: absolute;
    bottom: 0;
    z-index: 3;
    left: 0;
    right: 0;
    pointer-events: none;

    .photos-block__button {
      position: relative;
      pointer-events: all;
    }

    &::before {
      content: '';
      display: inline-block;
      height: 8rem;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-image: linear-gradient(rgba($dark, 0), rgba($dark, 0.75), $dark);
      pointer-events: none;
      transition: all 0.6s;
    }
  }
}

</style>

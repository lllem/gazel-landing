<template>
  <section class="calculator diagonal-bottom py-5">
    <div class="container max-w-screen-lg mx-auto px-4">
      <div class="grid grid-rows-2 grid-cols-12 lg:grid-cols-24 text-white gap-4">

          <tileFurgon
          v-model="furgon"
          class="calculator__tile col-span-12 lg:col-span-10 row-span-2 rounded-2xl"
          data-aos="fade-up" data-aos-duration="600" data-aos-delay="1000"
          />

          <tileMovers
          v-model="movers"
          class="calculator__tile col-span-6 lg:col-span-14 rounded-2xl"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300"
          />

          <tileDistance
          v-model="distance"
          class="calculator__tile col-span-6 md:col-span-6 lg:col-span-7 rounded-2xl"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1700"
          />

          <tileTotal
          class="calculator__tile col-span-12 md:col-span-12 lg:col-span-7 rounded-2xl"
          :furgon="furgon"
          :distance="distance"
          :movers="movers"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="1500"
          />

      </div>
    </div>
  </section>
</template>

<script>
import tileFurgon from '@/components/MainBlocks/calculator/tileFurgon.vue'
import tileMovers from '@/components/MainBlocks/calculator/tileMovers.vue'
import tileDistance from '@/components/MainBlocks/calculator/tileDistance.vue'
import tileTotal from '@/components/MainBlocks/calculator/tileTotal.vue'

export default {
  data() {
    return {
      furgon: null,
      distance: null,
      movers: 0,
    };
  },
  components: {
    tileFurgon,
    tileMovers,
    tileTotal,
    tileDistance,
  },
}
</script>

<style lang="scss" scoped>
.calculator {
  .calculator__tile {
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
}
</style>

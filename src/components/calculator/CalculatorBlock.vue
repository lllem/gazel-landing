<template>
  <section class="calculator diagonal-bottom py-5">
    <div class="container max-w-screen-lg mx-auto px-4">
      <div class="grid grid-rows-2 grid-cols-12 lg:grid-cols-24 overflow-hidden text-white gap-4">

          <tileFurgon
          v-model="furgon"
          class="calculator__tile col-span-12 lg:col-span-10 row-span-2 rounded-2xl"
          data-aos="zoom-in"
          />

          <tileMovers
          v-model="movers"
          class="calculator__tile col-span-6 lg:col-span-14 rounded-2xl"
          data-aos="zoom-in"
          />

          <tileDistance
          v-model="distance"
          class="calculator__tile col-span-6 md:col-span-6 lg:col-span-7 rounded-2xl"
          data-aos="zoom-in"
          />

          <tileTotal
          class="calculator__tile col-span-12 md:col-span-12 lg:col-span-7 rounded-2xl"
          data-aos="zoom-in"
          :furgon="furgon"
          :distance="distance"
          :movers="movers"
          />

      </div>
    </div>
  </section>
</template>

<script>
import tileFurgon from '@/components/calculator/tileFurgon.vue'
import tileMovers from '@/components/calculator/tileMovers.vue'
import tileDistance from '@/components/calculator/tileDistance.vue'
import tileTotal from '@/components/calculator/tileTotal.vue'

import AOS from 'aos'

export default {
  data() {
    return {
      furgon: null,
      distance: null,
      movers: null,
    };
  },
  components: {
    tileFurgon,
    tileMovers,
    tileTotal,
    tileDistance,
  },
  mounted() {
    AOS.init()
  },
}
</script>

<style lang="scss" scoped>
.calculator {
  .calculator__tile {
    position: relative;
    overflow: hidden;
  }
}
</style>

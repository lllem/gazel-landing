<template>
  <section class="map-block py-10 bg-dark text-white">
    <div class="grid md:grid-cols-2 gap-8 container max-w-screen-lg mx-auto px-4">

      <div class="py-10-- relative max-w-lg mx-auto text-center md:text-end">
        <mapIllustration class="map-linear"/>

        <p class="font-black uppercase text-xl text-indigo-400">География выезда</p>
        <h2 class="font-black uppercase text-4xl md:text-6xl text-blue-400"><span class="text-white">Куда</span> мы можем приехать?</h2>
      </div>

      <section class="py-10-- max-w-lg mx-auto">
        <p class="text-xl mb-6 font-semibold">В нашей компании можно заказать вывоз мусора на ГАЗели с грузчиками в любом районе Москвы и Подмосковья!</p>
        <p class="mb-4">Неважно, как далеко находится ваш дом или квартира: если вы живете в столице или в области, смело обращайтесь к нам. Мы сможем прибыть как в день подачи заявки, если вам нужно срочно избавиться от отходов, так и в любое другое время, согласованное заранее.</p>
        <p class="mb-4 text-indigo-300">Не имеет значения и этажность. Мы организуем погрузку мусора вручную как из частного дома, так и из квартиры на верхних этажах в многоэтажке без лифта.</p>
      </section>
    </div>

  </section>
</template>

<script>
import mapIllustration from '@/components/MainBlocks/mapBlock/mapIllustration.vue'

export default {
  components: {
    mapIllustration,
  },
  data() {
    return {};
  },
}
</script>

<style lang="scss">
.map-block {
  &, * {
    position: relative;
    z-index: 2;
  }

  .map-linear {
    position: absolute;
    top: -25%;
    right: -25%;
    left: -10%;
    bottom: 10%;
    z-index: 0;
  }
}

</style>

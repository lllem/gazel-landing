<template>
  <section class="map-block pt-10 bg-dark text-white">
    <div class="grid md:grid-cols-12 gap-4 md:gap-8 pt-10 mb-5 container max-w-screen-lg mx-auto px-4">

      <div class="md:text-start max-w-lg col-span-7 mx-auto">
        <p class="text-xl font-semibold">У вас в&nbsp;доме скопились бытовые отходы или вам нужно вывезти мусор, оставшийся после капремонта в квартире? Вы не&nbsp;хотите возиться с&nbsp;выносом мешков на&nbsp;свалку и&nbsp;тем более не&nbsp;знаете, что&nbsp;нужно для утилизации, чтобы не&nbsp;нарушать закон?</p>
      </div>

      <section class="max-w-lg mx-auto col-span-5">
        <p class="text-blue-300">Не переживайте — мы всегда готовы прийти на&nbsp;помощь! У&nbsp;нас можно заказать выезд бригады грузчиков на&nbsp;ГАЗели. В&nbsp;назначенное вами время мы&nbsp;прибудем на&nbsp;место, упакуем, погрузим и&nbsp;увезем на&nbsp;полигон все, от&nbsp;чего вы&nbsp;хотите избавиться.</p>
      </section>
    </div>

    <div class="bg-gradient-dark-white">
      <div class="container max-w-screen-lg mx-auto px-4">
        <img src="@/assets/img/movers/movers_team.webp" alt="Грузчики"/>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {};
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens.scss';

.map-block {
  &, * {
    position: relative;
  }
}

.bg-gradient-dark-white {
  background-image: linear-gradient(rgba($dark, 0) 40%, rgba($dark, .25) 50%, #fff);
}

</style>

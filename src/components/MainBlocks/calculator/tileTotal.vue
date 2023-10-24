<template>
  <div class="total-tile flex justify-between flex-col lg:aspect-square bg-dark-2 p-4 gap-4">

    <h3 class="calculator__subtitle tracking-widest text-start uppercase font-extrabold text-sm">Итого</h3>

    <p class="text-4xl font-extrabold text-center">от&nbsp;{{ String(total) }}&nbsp;₽</p>

    <miniTable :tabledata="[
      {
        title: 'Фургон',
        val: `${furgon} м<sup>3</sup>`,
      },
      {
        title: 'Количество грузчиков',
        val: movers,
      },
      {
        title: 'Расстояние от МКАД',
        val: distance === 0 ? `<small>в&nbsp;пределах</small>` : `до&nbsp;${distance}&nbsp;км`,
      },
    ]" class=""/>

    <buttonEl @click="openOrderModal" class="w-full">Заказать</buttonEl>

  </div>
</template>

<script>
export default {
  props: {
    furgon: Number,
    distance: Number,
    movers: Number,
  },

  methods: {
    openOrderModal(){
      this.$store.dispatch('openOrderModal', true)
    },
  },

  computed: {
    total() {
      let total = 0;

      if (this.furgon === 5 || this.furgon === 8) total += 4000;
      else if (this.furgon === 10) total += 4500;
      else if (this.furgon === 12) total += 5000;

      if (this.distance === 0) total += 0;
      else if (this.distance <= 15) total += 500;
      else if (this.distance <= 30) total += 1000;
      else if (this.distance <= 50) total += 2000;

      total += (this.movers - 1) * 3000;

      return new Intl.NumberFormat('ru-RU').format(total);
    },
  },
}
</script>

<style lang="scss">
.total-tile {}
</style>

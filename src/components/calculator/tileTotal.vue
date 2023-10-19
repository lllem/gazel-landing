<template>
  <div class="total-tile flex justify-between flex-col lg:aspect-square bg-dark-2 p-4">

    <h3 class="calculator__subtitle tracking-widest text-start uppercase font-extrabold text-sm mb-3">Итого</h3>

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

    <p class="my-5 text-4xl font-extrabold text-center">от&nbsp;{{ String(total) }}&nbsp;₽</p>

    <button
    @click="openOrderModal"
    class="px-4 mb-3 py-2 font-semibold text-sm bg-blue-500 text-white rounded-xl w-full"
    >
      Заказать
    </button>
  </div>
</template>

<script>
// Что касается грузчиков на все +3000
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

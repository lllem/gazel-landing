<template>
  <div class="total-tile flex justify-between flex-col lg:aspect-square bg-dark-2 p-4 gap-4">

    <h3 class="calculator__subtitle tracking-widest text-start uppercase font-extrabold text-sm">Итого</h3>

    <p
    ref="total"
    class="total-tile__total text-4xl font-extrabold text-center"
    >от&nbsp;{{ String(totalFormatted) }}&nbsp;₽</p>

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

      return total;
    },

    totalFormatted() {
      return new Intl.NumberFormat('ru-RU').format(this.total);
    },
  },

  watch: {
    'total': function(newTotal, oldTotal) {
      console.log(newTotal, oldTotal, this.$refs.total)
      this.$refs.total.classList.add('animate')
      this.$refs.total.addEventListener("animationend", () => {
        this.$refs.total.classList.remove('animate')
      })
    },
  },
}
</script>

<style lang="scss">
.total-tile {
  .total-tile__total.animate {
    animation:
      animate 0.5s 1;
  }
}

@keyframes animate {
  0% {
    transform: translateY(0);
  } 33% {
    transform: translateY(40%);
  } 66% {
    transform: translateY(-33%);
  } 100% {
    transform: translateY(0);
  }
}
</style>

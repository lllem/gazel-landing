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
        val: `${furgon.vol} м<sup>3</sup>`,
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
import { mapGetters } from 'vuex'

export default {
  props: {
    furgon: Object,
    distance: Number,
    movers: Number,
  },

  methods: {
    openOrderModal(){
      this.$store.dispatch('openOrderModal', true)
    },

    animateTotal() {
      // Анимируем цену при её изменении для привлечения внимания
      this.$refs.total.classList.add('ani-updown')

      this.$refs.total.addEventListener("animationend", () => {
        this.$refs.total.classList.remove('ani-updown')
      })
    },

    writeDataToStore() {
      const calcData = {}

      calcData.city = this.cities.selectedCity.title
      calcData.furgon = this.furgon.vol
      calcData.distance = this.distance
      calcData.movers = this.movers
      calcData.total = this.total

      this.$store.dispatch('updateCalculatorData', calcData)
    },
  },

  computed: {
    ...mapGetters([
      'order',
      'cities',
    ]),

    total() {
      if (!(this.furgon && this.furgon.price)) {
        // alert(1)
        return 0
      }
      let total = 0;

      total += this.furgon.price

      if (this.distance === 0) total += 0;
      else if (this.distance <= 15) total += 500;
      else if (this.distance <= 30) total += 1000;
      else if (this.distance <= 50) total += 1500;

      total += (this.movers) * 1500;

      return total;
    },

    totalFormatted() {
      return new Intl.NumberFormat('ru-RU').format(this.total);
    },
  },

  watch: {
    'total': function() {
      this.animateTotal()
      this.writeDataToStore()
    },

    'furgon': function() {
      this.animateTotal()
      this.writeDataToStore()
    },

    'distance': function() {
      this.animateTotal()
      this.writeDataToStore()
    },

    'movers': function() {
      this.animateTotal()
      this.writeDataToStore()
    },

    'cities.selectedCity': function() {
      this.animateTotal()
      this.writeDataToStore()
    },
  },
}
</script>

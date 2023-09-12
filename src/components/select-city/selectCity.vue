<template>
  <a
  @click="modalOpen = true"
  class="select-city font-semibold text-sm text-sky-300 nowrap"
  >
    Москва и Подмосковье <iconEl icon="chevron-down"/>
  </a>

  <teleport to="body">
    <modal-el v-if="modalOpen" v-model="modalOpen">

      <template v-slot:header>Ваш город</template>

      <div class="text-xl font-bold mb-3">
        {{ selectedCityEl ? selectedCityEl.city : 'Москва и подмосковье' }}
      </div>

      <div class="columns-2 md:columns-3 mb-5">
        <div
        @click="selectedCity = city.translit"
        v-for="city in cities"
        :key="city"
        :title="city.translit"
        class="select-city__city-link text-sm pb-1"
        :class="{
          'font-bold text-blue-900': city.translit == selectedCity,
          'font-bold': city.translit == selectedCity,
        }"
        >{{ city.city }}</div>
      </div>
    </modal-el>
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      modalOpen: false,
      selectedCity: 'selectedCity',
    }
  },
  mounted() {
    this.$store.dispatch('loadCities')
  },
  computed: {
    ...mapGetters([
      'cities',
    ]),
    selectedCityEl() {
      let city = this.cities.filter(
        city => city.translit === this.selectedCity
      )

      if (city.length) return city[0];

      return city[0]
    },
  },
}
</script>

<style scoped lang="scss">
.select-city {
  display: inline-block;
  line-height: 1.5;
  cursor: pointer;
}

  .select-city__city-link {
    cursor: pointer;
    display: block;
  }
</style>

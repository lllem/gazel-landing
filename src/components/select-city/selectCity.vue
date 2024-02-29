<template>
  <!-- Дропдаун -->
  <a
  @click="modalOpen = true"
  class="select-city font-semibold text-sm text-sky-300 hover:text-sky-200 transition nowrap inline-flex items-center gap-1"
  >
   <MapPinIcon class="icon text-sky-500"/> {{ selectedCity.title }} <ChevronDownIcon class="icon text-sky-200"/>
  </a>
  <!-- / Дропдаун -->

  <teleport to="body">
    <modal-el v-if="modalOpen" v-model="modalOpen">

      <div class="uppercase">Ваш город</div>

      <div class="mb-8">
        <h2 class="text-4xl font-bold text-blue-900">
          {{ selectedCity.title }}
        </h2>
      </div>

      <!-- Если список городов загружается -->
      <div v-if="cities.status === 'loading'" class="py-8 px-4 mx-auto text-center">Загрузка...</div>

      <!-- Если произошла ошибка загрузки списка городов -->
      <div v-else-if="cities.status === 'error'" class="py-8 px-4 mx-auto text-center">
        <p class="font-bold text-red-600 mb-6">Ошибка загрузки</p>
        <div class="text-center">
          Ошибка загрузки. Попробуйте обновить страницу
        </div>
      </div>

      <!-- Список городов успешно загрузился, отображаем его -->
      <div
      v-else-if="cities.status === 'success'"
      class="columns-2 md:columns-3 mb-5"
      >
        <router-link
        v-for="cityFromList in cities.list"
        :to="`/region/${ cityFromList.translit }`"
        :key="cityFromList.translit"
        :title="cityFromList.translit"
        class="select-city__city-link text-sm pb-0"
        :class="{
          'font-bold text-blue-900': cityFromList.translit == cities.selectedCity.translit,
        }"
        >{{ cityFromList.title }}</router-link>
      </div>
    </modal-el>
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChevronDownIcon, MapPinIcon } from '@heroicons/vue/24/solid'

export default {
  data() {
    return {
      modalOpen: false,
    }
  },

  components: {
    ChevronDownIcon,
    MapPinIcon,
  },

  methods: {
    loadCities: () => this.$store.dispatch('loadCities'),
  },

  computed: {
    ...mapGetters([
      'cities',
      'selectedCity',
    ]),
  },

  watch: {
    '$route': function(newRoute) {
      if (newRoute.params.city) this.$store.dispatch('selectCity', newRoute.params.city)
      setTimeout(() => {
        this.modalOpen = false
      }, 1000)
    },
  }
}
</script>

<style scoped lang="scss">
.select-city {
  line-height: 1.5;
  cursor: pointer;
}

.select-city__city-link {
  cursor: pointer;
  display: block;
}
</style>

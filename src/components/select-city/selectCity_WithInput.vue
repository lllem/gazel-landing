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

      <div class="mb-8">
        <input
        list="select-city__datalist"
        class="text-input w-full px-0 py-2 text-xl font-bold"
        placeholder="Москва и подмосковье"
        v-model="selectedCityTitle"
        />

        <div>
          <small
          v-if="!cityExist && !!selectedCity"
          class="text-red-900"
          >Такого города нет в списке</small>
        </div>

        city - {{ city }}<br>
        cityExist - {{ cityExist }}<br>
        selectedCity - {{ selectedCity }}<br>
        selectedCityObj - {{ selectedCityObj }}<br>

        <datalist id="select-city__datalist">
          <option
          v-for="cityFromList in cities.list"
          :value="cityFromList.title"
          :key="cityFromList.translit"
          :title="cityFromList.translit"
          ></option>
        </datalist>
      </div>

      <div class="columns-2 md:columns-3 mb-5">
        <router-link
        v-for="cityFromList in cities.list"
        :to="`/region/${ cityFromList.translit }`"
        :key="cityFromList.translit"
        :title="cityFromList.translit"
        class="select-city__city-link text-sm pb-0"
        :class="{
          'font-bold text-blue-900': cityFromList.translit == city,
          'font-bold': cityFromList.translit == city,
        }"
        >{{ cityFromList.title }}</router-link>
      </div>
    </modal-el>
  </teleport>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    city: String,
    id: String,
  },
  data() {
    return {
      modalOpen: false,
      selectedCity: '',
    }
  },
  computed: {
    ...mapGetters([
      'cities',
    ]),
    selectedCityTitle: {
      get() {
        return this.selectedCity
      },
      set(value) {
        this.selectedCity = value
      },
    },

    // Переменная, которая показывает
    // есть ли в списке ли введённый
    // пользователем город
    cityExist() {
      if (!this.cities && !this.cities.list) return false

      console.log(this.cities.list)
      let currentCity = this.cities.list.filter(
        city => city.translit === this.city
      )

      return !!currentCity.length
    },
    selectedCityObj() {
      let currentCity = this.cities.list.filter(
        city => city.translit === this.city
      )

      console.log(currentCity)

      if (currentCity.length) {
        return currentCity[0]
      }

      return false
    },
  },
  watch: {
    'selectedCity': function(newCity, oldCity) {
      console.log('selectedCityObj')
      console.log('selectedCityObj', `newCity - ${newCity}, oldCity - ${oldCity}`)
    },
    '$route.params': function(newCity, oldCity) {
      // console.log(search.title)
      console.log('$route.params')
      // console.log(this.$route.params)
      console.log(newCity, oldCity)
      this.selectedCity = this.selectedCityObj.title
      // this.selectedCity = hhh
    },
  }
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

.text-input {
  border-bottom: 2px solid blue;

  &:focus {
    outline: none;
  }
}
</style>

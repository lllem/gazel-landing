import axios from 'axios'

const Cities = {
  state: {
    cities: {
      status: '', // loading / success / error
      selectedCity: { title: 'Москва и Подмосковье', translit: 'default' }, // { title: 'Город', translit: 'gorod' }
      list: [],
    },
  },

  mutations: {
    UPDATE_CITIES (state, payload) {
      state.cities.list = payload
    },
    UPDATE_CITIES_STATUS (state, status) {
      // Есть три статуса загрузки городов:
      // loading - загружается
      // success - успешно загрузились
      // error - ошибка загрузки
      state.cities.status = status
    },
    UPDATE_SELECTED_CITY (state, payload) {
      state.cities.selectedCity = payload
    },
  },

  actions: {
    async loadCities() {
      this.commit('UPDATE_CITIES_STATUS', 'loading')

      await axios
        .get('/api/cities.json')
        .then(response => {
          this.commit('UPDATE_CITIES_STATUS', 'success')
          this.commit('UPDATE_CITIES', response.data)
        })
        .catch(error => {
          this.commit('UPDATE_CITIES_STATUS', 'error')
          console.log(error)
        })
    },

    selectCity(store, city) {
      console.log(city, 'vuex')
      if (city) this.commit('UPDATE_SELECTED_CITY', city)
    },
  },

  getters: {
    cities: state => state.cities,
  },
}

export default Cities

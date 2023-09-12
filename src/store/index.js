import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contacts: {
      tel: '+79000000000',
      email: 'nnn@nn.ru',
      articles: [
        {
          id: '______',
          title: '______',
          description: '______',
          preview: '______',
        },
      ],
    },
    furgons: [
      {
        title: 'Ford Transit',
        vol: 5,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'transit.webp',
        icon: 'ford-transit-icon.webp',
        desc: 'Описание',
        price: 4000,
      },
      {
        title: 'Соболь',
        vol: 8,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'sobol.webp',
        icon: 'sobol-icon.webp',
        desc: 'Описание',
        price: 4000,
      },
      {
        title: 'Газель',
        vol: 10,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'gazel.webp',
        icon: 'gazel-icon.webp',
        desc: 'Описание',
        price: 4500,
      },
      {
        title: 'Удлинённая Газель',
        vol: 12,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'gazel-long.webp',
        icon: 'gazel-long-icon.webp',
        desc: 'Описание',
        price: 5000,
      },
    ],
    articles: [
      {
        img: 'House-Clearances-x1.webp',
        title: 'Вывоз старой мебели газелью',
        desc: 'Вывоз старой мебели газелью',
      },
      {
        img: '03-vyvoz-musora-v-spb.webp',
        title: 'Вывоз строительного мусора газелью',
        desc: 'Вывоз строительного мусора газелью',
      },
      {
        img: '5207287114656795_95d3.webp',
        title: 'Вывоз мусора из квартиры газель с грузчиками',
        desc: 'Вывоз мусора из квартиры газель с грузчиками',
      },
      {
        img: '5207287114656795_95d3.webp',
        title: 'Вывоз мусора из квартиры газель с грузчиками',
        desc: 'Вывоз мусора из квартиры газель с грузчиками',
      },
    ],
    cities: [],
  },
  getters: {
    furgons: state => state.furgons,
    contacts: state => state.contacts,
    articles: state => state.articles,
    cities: state => state.cities,
  },
  mutations: {
    UPDATE_CITIES (state, payload) {
      console.log('payload', payload)
      state.cities = payload
    }
  },
  actions: {
    async loadCities() {
      let cities;

      await axios
        .get('./api/cities.json')
        .then(response => {
          cities = response.data
          this.commit('UPDATE_CITIES', response.data)
        })
        .catch(error => console.log(error));

      console.log(cities)
    },
  },
  modules: {
  }
})

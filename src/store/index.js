import { createStore } from 'vuex'
import axios from 'axios'
import Cities from './modules/cities'

export default createStore({
  state: {
    contacts: {
      tel: '+79000000000',
      email: 'hello@nn.ru',
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
    articles: [],
  },
  getters: {
    furgons: state => state.furgons,
    contacts: state => state.contacts,
    articles: state => state.articles,
  },
  mutations: {
    UPDATE_ARTICLES (state, payload) {
      state.articles = payload
    },
  },
  actions: {

    async loadArticles() {
      await axios
        .get('/api/articles.json')
        .then(response => {
          this.commit('UPDATE_ARTICLES', response.data)
        })
        .catch(error => console.log(error))
    },
  },
  modules: {
    Cities,
  }
})

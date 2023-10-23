import { createStore } from 'vuex'
// import axios from 'axios'
import Contacts from './modules/contacts'
import Cities from './modules/cities'
import Order from './modules/order'
import Furgons from './modules/furgons'
import Articles from './modules/articles'

export default createStore({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    Contacts,
    Cities,
    Order,
    Furgons,
    Articles,
  },
})

// import axios from 'axios'

const Order = {
  state: {
    order: {
      modalOpen: false,
    },
  },

  mutations: {
    OPEN_MODAL(state, payload) {
      state.order.modalOpen = payload
    }
  },

  actions: {
    openOrderModal(store, openclose) {
      this.commit('OPEN_MODAL', openclose)
    }
  },

  getters: {
    order: state => state.order,
  },
}

export default Order

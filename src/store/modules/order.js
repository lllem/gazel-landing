import axios from 'axios'

const Order = {
  state: {
    order: {
      status: '', // sending, success, error
      modalOpen: false,
      phone: '',
    },
  },

  mutations: {
    // Открвыает/закрывает модальное окно
    OPEN_MODAL(state, payload) {
      state.order.modalOpen = payload
    },

    // Обновляем статус отправки
    UPDATE_ORDER_STATUS(state, status) {
      // Есть 4 статуса заказа:
      // '' - пустой, форма не заполнена, по-умолчанию
      // sending - отправляется
      // success - данные успешно отправились
      // error - ошибка отправки
      state.order.status = status
    },

    // Записываем номер телефона в стор
    UPDATE_ORDER_PHONE(state, phone) {
      state.order.phone = phone
    },
  },

  actions: {
    // Открвыает/закрывает модальное окно
    openOrderModal(store, openclose) {
      this.commit('OPEN_MODAL', openclose)
    },

    // Отправка формы на сервер
    async sendPhone(store, phone) {
      this.commit('UPDATE_ORDER_STATUS', 'sending') // Меняем статус на "отправляется"
      this.commit('UPDATE_ORDER_PHONE', phone) // Записываем номер телефона в стор

      // отправляем на сервер
      await axios
        .get('/api/order', phone)
        .then( response => {
          alert(response)
        })
        .catch( error => {
          console.log(error)
          this.commit('UPDATE_ORDER_STATUS', 'error')
        })
    },

    refreshForm() {
      this.commit('UPDATE_ORDER_STATUS', '') // Меняем статус на "отправляется"
    }
  },

  getters: {
    order: state => state.order,
  },
}

export default Order

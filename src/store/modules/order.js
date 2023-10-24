import axios from 'axios'

const Order = {
  state: {
    order: {
      status: '', // sending, success, error
      modalOpen: false,
      phone: '',
      calculator: {
        city: null,
        furgon: null,
        distance: null,
        movers: null,
        price: null,
      }, // данные из калькулятора
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

    // Записываем номер телефона в стор
    UPDATE_CALCULATOR_DATA(state, calcData) {
      state.order.calculator = calcData
      console.log(calcData)
    },
  },

  actions: {
    // Открывает/закрывает модальное окно
    openOrderModal(store, openclose) {
      this.commit('OPEN_MODAL', openclose)
    },

    // Отправка формы на сервер
    async sendPhone(store, phone) {
      this.commit('UPDATE_ORDER_STATUS', 'sending') // Меняем статус на "отправляется"
      this.commit('UPDATE_ORDER_PHONE', phone) // Записываем номер телефона в стор

      // отправляем на сервер
      await axios
        .get('/api/order.json', phone)
        .then( response => {
          if (response.data === 'success') this.commit('UPDATE_ORDER_STATUS', 'success')
          else {
            console.log(response)
            this.commit('UPDATE_ORDER_STATUS', 'error')
          }
        })
        .catch( error => {
          console.log(error)
          this.commit('UPDATE_ORDER_STATUS', 'error')
        })
    },

    refreshForm() {
      this.commit('UPDATE_ORDER_STATUS', '') // Меняем статус на "отправляется"
    },

    updateCalculatorData(store, CalculatorData) {
      this.commit('UPDATE_CALCULATOR_DATA', CalculatorData)
    }
  },

  getters: {
    order: state => state.order,
  },
}

export default Order

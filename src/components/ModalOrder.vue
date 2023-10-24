<template>
  <modal-el
  v-if="open" v-model="open"
  xs
  >
    <div class="uppercase font-bold">Заказать звонок</div>

    <form
    @submit.prevent="onSubmit"
    class="order-form"
    ref="order"
    >
      <!-- Форма заказа звонка -->
      <div
      v-if="!order.status"
      class="order-form__form"
      >
        <div class="my-5 text-lg font-semibold text-indigo-800">
          Оставьте свой номер телефона и&nbsp;мы позвоним вам в&nbsp;ближайшее время
        </div>

        <textInput
        v-model="phone"
        type="tel"
        class="text-2xl w-full my-5"
        maska="+7(###)###-####"
        pattern="\+7\(\d{3}\)\d{3}-\d{4}"
        label="Ваш номер телефона"
        focus
        />

        <buttonEl lg :disabled="!valid" class="w-full mb-3">Отправить</buttonEl>
      </div>

      <!-- Отправка данных -->
      <div
      v-if="order.status === 'sending'"
      class="order-form__error-view
      text-center"
      >
        <ArrowPathIcon class="icon order-form__big-icon text-sky-500 my-5 rotate"/>

        <h2 class="text-2xl font-bold mb-5 text-sky-600">Отправляем...</h2>
      </div>

      <!-- Успешно -->
      <div
      v-if="order.status === 'success'"
      class="order-form__error-view
      text-center"
      >
        <CheckIcon class="icon order-form__big-icon text-sky-500 my-5"/>

        <h2 class="text-2xl font-bold mb-2 text-sky-700">Спасибо за заявку</h2>

        <p class="mb-4">Мы свяжемся с вами в ближайшее время</p>

        <buttonEl lg @click.prevent="open = false" class="w-full mb-3">Закрыть</buttonEl>

      </div>

      <!-- Ошибка -->
      <div
      v-if="order.status === 'error'"
      class="order-form__error-view
      text-center"
      >
        <icon-el icon="x-mark" class="order-form__big-icon text-red-700 my-5"/>

        <h2 class="text-2xl font-bold mb-2 text-red-900">Возникла ошибка</h2>

        <p class="mb-4">К сожалению, данные не отправились</p>

        <button
        @click.prevent="formAgain"
        class="px-4 mb-3 py-2 font-semibold text-sm text-white rounded-xl w-full text-xl bg-red-900 hover:bg-red-600 transition-colors"
        >Попробовать ещё раз</button>
      </div>

    </form>
  </modal-el>
</template>

<script>
import { mapGetters } from 'vuex'
import textInput from '@/components/core/inputs/inputText.vue'
import { vMaska } from "maska" // отдельная зависимость
import { ArrowPathIcon, CheckIcon } from '@heroicons/vue/24/solid'

export default {
  data() {
    return {
      phone: '+7',
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('sendPhone', this.phone)
    },

    formAgain() {
      this.$store.dispatch('refreshForm')
    },
  },

  directives: { maska: vMaska }, // отдельная зависимость

  components: {
    textInput,
    ArrowPathIcon,
    CheckIcon,
  },

  computed: {
    ...mapGetters([
      'order'
    ]),

    open: {
      get() {
        return this.order.modalOpen
      },
      set(value) {
        this.$store.dispatch('openOrderModal', value)
      }
    },

    valid() {
      let number = this.phone.match(/[0-9]/g)
      if (number) return (number.length === 11 && (number[0] == 7 || number[0] == 8))
      return false
    },
  },

}
</script>

<style lang="scss">
.order-form {
  position: relative;

  // По-умолчанию
  & {
    .order-form__form {
      visibility: visible;
    }

    .order-form__error-view {
    }

    .order-form__big-icon {
      font-size: 5rem;
    }
  }

  // Отправка
  &.order-form_sending {

    .order-form__form {
      visibility: hidden;
    }
  }

  // Успешно
  &.order-form_success {

    .order-form__form {
      visibility: hidden;
    }
  }

  // Ошибка
  &.order-form_error {

    .order-form__form {
      visibility: hidden;
    }
  }
}
</style>

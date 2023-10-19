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
      <div class="order-form__">
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

        <button
        class="px-4 mb-3 py-2 font-semibold text-sm text-white rounded-xl w-full text-xl"
        :class="{
          'bg-blue-500': valid,
          'bg-indigo-400 button_disabled': !valid,
          }"
        prevent
        >Отправить</button>
      </div>
      <!-- / Форма заказа звонка -->

      <!-- Отправка данных -->

      <!-- Успешно -->

      <!-- Ошибка -->

    </form>
  </modal-el>
</template>

<script>
import { mapGetters } from 'vuex'
import textInput from '@/components/core/inputs/inputText.vue'
import { vMaska } from "maska" // отдельная зависимость

export default {
  data() {
    return {
      phone: '+7',
    }
  },

  methods: {
    onSubmit() {
      console.log('submit')
    }
  },

  directives: { maska: vMaska }, // отдельная зависимость

  components: {
    textInput,
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
.button_disabled {
  pointer-events: none;
}
</style>

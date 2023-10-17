<template>
  <modal-el
  v-if="open" v-model="open"
  xs
  >
    <div class="uppercase font-bold">Заказать звонок</div>
    <form action="">

      <div class="my-5 text-lg font-semibold text-indigo-800">
        Оставьте свой номер телефона и&nbsp;мы позвоним вам в&nbsp;ближайшее время
      </div>

      <textInput
      v-model="phone"
      class="text-2xl w-full my-5"
      maska="+7 ###-###-####"
      />

      <button class="px-4 mb-3 py-2 font-semibold text-sm bg-blue-500 text-white rounded-xl shadow-sm opacity-100 w-full text-xl">Отправить</button>

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
  },
}
</script>

<style lang="scss">
</style>

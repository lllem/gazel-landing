<template>
  <modal-el v-if="open" v-model="open">
    <div class="p-8">Форма заказа</div>
  </modal-el>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // open: false,
    }
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

  watch: {},
}
</script>

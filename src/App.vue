<template>
  <TopNav/>
  <main class="flex-grow overflow-hidden flex">
    <router-view/>
  </main>
  <FooterEl/>
  <ModalOrder/>
</template>

<script>
import { mapGetters } from 'vuex'
import TopNav from '@/components/TopNav.vue';
import FooterEl from '@/components/FooterEl.vue';
import ModalOrder from '@/components/ModalOrder.vue';

export default {
  name: 'MainWrapper',
  components: {
    TopNav,
    FooterEl,
    ModalOrder,
  },

  computed: {
    ...mapGetters([
      'order'
    ])
  },

  mounted() {
    this.$store.dispatch('loadCities')
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;

  main {
    flex-flow: column nowrap;
  }
}
</style>

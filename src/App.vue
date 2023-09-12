<template>
  <TopNav/>
  <main class="flex-grow overflow-hidden">
    <router-view/>
  </main>
  <FooterEl/>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import FooterEl from '@/components/FooterEl.vue';

export default {
  name: 'MainWrapper',
  components: {
    TopNav,
    FooterEl,
  },
  mounted() {},
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
}
</style>

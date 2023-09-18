<template>
  <footer class="bg-dark py-8 text-white">
    <div class="container max-w-screen-lg mx-auto px-4">
      <hr class="border-t mb-10 opacity-25">
      <nav>
        <ul>
          <li class="text-cyan-400" v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.meta.title }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      routes: [
        {
          path: '/',
          meta: {
            title: 'Главная',
          },
        },
      ]
    };
  },
}
</script>


<style lang="scss">
.footer {
  border: 1px solid black;
}
</style>

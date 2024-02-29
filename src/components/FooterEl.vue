<template>
  <footer class="bg-dark py-8 text-white">
    <div class="container max-w-screen-lg mx-auto px-4">
      <hr class="border-t mb-10 opacity-25">
      <nav class="text-cyan-600">
        ©&nbsp;«<router-link to="/" class="text-cyan-400">Вывоз мусора ГАЗелью {{ selectedCity.title }}</router-link>» 2023
      </nav>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'selectedCity',
    ])
  }
}
</script>

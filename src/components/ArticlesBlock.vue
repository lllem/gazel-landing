<template>
  <section class="articles-block text-center py-10 bg-dark text-white">
    <div class="container max-w-lg md:max-w-screen-lg mx-auto px-3">

      <subtitleEl invert>Статьи</subtitleEl>

      <div class="grid md:grid-cols-3 gap-4 mb-5">
        <ArticleCard
        v-for="article in articles"
        :key="`${ article.img }_${ Math.random()*1000000 }`"
        :img="`/assets/img/articles/${ article.img }`"
        >
          <template v-slot:title>
            {{ article.title }}
          </template>
          <template v-slot:desc>
            {{ article.desc }}
          </template>
        </ArticleCard>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleCard from '@/components/core/ArticleCard.vue'

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'articles',
    ]),
  },
}
</script>

<style lang="scss">
.articles-block {}
</style>

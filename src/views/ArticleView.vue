<template>
  <div
  class="article"
  v-if="currentArticle"
  >
    <HeaderBlock/>
    <header class="article__header bg-dark text-white pt-9 inline-block w-full">
      <div class="container max-w-screen-md mx-auto text-center px-4">

        <h1 class="text-4xl font-bold mе-9 mb-6">{{ currentArticle.title }}</h1>

        <p class="text-xl text-blue-200 mb-9">{{ currentArticle.desc }}</p>

      </div>
    </header>

    <section class="article__cover">
      <div class="container max-w-screen-md mx-auto text-center px-4">
        <img
        :src="`/assets/img/articles/${currentArticle.img}`"
        :alt="currentArticle.title"
        class="article__main-img w-full rounded-xl mb-8"
        >
      </div>
    </section>


    <section class="container mx-auto max-w-screen-md my-8 px-4">
      <section v-html="articleHTML"></section>
    </section>

    <ArticlesBlock/>

  </div>

  <ErrorPage404 v-else />
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderBlock from '@/components/HeaderBlock.vue'
import ErrorPage404 from '@/views/ErrorPage404.vue'
import axios from 'axios'
import ArticlesBlock from '@/components/ArticlesBlock.vue'

export default {
  props: {
    article: String,
  },
  data() {
    return {
      articleHTML: '',
      err404: false,
    }
  },
  components: {
    HeaderBlock,
    ErrorPage404,
    ArticlesBlock,
  },
  computed: {
    ...mapGetters([
      'articles',
    ]),

    currentArticle() {
      const article = this.articles.filter(
        art => this.article === art.link
      )

      if (article.length) return article[0]
      return false
    },
  },

  methods: {
    async loadArticleHTML() {
      await axios
        .get(`/articles/${ this.currentArticle.html }`)
        .then(
          response => {
            this.articleHTML = response.data
          })
          .catch(error => {
            console.log(error)
            this.articleHTML = 'Ошибка сервера'
          }
        )
    },
  },

  async mounted() {
    await this.$store.dispatch('loadArticles')
    this.loadArticleHTML()

    const DEFAULT_TITLE = 'Вывоз мусора ГАЗелью'

    if (this.currentArticle) document.title = `${this.currentArticle.title} | ${ DEFAULT_TITLE }`
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens.scss';

.article {
  .article__header {}

  .article__main-img {}

  .article__cover {
    position: relative;

    .container {
      position: relative;
    }

    &::before {
      content: '';
      display: inline-block;
      background-color: $dark;
      height: 50%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>

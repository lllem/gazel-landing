import axios from 'axios'

export const Articles = {
  state: {
    articles: [],
  },

  mutations: {
    UPDATE_ARTICLES (state, payload) {
      state.articles = payload
    },
  },

  actions: {
    async loadArticles() {
      await axios
        .get('/api/articles.json')
        .then(response => {
          this.commit('UPDATE_ARTICLES', response.data)
        })
        .catch(error => console.log(error))
    },
  },

  getters: {
    articles: state => state.articles,
  },
}

export default Articles

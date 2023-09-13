<template>
  <router-link
  :to="`/articles/${ to }`"
  class="article-card text-start rounded-2xl bg-white text-black inline-flex overflow-hidden"
  >
    <div class="article-card__img aspect-[4/3] w-full">
      <img :src="img" alt="TODO alt" class="img-cover">
    </div>

    <div class="article-card__escription px-4 pb-5">
      <h3
      v-if="$slots.title"
      class="article-card__title text-xl font-bold mb-2 text-blue-900"
      >
        <slot name="title" />
      </h3>

      <p v-if="$slots.desc" class="article-card__desc text-blue-950">
        <slot name="desc" />
      </p>
    </div>

  </router-link>
</template>

<script>
export default {
  props: {
    img: String,
    to: String,
  },
}
</script>

<style lang="scss">
.article-card {
  flex-flow: column nowrap;

  .article-card__img {
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 20%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(0deg, #fff, rgba(#fff, 0));
    }
  }

  .article-card__title {
    line-height: 1;
  }

  .article-card__desc {
    line-height: 1;
  }
}
</style>

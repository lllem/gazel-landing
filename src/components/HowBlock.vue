<template>
  <section class="how-order-block py-10 bg-dark text-white">
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 container max-w-lg md:max-w-screen-lg mx-auto px-4">

      <div class="">
        <h2 class="font-black uppercase text-4xl md:text-5xl text-sky-500 mb-4">Как <span class="text-white">заказать</span> наши услуги?</h2>
        <p class="text-xl mx-auto">Воспользуйтесь нашими контактами, чтобы заказать недорогой вывоз мусора ГАЗелью или получить детальную консультацию, если у вас остались вопросы!</p>
      </div>

      <div class="">
        <ul class="mb-4">
          <li class="mb-3">
            <a class="font-bold text-xl nowrap" href="tel:+7 900 000 0000">
              <iconEl icon="phone" solid class="text-blue-300"/>
              <span class="ms-1">+7 900 000 0000</span>
            </a>
          </li>
          <li>
            <a class="font-bold text-xl nowrap" href="mailto:nnn@nn.ru" title="Электронная почта">
              <iconEl icon="envelope" solid class="text-blue-300"/>
              <span class="ms-2">nnn@nn.ru</span>
            </a>
          </li>
        </ul>
        <p class="mb-4">Звоните и&nbsp;пишите — мы&nbsp;работаем ежедневно с&nbsp;9 до&nbsp;18 и&nbsp;обязательно ответим вам!</p>

        <div class="">
          <button
          @click="openOrderModal"
          class="px-4 py-2 font-semibold text-sm
          border-blue-500 border-solid border-2
          bg-blue-500 text-white rounded-md shadow-sm opacity-100
          shadow-blue-500/50 w-full md:w-auto">Заказать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openOrderModal(){
      this.$store.dispatch('openOrderModal', true)
    },
  },
}
</script>

<style lang="scss">
.how-order-block {}
</style>

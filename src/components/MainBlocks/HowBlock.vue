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
            <a class="font-bold text-xl nowrap" :href="`tel:${ contacts.tel }`">
              <i class="text-blue-500 ani-pulse">
                <iconEl icon="phone" class="ani-ring" solid/>
              </i>
              <span class="ms-1 nowrap">{{ contacts.tel }}</span>
            </a>
          </li>
          <li>
            <a class="font-bold text-xl nowrap" :href="`mailto:${ contacts.email }`" title="Электронная почта">
              <iconEl icon="envelope" solid class="text-blue-500"/>
              <span class="ms-2">{{ contacts.email }}</span>
            </a>
          </li>
        </ul>
        <p class="mb-4">Звоните и&nbsp;пишите — мы&nbsp;работаем ежедневно с&nbsp;9 до&nbsp;18 и&nbsp;обязательно ответим вам!</p>

        <div class="">
          <buttonEl @click="openOrderModal" >Заказать</buttonEl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    openOrderModal(){
      this.$store.dispatch('openOrderModal', true)
    },
  },

  computed: {
    ...mapGetters([
      'contacts',
    ]),
  },
}
</script>

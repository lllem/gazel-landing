<template>
  <section class="py-10 container px-4 mx-auto">

    <subtitleEl>Когда нужны наши услуги?</subtitleEl>

    <p class="text-xl max-w-2xl mx-auto mb-10 text-center"
    data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
    >Обязательно обращайтесь к нам, если вы не хотите самостоятельно вывозить отходы, а желаете сэкономить силы, нервы и время!</p>

    <p class="mb-2 uppercase font-bold text-blue-600 text-center"
    data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
    >Наша помощь особенно актуальна, если</p>

    <ul
    class="when-block grid grid-cols-2 md:grid-cols-4 gap-4 mb-5 max-w-4xl mx-auto text-center"
    data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
    >
      <li
      v-for="(whenItem, i) in when" :key="whenItem.icon"
      class="py-4"
      data-aos="fade-up" data-aos-duration="800" :data-aos-delay="400 + 200*i"
      >
        <iconEl :icon="whenItem.icon" class="when-block__icon mx-auto mb-3 text-indigo-400"/>
        <p class="text-sm font-semibold lh-1 mb-2 text-indigo-900" v-html="whenItem.desc"></p>
      </li>
    </ul>

    <p class="mb-4 max-w-2xl mx-auto text-center text-indigo-900 font-semibold"
    data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
    >Вывоз мусора на&nbsp;ГАЗели с&nbsp;грузчиками — отличное решение во&nbsp;всех этих случаях! На&nbsp;погрузку уйдет всего 1-1,5 часа, а&nbsp;стоимость услуги куда ниже, чем цена заказа большой машины.</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      when: [
        {
          icon: 'truck',
          desc: 'Вы не&nbsp;хотите заказывать большой мусоровоз',
        },
        {
          icon: 'building-office',
          desc: 'Вы живете в&nbsp;многоквартирном доме без&nbsp;лифта',
        },
        {
          icon: 'queue-list',
          desc: 'Вам нужно избавиться от&nbsp;10-15 мешков отходов или больше',
        },
        {
          icon: 'trash',
          desc: 'У вас остался строительный хлам, который нельзя просто вынести на&nbsp;помойку',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
.when-block {
  .when-block__icon {
    font-size: 3rem;
  }
}
</style>

<template>
  <section class="tara-block text-center pt-10 bg-dark text-white">
    <div class="container max-w-screen-lg mx-auto px-3">

      <subtitleEl invert>А что насчет тары?</subtitleEl>

      <p class="text-xl max-w-2xl mx-auto mb-3 text-start">Мы не&nbsp;только организуем вывоз мусора из&nbsp;квартиры ГАЗелью, но и&nbsp;можем предложить упаковать его в&nbsp;специальные мешки из&nbsp;нетканого материала, которые затем будут погружены в&nbsp;кузов.</p>

      <p class="max-w-2xl mx-auto mb-10 text-indigo-300 text-start">Вам не&nbsp;придется закупать продукцию самостоятельно: у&nbsp;нас есть все необходимое. Мы используем самые прочные и&nbsp;вместительные мешки, которые подходят как для ТКО, так и&nbsp;для строительного хлама.</p>

      <p class="mb-2 uppercase font-bold text-indigo-300">Упаковка отходов поможет</p>

      <ul class="grid md:grid-cols-3 gap-4 mb-10 mt-8 max-w-2xl md:max-w-4xl mx-auto
      justify-content-start
      justify-items-start
      align-content-start
      align-items-start
      ">
        <li
        v-for="taraItem in tara" :key="taraItem.icon"
        class="grid md:grid-cols-1 text-start md:text-center gap-4
        grid-cols-12
        grid-rows-1
        md:grid-rows-2
        items-center
        md:items-start
        ">
          <iconEl :icon="taraItem.icon" class="tara-block__icon mx-auto text-blue-400 col-span-auto text-end border-- w-full
          md:col-span-12
          md:row-span-1
          "/>
          <p class="text-sm font-semibold lh-1 text-indigo-100 col-span-10 border--
          col-end-auto
          md:col-span-12
          row-span-auto
          " v-html="taraItem.desc"></p>
        </li>
      </ul>

      <div class="max-w-screen-md mx-auto">
        <img src="@/assets/img/bags.webp" alt="Мешки"/>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tara: [
        {
          icon: 'rectangle-group',
          desc: 'Максимально плотно уложить их в&nbsp;кузове автомобиля, рационально использовать имеющееся пространство',
        },
        {
          icon: 'archive-box-arrow-down',
          desc: 'Не&nbsp;дать пролиться жидкостям или&nbsp;рассыпаться сыпучим отходам',
        },
        {
          icon: 'sparkles',
          desc: 'Обеспечить максимальную чистоту на&nbsp;объекте',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
.tara-block {
  .tara-block__icon {
    font-size: 3rem;
  }
}
</style>

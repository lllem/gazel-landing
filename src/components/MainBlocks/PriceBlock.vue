<template>
  <section class="price-block text-center pb-10 bg-blue-950-- text-white relative pb-10 diagonal-bottom">
    <div class="container max-w-screen-lg mx-auto">

      <div class="px-3">

        <subtitleEl invert>Как рассчитать цену?</subtitleEl>

        <p class="text-xl max-w-2xl mx-auto mb-4"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
        >Проще всего позвонить или написать нам, чтобы менеджеры определили сумму с&nbsp;учетом всех факторов, из&nbsp;которых она складывается.</p>

        <p class="mb-4 max-w-2xl mx-auto text-indigo-200"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
        >Если же вы хотите самостоятельно понять, сколько стоит вывоз мусора ГАЗелью с&nbsp;грузчиками, посмотрите наш прайс. Там указаны примерные расценки, а&nbsp;точная ставка зависит от:</p>

        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <li
          v-for="(taraItem, i) in tara" :key="taraItem.icon"
          class="flex items-center content-start border shadow-xl border-blue-900 bg-blue-900 px-3 py-2 text-start gap-4 rounded-xl"
          data-aos="fade-up" data-aos-duration="800" :data-aos-delay="300 + 100*i"
          >
            <iconEl :icon="taraItem.icon" class="price-block__icon mx-auto mx-0 text-blue-400"/>
            <p class="text-sm font-semibold lh-1 mb-1 text-indigo-100 flex-grow" v-html="taraItem.desc"></p>
          </li>
        </ul>
      </div>

      <div class="overflow-auto w-full md:overflow-hidden md:px-3 border-b md:border-none border-indigo-300"
      data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
      >
        <table class="table-auto md:rounded-xl overflow-hidden text-black w-full bg-blue-300 text-start md:border border-indigo-300">
          <thead class="bg-blue-200 text-blue-900 text-sm">
            <tr class="border-b border-indigo-300">
              <th class="p-4 text-start text-sm">Районы</th>
              <th class="p-4 text-start text-sm">Ford Transit 4м<sup>3</sup></th>
              <th class="p-4 text-start text-sm">Соболь 7м<sup>3</sup></th>
              <th class="p-4 text-start text-sm">Газель 10м<sup>3</sup></th>
              <th class="p-4 text-start text-sm">Газель 12м<sup>3</sup></th>
            </tr>
          </thead>
          <tbody class="bg-blue-50">
            <tr class="border-b border-indigo-200">
              <th class="p-4 text-start text-sm">В&nbsp;пределах МКАД</th>
              <td class="p-4 nowrap">от 4&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 4&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 4&nbsp;500&nbsp;₽</td>
              <td class="p-4 nowrap">от 5&nbsp;000&nbsp;₽</td>
            </tr>
            <tr class="border-b border-indigo-200">
              <th class="p-4 text-start text-sm">До 15&nbsp;км от&nbsp;МКАД</th>
              <td class="p-4 nowrap">от 4&nbsp;500&nbsp;₽</td>
              <td class="p-4 nowrap">от 4&nbsp;500&nbsp;₽</td>
              <td class="p-4 nowrap">от 5&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 5&nbsp;500&nbsp;₽</td>
            </tr>
            <tr class="border-b border-indigo-200">
              <th class="p-4 text-start text-sm">До 30&nbsp;км от&nbsp;МКАД</th>
              <td class="p-4 nowrap">от 5&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 5&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 5&nbsp;500&nbsp;₽</td>
              <td class="p-4 nowrap">от 6&nbsp;000&nbsp;₽</td>
            </tr>
            <tr class="border-b border-indigo-200">
              <th class="p-4 text-start text-sm">До 50&nbsp;км от&nbsp;МКАД</th>
              <td class="p-4 nowrap">от 6&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 6&nbsp;000&nbsp;₽</td>
              <td class="p-4 nowrap">от 6&nbsp;500&nbsp;₽</td>
              <td class="p-4 nowrap">от 7&nbsp;000&nbsp;₽</td>
            </tr>
          </tbody>
        </table>
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
          icon: 'users',
          desc: 'Количества грузчиков',
        },
        {
          icon: 'arrows-up-down',
          desc: 'Наличия лифта в&nbsp;доме',
        },
        {
          icon: 'building-office',
          desc: 'Этажа, с&nbsp;которого нужно вынести мусор',
        },
        {
          icon: 'cube-transparent',
          desc: 'Необходимости упаковки',
        },
        {
          icon: 'list-bullet',
          desc: 'Класса отходов',
        },
        {
          icon: 'map',
          desc: 'Дальности перевозки',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
.price-block {
  .price-block__icon {
    font-size: 2rem;
  }
}
</style>

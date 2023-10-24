<template>
  <section class="faq-block py-10 bg-dark-- text-white">
    <div class="grid md:grid-cols-2 gap-8 container max-w-lg md:max-w-screen-lg mx-auto px-4">

      <div>
        <h2 class="md:text-end font-black uppercase text-4xl md:text-5xl text-sky-500"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
        >Ответы на&nbsp;частые <span class="text-white">вопросы</span></h2>
      </div>

      <ul class="spoiler">
        <details
        v-for="(question, i) in questions"
        :key="`question_${ i }`"
        class="spoiler__item text-white text-start mb-0 ps-9"
        data-aos="fade-up" data-aos-duration="800" :data-aos-delay="300 + 100*i"
        >
          <summary class="spoiler__title text-xl font-bold py-2">
            <icon-el icon="x-mark" class="spoiler__icon"/>
            <h4>{{ question.question }}</h4>
          </summary>
          <p class="pb-4 text-indigo-200 border-b-- border-current">{{ question.answer }}</p>
        </details>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      questions: [
        {
          question: 'Сколько стоят услуги по вывозу мусора?',
          answer: 'Примерные цены указаны на сайте. В каждом конкретном случае мы выполняем индивидуальный расчет. Стоимость может варьироваться в зависимости от объёма заказа, сроков исполнения, удаленности от города. Окончательную цену вы можете узнать у нашего оператора, позвонив по контактному телефону.',
        },
        {
          question: 'Выполняете срочные заказы?',
          answer: 'Да, мы готовы работать с любыми заказами, в то числе и срочными. Но рекомендуем заказывать контейнер заранее, это позволяет гарантировать своевременную подачу техники. Довольно часто наши КАМАЗы, газели, погрузчики и грузчики находятся на выездах.',
        },
        {
          question: 'Как можно сэкономить на вывозе мусора?',
          answer: 'Самый недорогой способ — заказать вывоз мусора Газелью. В эту машину помещаются оконные рамы, мешки со строительными отходами и прочие малогабаритные вещи. Неупакованный мусор на Газели не вывозим.',
        },
        {
          question: 'Куда вы вывозите строительный мусор?',
          answer: 'Все строительные отходы доставляем на специальные полигоны, где они и утилизируются.',
        },
        {
          question: 'Как сделать заказ?',
          answer: 'Если вы хотите оставить заявку на вывоз мусора, звоните или пишите нам. От вас нужна следующая информация: характер и объем мусора, адрес объекта, день и время выполнения заказа. Заявки мы принимаем заявки круглосуточно онлайн и в рабочее время по телефону и онлайн.',
        },
      ]
    };
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens.scss';

.faq-block {
  position: relative;

  .grid {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    background-color: $dark;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
  }
}

.spoiler {

  .spoiler__item {

    position: relative;

    &[open] {}

    .spoiler__title {
      cursor: pointer;
      line-height: 1.25;
    }
  }

  summary {
    cursor: pointer;
    list-style: none;
  }

  div {
    border: 1px #ccc solid;
    padding: 10px;
  }

  .spoiler__icon {
    position: absolute;
    left: 0;
    font-size: 1.25em;
    color: #71d3ff;
    transition: transform 0.6s;
    transform: rotate(-45deg);
    transform-origin: 50% 50%;
  }

  & .spoiler__item[open] summary .spoiler__icon {
    transform: rotate(0deg);
  }

  & .spoiler__item summary::before {
    content: none !important;
  }
}
</style>

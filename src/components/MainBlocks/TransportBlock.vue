<template>
  <section class="transport py-10 bg-dark text-white">

    <div class="grid md:grid-cols-2 gap-4 md:gap-8 pt-10 mb-5 container max-w-screen-lg mx-auto px-4">

      <div class="max-w-lg mx-auto">
        <h2 class="mb-5 font-black uppercase text-4xl md:text-5xl text-sky-500"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
        >Какой <span class="text-white">транспорт</span> мы предлагаем?</h2>

        <p class="text-xl text-indigo-300 font-bold"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
        >Если коротко — лучший!<br>В нашей компании действует собственный автопарк, в который входят чистые, современные, вовремя обслуживаемые машины.</p>
      </div>

      <div class="max-w-lg mx-auto">
        <p class="mb-4 font-semibold"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
        >ГАЗель для вывоза мусора способна вместить до 1,5 тонн или 10 кубометров отходов. Ее можно заказать для того, чтобы избавиться от ТБО, строительного, некоторых видов промышленного мусора.</p>

        <p class="text-indigo-200"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
        >В зависимости от модификации кузов может быть крытым или оснащаться тентом. Последний вариант особенно актуален, если требуется вывезти крупногабаритный мусор. Такой автомобиль более компактен и маневренен, чем стандартный мусоровоз, поэтому часто используется для транспортировки отходов в городах с плотной застройкой.</p>
      </div>
    </div>

    <div class="transport__illustration max-w-screen-lg mx-auto"
    data-aos="zoom-out-up" data-aos-duration="800" data-aos-delay="300"
    >
      <img src="@/assets/img/auto/auto_sobol.webp" class="w-full" alt="Авто">
    </div>
  </section>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      questions: [
        {
          question: 'Сколько стоят услуги по вывозу мусора?',
          answer: 'Примерные цены указаны на сайте. В каждом конкретном случае мы выполняем индивидуальный расчет. Стоимость может варьироваться в зависимости от объёма заказа, сроков исполнения, удаленности от города. Окончательную цену вы можете узнать у нашего оператора, позвонив по контактному телефону.',
        },
        {
          question: 'Как выбрать подходящий контейнер?',
          answer: 'Все зависит от особенностей и объема строительного мусора. Самое востребованное решение — 8 кубовый контейнер. Он подходит для сбора любых строительных отходов. Если вам нужно вывезти габаритный мусор или мусор в большом объеме, рады предложить контейнеры-мультилифты на 20 м3 и 27 м3.',
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
          question: 'На сколько можно взять в аренду контейнеры?',
          answer: 'На загрузку 8 кубового бункера мы даем 2 часа, 20 и 27 кубовых контейн еров — 3 часа. Превышение этих временных рамок приравнивается к посуточной аренде (оплачивается по отдельному тарифу).',
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
.spoiler {
  // border: 1px solid red;

  .spoiler__item {
    // border: 1px solid violet;

    position: relative;

    &[open] {
      // border: 1px solid red;
    }

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

  &[open] summary {
  }
  & .spoiler__item summary:before {
    content: "+";
    position: absolute;
    left: 0;
    top: -0.15em;
    font-size: 2em;
    font-weight: normal;
    opacity: 0.75;
    transition: transform 0.6s;
    transform: rotate(0deg);
    transform-origin: 50% 50%;
    line-height: 100%;
  }

  & .spoiler__item[open] summary:before {
    transform: rotate(45deg);
  }
}
</style>

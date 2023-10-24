<template>
  <section class="payment-block text-center pt-10">
    <div class="container max-w-lg md:max-w-screen-lg mx-auto px-3">

      <subtitleEl>Как происходит оплата?</subtitleEl>

      <p class="text-indigo-900 font-semibold text-xl max-w-2xl mx-auto mb-10 text-center"
      data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
      >Мы предлагаем выгодные условия как для физических лиц, так и&nbsp;предпринимателей, предприятий и&nbsp;муниципальных организаций, вот почему у&nbsp;нас можно оплатить услугу любым удобным способом.</p>

      <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <li
        v-for="(paymentItem, i) in payment" :key="paymentItem.icon"
        class="py-4"
        data-aos="fade-up" data-aos-duration="800" :data-aos-delay="300 + 200*i"
        >
          <iconEl :icon="paymentItem.icon" class="payment-block__icon mx-auto mb-3 text-blue-500"/>
          <p class="text-sm font-semibold lh-1 mb-2 text-indigo-900" v-html="paymentItem.desc"></p>
        </li>
      </ul>

      <p class="text-indigo-900 font-semibold max-w-2xl mx-auto mb-10"
      data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"
      >Вы можете оплатить вывоз ГАЗелью строительного мусора, бытовых или&nbsp;других отходов наличными, пластиковой картой или&nbsp;электронным кошельком. Также мы принимаем переводы на&nbsp;расчетный счет. Последнее особенно актуально для&nbsp;юрлиц.</p>

    </div>
    <img
    width="1920"
    height="1180"
    class="payment-block__bg"
    src="@/assets/img/__large_GAZ_Sobol_10_v3-_low.webp"
    alt="Вывоз мусора газелью, как происходит оплата"
    data-aos="zoom-out-up" data-aos-duration="800" data-aos-delay="300"
    >
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      payment: [
        {
          icon: 'banknotes',
          desc: 'Наличными',
        },
        {
          icon: 'credit-card',
          desc: 'Пластиковой картой',
        },
        {
          icon: 'qr-code',
          desc: 'Электронным кошельком',
        },
        {
          icon: 'clipboard-document-check',
          desc: 'Переводом на&nbsp;расчетный счет',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens.scss';

.payment-block {
  position: relative;
  z-index: 1;
    margin-bottom: -23%;

  .payment-block__icon {
    font-size: 3rem;
  }

  .payment-block__bg {
    position: relative;
    z-index: -1;
    margin-top: -20%;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    bottom: 0;
    position: absolute;
    height: 20%;
    background-image: linear-gradient(
      rgba($dark, 0),
      rgba($dark, 0.75),
      $dark
    );
  }
}
</style>

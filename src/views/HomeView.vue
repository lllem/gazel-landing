<template>
  <HeaderBlock/>
  <CalculatorBlock/>
  <BenefitsBlock/>
  <introBlock/>
  <WhenBlock/>
  <TransportBlock/>
  <TaraBlock/>
  <MapBlock/>
  <PriceBlock/>
  <PaymentBlock/>
  <FaqBlock/>
  <PhotosBlock/>
  <HowBlock/>
   <!-- TODO -->
<!--
  <div class="container max-w-screen-lg mx-auto px-3 bg-dark text-white">
    <section class="py-5 text-center">
      <subtitleEl>Отзывы</subtitleEl>
      <p class="mb-4">_______</p>
    </section>
  </div>
-->

  <ArticlesBlock/>

</template>

<script>
import CalculatorBlock from '@/components/calculator/CalculatorBlock.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import BenefitsBlock from '@/components/BenefitsBlock.vue'
import FaqBlock from '@/components/FaqBlock.vue'
import TaraBlock from '@/components/TaraBlock.vue'
import MapBlock from '@/components/MapBlock.vue'
import PriceBlock from '@/components/PriceBlock.vue'
import PaymentBlock from '@/components/PaymentBlock.vue'
import introBlock from '@/components/introBlock.vue'
import WhenBlock from '@/components/WhenBlock.vue'
import HowBlock from '@/components/HowBlock.vue'
import PhotosBlock from '@/components/PhotosBlock.vue'
import TransportBlock from '@/components/TransportBlock.vue'
import ArticlesBlock from '@/components/ArticlesBlock.vue'

export default {
  components: {
    CalculatorBlock,
    HeaderBlock,
    BenefitsBlock,
    FaqBlock,
    TaraBlock,
    MapBlock,
    PriceBlock,
    PaymentBlock,
    introBlock,
    WhenBlock,
    HowBlock,
    TransportBlock,
    PhotosBlock,
    ArticlesBlock,
  },
}
</script>

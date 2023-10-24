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
import HeaderBlock from '@/components/HeaderBlock.vue'
import ArticlesBlock from '@/components/ArticlesBlock.vue'
import CalculatorBlock from '@/components/calculator/CalculatorBlock.vue'
import BenefitsBlock from '@/components/MainBlocks/BenefitsBlock.vue'
import introBlock from '@/components/MainBlocks/introBlock.vue'
import WhenBlock from '@/components/MainBlocks/WhenBlock.vue'
import TransportBlock from '@/components/MainBlocks/TransportBlock.vue'
import TaraBlock from '@/components/MainBlocks/TaraBlock.vue'
import MapBlock from '@/components/MainBlocks/MapBlock.vue'
import PriceBlock from '@/components/MainBlocks/PriceBlock.vue'
import PaymentBlock from '@/components/MainBlocks/PaymentBlock.vue'
import FaqBlock from '@/components/MainBlocks/FaqBlock.vue'
import PhotosBlock from '@/components/MainBlocks/PhotosBlock.vue'
import HowBlock from '@/components/MainBlocks/HowBlock.vue'

export default {
  components: {
    HeaderBlock,
    ArticlesBlock,
    CalculatorBlock,
    BenefitsBlock,
    introBlock,
    WhenBlock,
    TransportBlock,
    TaraBlock,
    MapBlock,
    PriceBlock,
    PaymentBlock,
    FaqBlock,
    PhotosBlock,
    HowBlock,
  },
}
</script>

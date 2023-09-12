<template>
    <component
    :is="icon ? `${ icon }-icon` : 'banknotes-icon'"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    :stroke="solid ? 'none' : 'currentColor'"
    :fill="solid ? 'currentColor' : 'none'"
    class="icon-el"
    />
</template>

<script>
// https://heroicons.com/
import banknotesIcon from '@/components/icons/linear/banknotes-icon.vue'
import calculatorIcon from '@/components/icons/linear/calculator-icon.vue'
import chevronDownIcon from '@/components/icons/linear/chevron-down-icon.vue'
import clipboardDocumentCheckIcon from '@/components/icons/linear/clipboard-document-check-icon.vue'
import globeAltIcon from '@/components/icons/linear/globe-alt-icon.vue'
import truckIcon from '@/components/icons/linear/truck-icon.vue'
import userIcon from '@/components/icons/linear/user-icon.vue'
import usersIcon from '@/components/icons/linear/users-icon.vue'
import trophyIcon from '@/components/icons/linear/trophy-icon.vue'
import circleStackIcon from '@/components/icons/linear/circle-stack-icon.vue'
import sunIcon from '@/components/icons/linear/sun-icon.vue'
import boltIcon from '@/components/icons/linear/bolt-icon.vue'
import clockIcon from '@/components/icons/linear/clock-icon.vue'
import creditCardIcon from '@/components/icons/linear/credit-card-icon.vue'
import rectangleGroupIcon from '@/components/icons/linear/rectangle-group-icon.vue'
import sparklesIcon from '@/components/icons/linear/sparkles-icon.vue'
import archiveBoxArrowDownIcon from '@/components/icons/linear/archive-box-arrow-down-icon.vue'
import phoneIcon from '@/components/icons/linear/phone-icon.vue'
import qrCodeIcon from '@/components/icons/linear/qr-code-icon.vue'
import arrowsUpDownIcon from '@/components/icons/linear/arrows-up-down-icon.vue'
import buildingOfficeIcon from '@/components/icons/linear/building-office-icon.vue'
import cubeTransparentIcon from '@/components/icons/linear/cube-transparent-icon.vue'
import listBulletIcon from '@/components/icons/linear/list-bullet-icon.vue'
import mapIcon from '@/components/icons/linear/map-icon.vue'
import trashIcon from '@/components/icons/linear/trash-icon.vue'
import queueListIcon from '@/components/icons/linear/queue-list-icon.vue'
import barsIcon from '@/components/icons/linear/bars-icon.vue'
import envelopeIcon from '@/components/icons/linear/envelope-icon.vue'
import xMarkIcon from '@/components/icons/linear/x-mark-icon.vue'

export default {
  props: {
    icon: {
      type: String,
      default: 'icon',
    },
    solid: Boolean,
  },
  components: {
    banknotesIcon,
    calculatorIcon,
    chevronDownIcon,
    clipboardDocumentCheckIcon,
    globeAltIcon,
    truckIcon,
    userIcon,
    usersIcon,
    trophyIcon,
    circleStackIcon,
    sunIcon,
    boltIcon,
    clockIcon,
    creditCardIcon,
    rectangleGroupIcon,
    sparklesIcon,
    archiveBoxArrowDownIcon,
    phoneIcon,
    qrCodeIcon,
    arrowsUpDownIcon,
    buildingOfficeIcon,
    cubeTransparentIcon,
    listBulletIcon,
    mapIcon,
    trashIcon,
    queueListIcon,
    barsIcon,
    envelopeIcon,
    xMarkIcon,
  },
}
</script>

<style>
.icon-el {
  width: 1em;
  height: 1em;
  max-width: 100%;
  margin: inherit auto inherit;
  display: inline;
  transition: all 0.33s;
}
</style>

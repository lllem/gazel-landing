<template>
  <div class="map-tile lg:aspect-square flex flex-col justify-space-between align-self-end p-4 text-white bg-dark-2">

    <div class="map-tile__bg">
      <img src="@/assets/img/map/map-tile.svg" alt="Расстояние от МКАД"/>
    </div>

    <h3 class="calculator__subtitle tracking-widest text-start uppercase font-extrabold text-sm mb-5">Расстояние от МКАД</h3>

    <ul class="flex flex-col justify-center grow mb-5 md:ps-6 font-extrabold w-full">
      <li
      class="p-0 border-bottom"
      :class="{
        'text-lg' : distance === 0,
        'text-2xl' : distance > 0,
      }"
      v-for="distance in distances"
      :key="distance"
      >
        <label class="map-tile__control">
          <input
          type="radio"
          :value="distance"
          v-model="selectedDistance"
          name="length"
          > {{ distance === 0 ? `В пределах МКАД` : `до&nbsp;${distance}&nbsp;км` }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      distances: [
        0,
        15,
        30,
        50,
      ],
    };
  },
  computed: {
    selectedDistance: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    },
  },
  mounted() {
    if (this.selectedDistance === null) this.selectedDistance = 0;
  },
}
</script>

<style lang="scss">
.map-tile {
  * {
    position: relative;
  }

  .map-tile__bg {
    position: absolute;
    top: 10%;
    left: 30%;
    width: 100%;
    height: 100%;
    transform: scale(150%);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .map-tile__control {
    cursor: pointer;
  }
}
</style>

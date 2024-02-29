<template>
  <div class="calculator__movers md:aspect-video bg-dark-2 p-4">
    <div class="img-sider">
      <img src="@/assets/img/movers/movers_bg.webp" alt="" class="img-cover opacity-25 lg:opacity-100">
    </div>

    <h3 class="calculator__subtitle tracking-widest text-start uppercase font-extrabold text-sm mb-5">Грузчики</h3>

    <ul class="calculator__movers-buttons font-extrabold text-2xl mb-6">

      <li>
        <buttonEl
          el="label"
          md
          class="mb-1 items-start content-start text-start"
          :outline="!(moversQty === 0)"
        >
          <input
          type="radio"
          v-model="moversQty"
          :value="0"
          name="moversQty"
          >
          <span>Без грузчиков</span>
        </buttonEl>
      </li>

      <li>
        <buttonEl
          el="label"
          md
          class="mb-1 items-start content-start text-start"
          :outline="!(moversQty === 1)"
        >
          <input
          type="radio"
          v-model="moversQty"
          :value="1"
          name="moversQty"
          >
          <span>1</span>
          <iconEl icon="user"/>
        </buttonEl>
      </li>

      <li>
        <buttonEl
          el="label"
          md
          class="mb-1 items-start content-start text-start"
          :outline="!(moversQty === 2)"
        >
          <input
          type="radio"
          v-model="moversQty"
          :value="2"
          name="moversQty"
          >
          <span>2</span>
          <iconEl icon="users"/>
        </buttonEl>
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
  computed: {
    moversQty: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    },
  },
  mounted() {
    if (this.moversQty === null) this.moversQty = 1;
  },
}
</script>

<style lang="scss">
.calculator__movers {
  * {
    position: relative;
  }

  .calculator__movers-buttons {
    display: inline-flex;
    flex-flow: column nowrap;

    > li, label {
      width: 100%;
    }
  }
}

.img-sider {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  > img {
    object-position: 100% 0%;
  }
}
</style>

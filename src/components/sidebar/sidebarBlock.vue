<template>
  <iconEl
  @click="sidebarOpened = !sidebarOpened"
  icon="bars"
  class="sidebar__toggler text-4xl"
  />

  <teleport to="body" v-if="sidebarOpened">
    <div class="sidebar" @click="sidebarOpened = false">
      <div class="sidebar__backdrop"></div>
      <div class="sidebar__body text-white bg-dark shadow px-8 py-10">
        <div class="sidebar__nav">

          <a
          href="#"
          class="sidebar__item block py-3"
          v-for="nav_item in nav"
          :key="nav_item.title"
          >
            {{ nav_item.title }}
          </a>

        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpened: false,
      nav: [
        {
          title: 'Расчитать стоимость',
        },
        {
          title: 'Преимущества',
        },
        {
          title: 'Когда нужны наши услуги',
        },
        {
          title: 'Какой транспорт мы предлагаем',
        },
        {
          title: 'Тара',
        },
        {
          title: 'Куда мы можем приехать',
        },
        {
          title: 'Прайс',
        },
        {
          title: 'Оплата',
        },
        {
          title: 'Частые вопросы',
        },
        {
          title: 'Фото',
        },
        {
          title: 'Как заказать',
        },
        {
          title: 'Статьи',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens.scss';

.sidebar__toggler {
  cursor: pointer;
}

.sidebar {
  .sidebar__body {
    position: fixed;
    top: 0;
    z-index: 1001;
    right: 0;
    max-width: 100%;
    height: 100vh;
    width: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .sidebar__backdrop {
    background-color: rgba($color: #00023b, $alpha: 0.75);
    position: fixed;
    top: 0;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    cursor: pointer;
    transition: all 0.6s;
  }
}
</style>

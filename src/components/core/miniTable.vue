<template>
  <div
  class="mini-table w-full text-start text-white mx-auto"
  :style="`height: ${tabledata.lenghth * 2}rem`"
  >
    <div
    class="mini-table__tr"
    v-for="row in tabledata" :key="row.title"
    >
      <div
      class="mini-table__th py-1 text-start text-sm text-blue-300"
      v-html="row.title"
      ></div>
      <div class="mini-table__td py-1 ps-4 nowrap text-end" v-html="row.val"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabledata: Array,
  }
}
</script>

<style lang="scss">
.mini-table {
  .mini-table__tr {
    display: flex;
    flex-flow: row nowrap;
    white-space: nowrap;
    align-items: end;
    &, & * {
      height: 2rem;
    }
  }

  .mini-table__th {
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;

    &::after {
      content: '';
      display: inline-block;
      border-bottom: 1px solid #fff;
      opacity: 0.25;
      width: 100%;
      margin: 0 -0.5em 0 0.75em;
      transform: translateY(-0.6em);
    }
  }

  .mini-table__td {
    font-weight: bold;
  }
}
</style>

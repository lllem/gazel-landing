export const Furgons = {
  state: {
    furgons: [
      {
        title: 'Ford Transit',
        vol: 5,
        length: 2.5,
        height: 1.5,
        weight: 1,
        img: 'transit.webp',
        icon: 'ford-transit-icon.webp',
        desc: 'Описание',
        price: 4000,
      },
      {
        title: 'Соболь',
        vol: 7,
        length: 2.5,
        height: 1.8,
        weight: 1,
        img: 'sobol.webp',
        icon: 'sobol-icon.webp',
        desc: 'Описание',
        price: 4500,
      },
      {
        title: 'Газель',
        vol: 10,
        length: 3,
        height: 1.7,
        weight: 1.5,
        img: 'gazel.webp',
        icon: 'gazel-icon.webp',
        desc: 'Описание',
        price: 5500,
      },
      {
        title: 'Удлинённая Газель',
        vol: 12,
        length: 3.2,
        height: 2,
        weight: 1.5,
        img: 'gazel-long.webp',
        icon: 'gazel-long-icon.webp',
        desc: 'Описание',
        price: 6500,
      },
    ],
  },

  getters: {
    furgons: state => state.furgons,
  },
}

export default Furgons

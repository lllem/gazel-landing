import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contacts: {
      tel: '+79000000000',
      email: 'nnn@nn.ru',
      articles: [
        {
          id: '______',
          title: '______',
          description: '______',
          preview: '______',
        },
      ],
    },
    furgons: [
      {
        title: 'Ford Transit',
        vol: 5,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'transit.webp',
        icon: 'ford-transit-icon.webp',
        desc: 'Описание',
        price: 4000,
      },
      {
        title: 'Соболь',
        vol: 8,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'sobol.webp',
        icon: 'sobol-icon.webp',
        desc: 'Описание',
        price: 4000,
      },
      {
        title: 'Газель',
        vol: 10,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'gazel.webp',
        icon: 'gazel-icon.webp',
        desc: 'Описание',
        price: 4500,
      },
      {
        title: 'Удлинённая Газель',
        vol: 12,
        length: 2.5,
        height: 2.5,
        weight: 1,
        img: 'gazel-long.webp',
        icon: 'gazel-long-icon.webp',
        desc: 'Описание',
        price: 5000,
      },
    ],
    articles: [
      {
        img: 'House-Clearances-x1.webp',
        title: 'Вывоз старой мебели газелью',
        desc: 'Вывоз старой мебели газелью',
      },
      {
        img: '03-vyvoz-musora-v-spb.webp',
        title: 'Вывоз строительного мусора газелью',
        desc: 'Вывоз строительного мусора газелью',
      },
      {
        img: '5207287114656795_95d3.webp',
        title: 'Вывоз мусора из квартиры газель с грузчиками',
        desc: 'Вывоз мусора из квартиры газель с грузчиками',
      },
    ],
    cities: [
      {
        city: 'Москва',
        translit: "Moskva",
      },
      {
        city: 'Апрелевка',
        translit: "Aprelevka",
      },
      {
        city: 'Балашиха',
        translit: "Balashiha",
      },
      {
        city: 'Белоозёрский',
        translit: "Beloozyorskij",
      },
      {
        city: 'Бронницы',
        translit: "Bronnicy",
      },
      {
        city: 'Верея',
        translit: "Vereya",
      },
      {
        city: 'Видное',
        translit: "Vidnoe",
      },
      {
        city: 'Волоколамск',
        translit: "Volokolamsk",
      },
      {
        city: 'Воскресенск',
        translit: "Voskresensk",
      },
      {
        city: 'Высоковск',
        translit: "Vysokovsk",
      },
      {
        city: 'Голицыно',
        translit: "Golicyno",
      },
      {
        city: 'Дедовск',
        translit: "Dedovsk",
      },
      {
        city: 'Дзержинский',
        translit: "Dzerzhinskij",
      },
      {
        city: 'Дмитров',
        translit: "Dmitrov",
      },
      {
        city: 'Долгопрудный',
        translit: "Dolgoprudnyj",
      },
      {
        city: 'Домодедово',
        translit: "Domodedovo",
      },
      {
        city: 'Дрезна',
        translit: "Drezna",
      },
      {
        city: 'Дубна',
        translit: "Dubna",
      },
      {
        city: 'Егорьевск',
        translit: "Egor'evsk",
      },
      {
        city: 'Жуковский',
        translit: "ZHukovskij",
      },
      {
        city: 'Зарайск',
        translit: "Zarajsk",
      },
      {
        city: 'Звенигород',
        translit: "Zvenigorod",
      },
      {
        city: 'Ивантеевка',
        translit: "Ivanteevka",
      },
      {
        city: 'Истра',
        translit: "Istra",
      },
      {
        city: 'Кашира',
        translit: "Kashira",
      },
      {
        city: 'Клин',
        translit: "Klin",
      },
      {
        city: 'Коломна',
        translit: "Kolomna",
      },
      {
        city: 'Королёв',
        translit: "Korolyov",
      },
      {
        city: 'Котельники',
        translit: "Kotel'niki",
      },
      {
        city: 'Красноармейск',
        translit: "Krasnoarmejsk",
      },
      {
        city: 'Красногорск',
        translit: "Krasnogorsk",
      },
      {
        city: 'Краснозаводск',
        translit: "Krasnozavodsk",
      },
      {
        city: 'Краснознаменск',
        translit: "Krasnoznamensk",
      },
      {
        city: 'Кубинка',
        translit: "Kubinka",
      },
      {
        city: 'Куровское',
        translit: "Kurovskoe",
      },
      {
        city: 'Ликино-Дулёво',
        translit: "Likino-Dulyovo",
      },
      {
        city: 'Лобня',
        translit: "Lobnya",
      },
      {
        city: 'Лосино-Петровский',
        translit: "Losino-Petrovskij",
      },
      {
        city: 'Луховицы',
        translit: "Luhovicy",
      },
      {
        city: 'Лыткарино',
        translit: "Lytkarino",
      },
      {
        city: 'Люберцы',
        translit: "Lyubercy",
      },
      {
        city: 'Можайск',
        translit: "Mozhajsk",
      },
      {
        city: 'Мытищи',
        translit: "Mytishchi",
      },
      {
        city: 'Наро-Фоминск',
        translit: "Naro-Fominsk",
      },
      {
        city: 'Ногинск',
        translit: "Noginsk",
      },
      {
        city: 'Одинцово',
        translit: "Odincovo",
      },
      {
        city: 'Озёры',
        translit: "Ozyory",
      },
      {
        city: 'Орехово-Зуево',
        translit: "Orekhovo-Zuevo",
      },
      {
        city: 'Павловский Посад',
        translit: "Pavlovskij Posad",
      },
      {
        city: 'Пересвет',
        translit: "Peresvet",
      },
      {
        city: 'Подольск',
        translit: "Podol'sk",
      },
      {
        city: 'Протвино',
        translit: "Protvino",
      },
      {
        city: 'Пушкино',
        translit: "Pushkino",
      },
      {
        city: 'Пущино',
        translit: "Pushchino",
      },
      {
        city: 'Раменское',
        translit: "Ramenskoe",
      },
      {
        city: 'Реутов',
        translit: "Reutov",
      },
      {
        city: 'Рошаль',
        translit: "Roshal'",
      },
      {
        city: 'Руза',
        translit: "Ruza",
      },
      {
        city: 'Сергиев Посад',
        translit: "Sergiev Posad",
      },
      {
        city: 'Серпухов',
        translit: "Serpuhov",
      },
      {
        city: 'Солнечногорск',
        translit: "Solnechnogorsk",
      },
      {
        city: 'Старая Купавна',
        translit: "Staraya Kupavna",
      },
      {
        city: 'Ступино',
        translit: "Stupino",
      },
      {
        city: 'Талдом',
        translit: "Taldom",
      },
      {
        city: 'Фрязино',
        translit: "Fryazino",
      },
      {
        city: 'Химки',
        translit: "Himki",
      },
      {
        city: 'Хотьково',
        translit: "Hot'kovo",
      },
      {
        city: 'Черноголовка',
        translit: "CHernogolovka",
      },
      {
        city: 'Чехов',
        translit: "CHekhov",
      },
      {
        city: 'Шатура',
        translit: "SHatura",
      },
      {
        city: 'Щёлково',
        translit: "SHCHyolkovo",
      },
      {
        city: 'Электрогорск',
        translit: "Elektrogorsk",
      },
      {
        city: 'Электросталь',
        translit: "Elektrostal'",
      },
      {
        city: 'Электроугли',
        translit: "Elektrougli",
      },
      {
        city: 'Яхрома',
        translit: "YAhroma",
      },
    ],
  },
  getters: {
    furgons: state => state.furgons,
    contacts: state => state.contacts,
    articles: state => state.articles,
    cities: state => state.cities,
  },
  mutations: {
  },
  actions: {
    async loadCities() {
      let cities;

      await axios
        .get('./api/cities.json')
        .then(response => cities = response.data)
        .catch(error => console.log(error));

      console.log(cities)
    },
  },
  modules: {
  }
})

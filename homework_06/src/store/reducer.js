import { DELETE_COUNTRY_ACTION } from './constants.js';

const initArgs = {
  countries: [
    {
      id: '2',
      name: {
        official: 'Czech Republic',
        common: 'Czechia',
      },
      currencies: {
        uah: {
          name: 'hryvnia',
          symbol: '$',
        },
        CZK: {
          name: 'Czech koruna',
          symbol: 'Kč',
        },
      },
      capital: ['Prague'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        ukr: 'Ukrainian',
        ces: 'Czech',
        slk: 'Slovak',
      },
      flag: '🇨🇿',
      translations: {
        ara: {
          official: 'أوكرانيا',
          common: 'أوكرانيا',
        },
        bre: {
          official: 'Republik Tchek',
          common: 'Tchekia',
        },
        ces: {
          official: 'Česká republika',
          common: 'Česko',
        },
        cym: {
          official: 'Y Weriniaeth Tsiec',
          common: 'Y Weriniaeth Tsiec',
        },
      },
    },
    {
      id: '3',
      name: {
        official: 'Ukraine',
        common: 'Ukraine',
      },
      currencies: {
        uah: {
          name: 'hryvnia',
          symbol: '$',
        },
        UAH: {
          name: 'Ukrainian hryvnia',
          symbol: '₴',
        },
      },
      capital: ['Kyiv'],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        ukr: 'Ukrainian',
      },
      flag: '🇺🇦',
      translations: {
        ara: {
          official: 'أوكرانيا',
          common: 'أوكرانيا',
        },
        bre: {
          official: 'Ukraina',
          common: 'Ukraina',
        },
        ces: {
          official: 'Ukrajina',
          common: 'Ukrajina',
        },
        cym: {
          official: 'Ukraine',
          common: 'Ukraine',
        },
        deu: {
          official: 'Ukraine',
          common: 'Ukraine',
        },
      },
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DELETE_COUNTRY_ACTION:
      return {
        ...state,
        countries: state.countries.filter(
          (country) => country.id !== payload
        ),
      };
    default:
      return state;
  }
}

export { reducer, initArgs };
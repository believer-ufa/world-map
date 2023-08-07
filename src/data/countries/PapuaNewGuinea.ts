import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const PapuaNewGuinea: CountryData = {
  type: 'Feature',
  id: 'PNG',
  key: CountriesKeys.papuaNewGuinea,
  properties: { name: countriesNamesMessages.papuaNewGuinea },
  geometry: {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [155.880026, -6.819997],
          [155.599991, -6.919991],
          [155.166994, -6.535931],
          [154.729192, -5.900828],
          [154.514114, -5.139118],
          [154.652504, -5.042431],
          [154.759991, -5.339984],
          [155.062918, -5.566792],
          [155.547746, -6.200655],
          [156.019965, -6.540014],
          [155.880026, -6.819997],
        ],
      ],
      [
        [
          [151.982796, -5.478063],
          [151.459107, -5.56028],
          [151.30139, -5.840728],
          [150.754447, -6.083763],
          [150.241197, -6.317754],
          [149.709963, -6.316513],
          [148.890065, -6.02604],
          [148.318937, -5.747142],
          [148.401826, -5.437756],
          [149.298412, -5.583742],
          [149.845562, -5.505503],
          [149.99625, -5.026101],
          [150.139756, -5.001348],
          [150.236908, -5.53222],
          [150.807467, -5.455842],
          [151.089672, -5.113693],
          [151.647881, -4.757074],
          [151.537862, -4.167807],
          [152.136792, -4.14879],
          [152.338743, -4.312966],
          [152.318693, -4.867661],
          [151.982796, -5.478063],
        ],
      ],
      [
        [
          [147.191874, -7.388024],
          [148.084636, -8.044108],
          [148.734105, -9.104664],
          [149.306835, -9.071436],
          [149.266631, -9.514406],
          [150.038728, -9.684318],
          [149.738798, -9.872937],
          [150.801628, -10.293687],
          [150.690575, -10.582713],
          [150.028393, -10.652476],
          [149.78231, -10.393267],
          [148.923138, -10.280923],
          [147.913018, -10.130441],
          [147.135443, -9.492444],
          [146.567881, -8.942555],
          [146.048481, -8.067414],
          [144.744168, -7.630128],
          [143.897088, -7.91533],
          [143.286376, -8.245491],
          [143.413913, -8.983069],
          [142.628431, -9.326821],
          [142.068259, -9.159596],
          [141.033852, -9.117893],
          [141.017057, -5.859022],
          [141.00021, -2.600151],
          [142.735247, -3.289153],
          [144.583971, -3.861418],
          [145.27318, -4.373738],
          [145.829786, -4.876498],
          [145.981922, -5.465609],
          [147.648073, -6.083659],
          [147.891108, -6.614015],
          [146.970905, -6.721657],
          [147.191874, -7.388024],
        ],
      ],
      [
        [
          [153.140038, -4.499983],
          [152.827292, -4.766427],
          [152.638673, -4.176127],
          [152.406026, -3.789743],
          [151.953237, -3.462062],
          [151.384279, -3.035422],
          [150.66205, -2.741486],
          [150.939965, -2.500002],
          [151.479984, -2.779985],
          [151.820015, -2.999972],
          [152.239989, -3.240009],
          [152.640017, -3.659983],
          [153.019994, -3.980015],
          [153.140038, -4.499983],
        ],
      ],
    ] as LatLngExpression[][][],
  },
};

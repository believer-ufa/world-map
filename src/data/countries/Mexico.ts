import { LatLngExpression } from 'leaflet';
import { countriesNamesMessages } from '../messages';
import { CountriesKeys, CountryData } from '../types';

export const Mexico: CountryData = {
  type: 'Feature',
  id: 'MEX',
  key: CountriesKeys.mexico,
  properties: { name: countriesNamesMessages.mexico },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-97.140008, 25.869997],
        [-97.528072, 24.992144],
        [-97.702946, 24.272343],
        [-97.776042, 22.93258],
        [-97.872367, 22.444212],
        [-97.699044, 21.898689],
        [-97.38896, 21.411019],
        [-97.189333, 20.635433],
        [-96.525576, 19.890931],
        [-96.292127, 19.320371],
        [-95.900885, 18.828024],
        [-94.839063, 18.562717],
        [-94.42573, 18.144371],
        [-93.548651, 18.423837],
        [-92.786114, 18.524839],
        [-92.037348, 18.704569],
        [-91.407903, 18.876083],
        [-90.77187, 19.28412],
        [-90.53359, 19.867418],
        [-90.451476, 20.707522],
        [-90.278618, 20.999855],
        [-89.601321, 21.261726],
        [-88.543866, 21.493675],
        [-87.658417, 21.458846],
        [-87.05189, 21.543543],
        [-86.811982, 21.331515],
        [-86.845908, 20.849865],
        [-87.383291, 20.255405],
        [-87.621054, 19.646553],
        [-87.43675, 19.472403],
        [-87.58656, 19.04013],
        [-87.837191, 18.259816],
        [-88.090664, 18.516648],
        [-88.300031, 18.499982],
        [-88.490123, 18.486831],
        [-88.848344, 17.883198],
        [-89.029857, 18.001511],
        [-89.150909, 17.955468],
        [-89.14308, 17.808319],
        [-90.067934, 17.819326],
        [-91.00152, 17.817595],
        [-91.002269, 17.254658],
        [-91.453921, 17.252177],
        [-91.08167, 16.918477],
        [-90.711822, 16.687483],
        [-90.600847, 16.470778],
        [-90.438867, 16.41011],
        [-90.464473, 16.069562],
        [-91.74796, 16.066565],
        [-92.229249, 15.251447],
        [-92.087216, 15.064585],
        [-92.20323, 14.830103],
        [-92.22775, 14.538829],
        [-93.359464, 15.61543],
        [-93.875169, 15.940164],
        [-94.691656, 16.200975],
        [-95.250227, 16.128318],
        [-96.053382, 15.752088],
        [-96.557434, 15.653515],
        [-97.263592, 15.917065],
        [-98.01303, 16.107312],
        [-98.947676, 16.566043],
        [-99.697397, 16.706164],
        [-100.829499, 17.171071],
        [-101.666089, 17.649026],
        [-101.918528, 17.91609],
        [-102.478132, 17.975751],
        [-103.50099, 18.292295],
        [-103.917527, 18.748572],
        [-104.99201, 19.316134],
        [-105.493038, 19.946767],
        [-105.731396, 20.434102],
        [-105.397773, 20.531719],
        [-105.500661, 20.816895],
        [-105.270752, 21.076285],
        [-105.265817, 21.422104],
        [-105.603161, 21.871146],
        [-105.693414, 22.26908],
        [-106.028716, 22.773752],
        [-106.90998, 23.767774],
        [-107.915449, 24.548915],
        [-108.401905, 25.172314],
        [-109.260199, 25.580609],
        [-109.444089, 25.824884],
        [-109.291644, 26.442934],
        [-109.801458, 26.676176],
        [-110.391732, 27.162115],
        [-110.641019, 27.859876],
        [-111.178919, 27.941241],
        [-111.759607, 28.467953],
        [-112.228235, 28.954409],
        [-112.271824, 29.266844],
        [-112.809594, 30.021114],
        [-113.163811, 30.786881],
        [-113.148669, 31.170966],
        [-113.871881, 31.567608],
        [-114.205737, 31.524045],
        [-114.776451, 31.799532],
        [-114.9367, 31.393485],
        [-114.771232, 30.913617],
        [-114.673899, 30.162681],
        [-114.330974, 29.750432],
        [-113.588875, 29.061611],
        [-113.424053, 28.826174],
        [-113.271969, 28.754783],
        [-113.140039, 28.411289],
        [-112.962298, 28.42519],
        [-112.761587, 27.780217],
        [-112.457911, 27.525814],
        [-112.244952, 27.171727],
        [-111.616489, 26.662817],
        [-111.284675, 25.73259],
        [-110.987819, 25.294606],
        [-110.710007, 24.826004],
        [-110.655049, 24.298595],
        [-110.172856, 24.265548],
        [-109.771847, 23.811183],
        [-109.409104, 23.364672],
        [-109.433392, 23.185588],
        [-109.854219, 22.818272],
        [-110.031392, 22.823078],
        [-110.295071, 23.430973],
        [-110.949501, 24.000964],
        [-111.670568, 24.484423],
        [-112.182036, 24.738413],
        [-112.148989, 25.470125],
        [-112.300711, 26.012004],
        [-112.777297, 26.32196],
        [-113.464671, 26.768186],
        [-113.59673, 26.63946],
        [-113.848937, 26.900064],
        [-114.465747, 27.14209],
        [-115.055142, 27.722727],
        [-114.982253, 27.7982],
        [-114.570366, 27.741485],
        [-114.199329, 28.115003],
        [-114.162018, 28.566112],
        [-114.931842, 29.279479],
        [-115.518654, 29.556362],
        [-115.887365, 30.180794],
        [-116.25835, 30.836464],
        [-116.721526, 31.635744],
        [-117.12776, 32.53534],
        [-115.99135, 32.61239],
        [-114.72139, 32.72083],
        [-114.815, 32.52528],
        [-113.30498, 32.03914],
        [-111.02361, 31.33472],
        [-109.035, 31.34194],
        [-108.24194, 31.34222],
        [-108.24, 31.754854],
        [-106.50759, 31.75452],
        [-106.1429, 31.39995],
        [-105.63159, 31.08383],
        [-105.03737, 30.64402],
        [-104.70575, 30.12173],
        [-104.45697, 29.57196],
        [-103.94, 29.27],
        [-103.11, 28.97],
        [-102.48, 29.76],
        [-101.6624, 29.7793],
        [-100.9576, 29.38071],
        [-100.45584, 28.69612],
        [-100.11, 28.11],
        [-99.52, 27.54],
        [-99.3, 26.84],
        [-99.02, 26.37],
        [-98.24, 26.06],
        [-97.53, 25.84],
        [-97.140008, 25.869997],
      ],
    ] as LatLngExpression[][],
  },
};

import { MessageDescriptor } from 'react-intl';
import { LatLngExpression } from 'leaflet';

export enum CountriesKeys {
  afghanistan = 'afghanistan',
  angola = 'angola',
  albania = 'albania',
  unitedArabEmirates = 'unitedArabEmirates',
  argentina = 'argentina',
  armenia = 'armenia',
  antarctica = 'antarctica',
  frenchSouthernAndAntarcticLands = 'frenchSouthernAndAntarcticLands',
  australia = 'australia',
  austria = 'austria',
  azerbaijan = 'azerbaijan',
  burundi = 'burundi',
  belgium = 'belgium',
  benin = 'benin',
  burkinaFaso = 'burkinaFaso',
  bangladesh = 'bangladesh',
  bulgaria = 'bulgaria',
  theBahamas = 'theBahamas',
  bosniaAndHerzegovina = 'bosniaAndHerzegovina',
  belarus = 'belarus',
  belize = 'belize',
  bermuda = 'bermuda',
  bolivia = 'bolivia',
  brazil = 'brazil',
  brunei = 'brunei',
  bhutan = 'bhutan',
  botswana = 'botswana',
  centralAfricanRepublic = 'centralAfricanRepublic',
  canada = 'canada',
  switzerland = 'switzerland',
  chile = 'chile',
  china = 'china',
  ivoryCoast = 'ivoryCoast',
  cameroon = 'cameroon',
  democraticRepublicOfTheCongo = 'democraticRepublicOfTheCongo',
  republicOfTheCongo = 'republicOfTheCongo',
  colombia = 'colombia',
  costaRica = 'costaRica',
  cuba = 'cuba',
  northernCyprus = 'northernCyprus',
  cyprus = 'cyprus',
  czechRepublic = 'czechRepublic',
  germany = 'germany',
  djibouti = 'djibouti',
  denmark = 'denmark',
  dominicanRepublic = 'dominicanRepublic',
  algeria = 'algeria',
  ecuador = 'ecuador',
  egypt = 'egypt',
  eritrea = 'eritrea',
  spain = 'spain',
  estonia = 'estonia',
  ethiopia = 'ethiopia',
  finland = 'finland',
  fiji = 'fiji',
  falklandIslands = 'falklandIslands',
  france = 'france',
  gabon = 'gabon',
  unitedKingdom = 'unitedKingdom',
  georgia = 'georgia',
  ghana = 'ghana',
  guinea = 'guinea',
  gambia = 'gambia',
  guineaBissau = 'guineaBissau',
  equatorialGuinea = 'equatorialGuinea',
  greece = 'greece',
  greenland = 'greenland',
  guatemala = 'guatemala',
  frenchGuiana = 'frenchGuiana',
  guyana = 'guyana',
  honduras = 'honduras',
  croatia = 'croatia',
  haiti = 'haiti',
  hungary = 'hungary',
  indonesia = 'indonesia',
  india = 'india',
  ireland = 'ireland',
  iran = 'iran',
  iraq = 'iraq',
  iceland = 'iceland',
  israel = 'israel',
  italy = 'italy',
  jamaica = 'jamaica',
  jordan = 'jordan',
  japan = 'japan',
  kazakhstan = 'kazakhstan',
  kenya = 'kenya',
  kyrgyzstan = 'kyrgyzstan',
  cambodia = 'cambodia',
  southKorea = 'southKorea',
  kosovo = 'kosovo',
  kuwait = 'kuwait',
  laos = 'laos',
  lebanon = 'lebanon',
  liberia = 'liberia',
  libya = 'libya',
  sriLanka = 'sriLanka',
  lesotho = 'lesotho',
  lithuania = 'lithuania',
  luxembourg = 'luxembourg',
  latvia = 'latvia',
  morocco = 'morocco',
  moldova = 'moldova',
  madagascar = 'madagascar',
  mexico = 'mexico',
  macedonia = 'macedonia',
  mali = 'mali',
  malta = 'malta',
  myanmar = 'myanmar',
  montenegro = 'montenegro',
  mongolia = 'mongolia',
  mozambique = 'mozambique',
  mauritania = 'mauritania',
  malawi = 'malawi',
  malaysia = 'malaysia',
  namibia = 'namibia',
  newCaledonia = 'newCaledonia',
  niger = 'niger',
  nigeria = 'nigeria',
  nicaragua = 'nicaragua',
  netherlands = 'netherlands',
  norway = 'norway',
  nepal = 'nepal',
  newZealand = 'newZealand',
  oman = 'oman',
  pakistan = 'pakistan',
  panama = 'panama',
  peru = 'peru',
  philippines = 'philippines',
  papuaNewGuinea = 'papuaNewGuinea',
  poland = 'poland',
  puertoRico = 'puertoRico',
  northKorea = 'northKorea',
  portugal = 'portugal',
  paraguay = 'paraguay',
  qatar = 'qatar',
  romania = 'romania',
  russia = 'russia',
  rwanda = 'rwanda',
  westernSahara = 'westernSahara',
  saudiArabia = 'saudiArabia',
  sudan = 'sudan',
  southSudan = 'southSudan',
  senegal = 'senegal',
  solomonIslands = 'solomonIslands',
  sierraLeone = 'sierraLeone',
  elSalvador = 'elSalvador',
  somaliland = 'somaliland',
  somalia = 'somalia',
  republicOfSerbia = 'republicOfSerbia',
  suriname = 'suriname',
  slovakia = 'slovakia',
  slovenia = 'slovenia',
  sweden = 'sweden',
  swaziland = 'swaziland',
  syria = 'syria',
  chad = 'chad',
  togo = 'togo',
  thailand = 'thailand',
  tajikistan = 'tajikistan',
  turkmenistan = 'turkmenistan',
  eastTimor = 'eastTimor',
  trinidadAndTobago = 'trinidadAndTobago',
  tunisia = 'tunisia',
  turkey = 'turkey',
  taiwan = 'taiwan',
  unitedRepublicOfTanzania = 'unitedRepublicOfTanzania',
  uganda = 'uganda',
  ukraine = 'ukraine',
  uruguay = 'uruguay',
  unitedStatesOfAmerica = 'unitedStatesOfAmerica',
  uzbekistan = 'uzbekistan',
  venezuela = 'venezuela',
  vietnam = 'vietnam',
  vanuatu = 'vanuatu',
  westBank = 'westBank',
  yemen = 'yemen',
  southAfrica = 'southAfrica',
  zambia = 'zambia',
  zimbabwe = 'zimbabwe',
}

export interface CountryData {
  type: 'Feature';
  id: string;
  key: CountriesKeys;
  properties: {
    name: MessageDescriptor;
  }
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
  }
}

export interface AllCountries {
  type: 'FeatureCollection';
  features: CountryData[];
}

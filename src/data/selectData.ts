import { DefaultColumn } from 'react-ts-datatable/dist/types'
import { Employee, Option } from './types'

export const states: Option[] = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
]

export const departments = [
  'sales',
  'marketing',
  'engineering',
  'human resources',
  'legal',
]

export const employees: Employee[] = [
  {
    key: '0224353f-726b-497f-9e46-97dfd516d673',
    firstName: 'Bernie',
    lastName: 'Swindin',
    department: 'Services',
    dateOfBirth: '03/10/1988',
    startDate: '08/18/2018',
    street: '6 Schiller Drive',
    city: 'Memphis',
    state: 'TN',
    zipCode: '38143',
  },
  {
    key: 'e092e395-2637-4bbc-b7bd-a8668f53b288',
    firstName: 'Jo',
    lastName: 'Barnsley',
    department: 'Legal',
    dateOfBirth: '11/23/1982',
    startDate: '05/09/2020',
    street: '7 Warner Way',
    city: 'Fort Worth',
    state: 'TX',
    zipCode: '76147',
  },
  {
    key: 'fc932e1e-af07-464c-bf6b-97176524f9ce',
    firstName: 'Merlina',
    lastName: 'Woodfine',
    department: 'Accounting',
    dateOfBirth: '12/16/1966',
    startDate: '12/27/2015',
    street: '19102 Judy Crossing',
    city: 'Mobile',
    state: 'AL',
    zipCode: '36689',
  },
  {
    key: 'e78251a5-7cfb-4bec-972e-f7122f8f85ef',
    firstName: 'Drake',
    lastName: 'Danielot',
    department: 'Legal',
    dateOfBirth: '11/05/1997',
    startDate: '02/23/2019',
    street: '34 Dunning Street',
    city: 'Crawfordsville',
    state: 'IN',
    zipCode: '47937',
  },
  {
    key: '69ec0b45-0867-48f5-a9f3-9a319654928e',
    firstName: 'Tara',
    lastName: 'Redfearn',
    department: 'Support',
    dateOfBirth: '12/03/1992',
    startDate: '09/15/2015',
    street: '38 Lakewood Point',
    city: 'Buffalo',
    state: 'NY',
    zipCode: '14205',
  },
  {
    key: '07b430f2-d35c-4535-8a33-decf4a67b448',
    firstName: 'Kata',
    lastName: 'Beaumont',
    department: 'Sales',
    dateOfBirth: '10/30/1997',
    startDate: '08/18/2020',
    street: '67 Glendale Junction',
    city: 'Fort Worth',
    state: 'TX',
    zipCode: '76110',
  },
  {
    key: '18442766-d1af-40e6-a077-9363f60fb1cf',
    firstName: 'Celinda',
    lastName: 'Maxfield',
    department: 'Product Management',
    dateOfBirth: '01/13/1973',
    startDate: '12/16/2018',
    street: '19178 Onsgard Plaza',
    city: 'Santa Fe',
    state: 'NM',
    zipCode: '87505',
  },
  {
    key: 'e1cb9f9c-ada1-47ef-988c-61683be92456',
    firstName: 'Cecilia',
    lastName: 'Ronaghan',
    department: 'Research and Development',
    dateOfBirth: '08/21/1967',
    startDate: '07/22/2018',
    street: '043 Pierstorff Pass',
    city: 'Washington',
    state: 'DC',
    zipCode: '20022',
  },
  {
    key: 'fffc7e26-dc03-44c4-b9b1-968791055060',
    firstName: 'Alvina',
    lastName: 'Meagher',
    department: 'Product Management',
    dateOfBirth: '06/27/1969',
    startDate: '04/20/2015',
    street: '3266 Mallory Plaza',
    city: 'Pittsburgh',
    state: 'PA',
    zipCode: '15225',
  },
  {
    key: '2885560c-612b-4e46-9af9-49ce6d156781',
    firstName: 'Jock',
    lastName: 'Endrighi',
    department: 'Engineering',
    dateOfBirth: '03/03/1998',
    startDate: '04/12/2016',
    street: '7 Maple Parkway',
    city: 'Honolulu',
    state: 'HI',
    zipCode: '96825',
  },
  {
    key: 'a4dfdd6f-ace9-4635-9852-5457427abb17',
    firstName: 'Claudelle',
    lastName: 'Hannam',
    department: 'Training',
    dateOfBirth: '08/08/1983',
    startDate: '01/21/2017',
    street: '0 Oriole Center',
    city: 'New Haven',
    state: 'CT',
    zipCode: '06505',
  },
  {
    key: '7f9de29b-a341-4762-b79c-ce9d75a820c4',
    firstName: 'Darci',
    lastName: 'Hammerson',
    department: 'Product Management',
    dateOfBirth: '10/22/1998',
    startDate: '01/20/2020',
    street: '2 Sycamore Junction',
    city: 'Lexington',
    state: 'KY',
    zipCode: '40581',
  },
  {
    key: '58ce1d49-5a3a-43c0-a19d-e0e00c69d8b2',
    firstName: 'Antonietta',
    lastName: 'Andreasen',
    department: 'Human Resources',
    dateOfBirth: '07/06/1999',
    startDate: '07/27/2015',
    street: '5 Ruskin Pass',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40210',
  },
  {
    key: '2fd2aa66-fabc-4c6a-8375-749fc5a77ae4',
    firstName: 'Sloan',
    lastName: 'Cunney',
    department: 'Human Resources',
    dateOfBirth: '02/26/1973',
    startDate: '01/20/2017',
    street: '6076 Elgar Point',
    city: 'Gainesville',
    state: 'FL',
    zipCode: '32610',
  },
  {
    key: 'f08045b8-2b59-468b-b571-c8df0edb4ccd',
    firstName: 'Dominic',
    lastName: 'Gritten',
    department: 'Accounting',
    dateOfBirth: '08/20/1991',
    startDate: '02/13/2022',
    street: '14 Monterey Trail',
    city: 'Lake Charles',
    state: 'LA',
    zipCode: '70607',
  },
  {
    key: '7adbb517-465a-411e-9e41-af31ae7613b7',
    firstName: 'Eula',
    lastName: 'Fairleigh',
    department: 'Human Resources',
    dateOfBirth: '10/17/1971',
    startDate: '04/01/2015',
    street: '9709 Arizona Junction',
    city: 'Lees Summit',
    state: 'MO',
    zipCode: '64082',
  },
  {
    key: '3a5eeddd-62ce-46c7-bbd2-cd72b78a0b2e',
    firstName: 'Antons',
    lastName: 'Slimme',
    department: 'Accounting',
    dateOfBirth: '03/21/1963',
    startDate: '10/21/2021',
    street: '627 Rutledge Alley',
    city: 'Austin',
    state: 'TX',
    zipCode: '78749',
  },
  {
    key: '53916fb9-7e34-4549-b316-d37115986779',
    firstName: 'Cherise',
    lastName: 'Forri',
    department: 'Legal',
    dateOfBirth: '03/07/1969',
    startDate: '06/08/2018',
    street: '69951 Vahlen Trail',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11215',
  },
  {
    key: '352ea519-af39-4784-b2ff-155269d9eea2',
    firstName: 'Scarlet',
    lastName: 'Westrey',
    department: 'Services',
    dateOfBirth: '05/11/1989',
    startDate: '11/21/2019',
    street: '4 Sugar Street',
    city: 'San Jose',
    state: 'CA',
    zipCode: '95160',
  },
  {
    key: '01a9eca0-fb7b-4e50-aea0-a3dd84dbbd69',
    firstName: 'Nicky',
    lastName: 'Boyford',
    department: 'Accounting',
    dateOfBirth: '01/09/1992',
    startDate: '06/10/2015',
    street: '6968 Grayhawk Drive',
    city: 'New Orleans',
    state: 'LA',
    zipCode: '70116',
  },
  {
    key: '3c27575f-dc02-4099-add5-8013f5391b7f',
    firstName: 'Cookie',
    lastName: 'Renol',
    department: 'Sales',
    dateOfBirth: '02/28/1995',
    startDate: '04/29/2017',
    street: '1575 Hanover Street',
    city: 'Washington',
    state: 'DC',
    zipCode: '20436',
  },
  {
    key: '8d23db25-09e9-4fe6-89a2-e6f233fa3c54',
    firstName: 'Amalie',
    lastName: 'Verzey',
    department: 'Research and Development',
    dateOfBirth: '11/06/1987',
    startDate: '11/15/2019',
    street: '67188 Trailsway Way',
    city: 'Buffalo',
    state: 'NY',
    zipCode: '14220',
  },
  {
    key: '59347dc4-8a60-4663-b381-a5be4249fa3c',
    firstName: 'Sheree',
    lastName: 'Poutress',
    department: 'Services',
    dateOfBirth: '06/04/1984',
    startDate: '09/16/2021',
    street: '620 Heffernan Court',
    city: 'Dayton',
    state: 'OH',
    zipCode: '45440',
  },
  {
    key: '4d5d354d-f26c-4cc7-8967-e8dc1f94f73c',
    firstName: 'Riva',
    lastName: 'McKearnen',
    department: 'Services',
    dateOfBirth: '08/20/1962',
    startDate: '04/25/2017',
    street: '7392 Orin Circle',
    city: 'Milwaukee',
    state: 'WI',
    zipCode: '53234',
  },
  {
    key: '0b5e70df-60b2-4162-9e4a-574c85de1669',
    firstName: 'Gina',
    lastName: 'Whitticks',
    department: 'Research and Development',
    dateOfBirth: '09/23/1999',
    startDate: '07/27/2016',
    street: '65 Pawling Alley',
    city: 'Miami',
    state: 'FL',
    zipCode: '33164',
  },
  {
    key: 'b198bec2-dc78-4c3e-a363-5ae67db98a33',
    firstName: 'Ira',
    lastName: 'McDavitt',
    department: 'Accounting',
    dateOfBirth: '10/26/1965',
    startDate: '10/02/2018',
    street: '10 School Center',
    city: 'Milwaukee',
    state: 'WI',
    zipCode: '53263',
  },
  {
    key: '5651c8a2-a2d9-4993-a66f-34916309a195',
    firstName: 'Terrye',
    lastName: 'Dufall',
    department: 'Human Resources',
    dateOfBirth: '07/19/1976',
    startDate: '12/31/2019',
    street: '642 Merchant Crossing',
    city: 'College Station',
    state: 'TX',
    zipCode: '77844',
  },
  {
    key: '4e58d308-c4a8-4a79-b48a-780100f785ff',
    firstName: 'Barnabe',
    lastName: 'Hesbrook',
    department: 'Support',
    dateOfBirth: '07/08/1978',
    startDate: '06/28/2017',
    street: '481 Laurel Terrace',
    city: 'Pittsburgh',
    state: 'PA',
    zipCode: '15205',
  },
  {
    key: '48c3d61b-ae21-42fb-b958-823bdc2fff28',
    firstName: 'Mira',
    lastName: 'Bleasby',
    department: 'Services',
    dateOfBirth: '06/11/1965',
    startDate: '01/01/2017',
    street: '17 Monica Place',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11231',
  },
  {
    key: '04eb6c83-5138-4454-b563-463934f22036',
    firstName: 'Manda',
    lastName: 'Roony',
    department: 'Support',
    dateOfBirth: '07/21/1974',
    startDate: '04/08/2019',
    street: '673 Garrison Point',
    city: 'New Brunswick',
    state: 'NJ',
    zipCode: '08922',
  },
  {
    key: '15f4a1d7-dd64-4e88-bc82-0a50e991240a',
    firstName: 'Lorna',
    lastName: 'McCuthais',
    department: 'Services',
    dateOfBirth: '12/29/1973',
    startDate: '04/10/2018',
    street: '7593 Steensland Park',
    city: 'Grand Rapids',
    state: 'MI',
    zipCode: '49544',
  },
  {
    key: '669bc8de-2e10-4bb5-8aa4-112f20f72869',
    firstName: 'Hamilton',
    lastName: 'Tomasini',
    department: 'Research and Development',
    dateOfBirth: '09/09/1967',
    startDate: '08/02/2017',
    street: '65 Onsgard Pass',
    city: 'Miami',
    state: 'FL',
    zipCode: '33129',
  },
  {
    key: 'cb76f5fd-6708-4b80-a052-466ccf0276cb',
    firstName: 'Kylila',
    lastName: 'Cressar',
    department: 'Accounting',
    dateOfBirth: '02/27/1966',
    startDate: '11/06/2015',
    street: '8897 Clyde Gallagher Street',
    city: 'Columbia',
    state: 'SC',
    zipCode: '29225',
  },
  {
    key: 'dc4d0a9e-aa7e-46e3-ac07-90ae02a65bd2',
    firstName: 'Claudetta',
    lastName: 'Girkins',
    department: 'Research and Development',
    dateOfBirth: '11/17/1965',
    startDate: '03/05/2018',
    street: '4729 Buena Vista Street',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '31106',
  },
  {
    key: '96f62222-a983-48c4-bfc1-0578fdf4d2aa',
    firstName: 'Ulrica',
    lastName: 'Kobierski',
    department: 'Accounting',
    dateOfBirth: '03/30/1981',
    startDate: '05/12/2018',
    street: '4930 Arrowood Crossing',
    city: 'Des Moines',
    state: 'IA',
    zipCode: '50981',
  },
  {
    key: 'f568f436-e3e0-40e7-9a4a-179d03344000',
    firstName: 'Lew',
    lastName: 'Flay',
    department: 'Legal',
    dateOfBirth: '12/03/1990',
    startDate: '08/31/2019',
    street: '10325 Sutteridge Junction',
    city: 'Salt Lake City',
    state: 'UT',
    zipCode: '84120',
  },
  {
    key: '7d7f8a4c-1a8d-46c5-b2a7-d354e59afa88',
    firstName: 'Torrance',
    lastName: 'Harries',
    department: 'Product Management',
    dateOfBirth: '07/15/1991',
    startDate: '09/13/2019',
    street: '78760 Ruskin Pass',
    city: 'Anchorage',
    state: 'AK',
    zipCode: '99512',
  },
  {
    key: '56bbd4c0-21e7-4d31-ac88-41c93f313ea2',
    firstName: 'Selena',
    lastName: 'Reyes',
    department: 'Product Management',
    dateOfBirth: '05/27/1970',
    startDate: '10/17/2015',
    street: '3 North Crossing',
    city: 'Bakersfield',
    state: 'CA',
    zipCode: '93381',
  },
  {
    key: '6198231a-2126-456a-bbbc-3636eba17d43',
    firstName: 'Jeffry',
    lastName: 'Anten',
    department: 'Human Resources',
    dateOfBirth: '09/05/1977',
    startDate: '10/22/2019',
    street: '07299 Northridge Terrace',
    city: 'Wilmington',
    state: 'DE',
    zipCode: '19805',
  },
  {
    key: '04b05898-4922-45ef-8cef-53b3d06ff623',
    firstName: 'Marsh',
    lastName: 'Rainon',
    department: 'Accounting',
    dateOfBirth: '05/20/1973',
    startDate: '08/22/2019',
    street: '5195 Sutherland Circle',
    city: 'Cincinnati',
    state: 'OH',
    zipCode: '45218',
  },
  {
    key: 'c1e2cbe4-2709-4915-8e9a-c4067de3f100',
    firstName: 'Chaim',
    lastName: 'Calbert',
    department: 'Marketing',
    dateOfBirth: '01/09/1973',
    startDate: '04/22/2016',
    street: '0 Johnson Crossing',
    city: 'Jefferson City',
    state: 'MO',
    zipCode: '65110',
  },
  {
    key: 'ed515f77-61df-47ed-9876-fb07bcf92077',
    firstName: 'Bartholemy',
    lastName: 'Duprey',
    department: 'Legal',
    dateOfBirth: '01/02/1963',
    startDate: '11/22/2020',
    street: '50989 Hauk Lane',
    city: 'Pittsburgh',
    state: 'PA',
    zipCode: '15250',
  },
  {
    key: '7c457948-6d1b-48d9-b799-2d0f46c70071',
    firstName: 'Britni',
    lastName: 'Lahiff',
    department: 'Accounting',
    dateOfBirth: '08/10/1998',
    startDate: '05/26/2020',
    street: '56681 Cherokee Place',
    city: 'Shreveport',
    state: 'LA',
    zipCode: '71130',
  },
  {
    key: '94705241-6657-4398-9793-6a01196f39ca',
    firstName: 'Vaclav',
    lastName: 'Bourgaize',
    department: 'Marketing',
    dateOfBirth: '08/14/1967',
    startDate: '01/10/2017',
    street: '904 Reinke Point',
    city: 'Syracuse',
    state: 'NY',
    zipCode: '13205',
  },
  {
    key: 'a1f7f3f6-fe58-4c72-a1d3-ba7db7e0a467',
    firstName: 'Libbie',
    lastName: 'Rebillard',
    department: 'Accounting',
    dateOfBirth: '08/13/1997',
    startDate: '10/06/2017',
    street: '9 Dunning Court',
    city: 'Huntington',
    state: 'WV',
    zipCode: '25705',
  },
  {
    key: 'a9481abf-8517-4409-9f31-a178eef1654d',
    firstName: 'Charmane',
    lastName: 'Pirdy',
    department: 'Sales',
    dateOfBirth: '08/06/1962',
    startDate: '02/03/2022',
    street: '621 Brentwood Hill',
    city: 'New York City',
    state: 'NY',
    zipCode: '10014',
  },
  {
    key: '8d082beb-cb1d-410c-9aa2-08715ba37b90',
    firstName: 'Euell',
    lastName: 'Aldine',
    department: 'Accounting',
    dateOfBirth: '03/02/1982',
    startDate: '08/10/2017',
    street: '5 Dakota Pass',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92196',
  },
  {
    key: '4be422bb-0b4a-436a-8169-33155a1bfa13',
    firstName: 'Lorie',
    lastName: 'Trump',
    department: 'Marketing',
    dateOfBirth: '04/24/1990',
    startDate: '10/19/2019',
    street: '9249 Riverside Center',
    city: 'Riverside',
    state: 'CA',
    zipCode: '92519',
  },
  {
    key: '5d528d7b-2a3c-4390-b212-721b5b192905',
    firstName: 'Windham',
    lastName: 'De Vuyst',
    department: 'Support',
    dateOfBirth: '04/29/1967',
    startDate: '08/31/2018',
    street: '901 Larry Lane',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11254',
  },
  {
    key: '4cdcf346-0468-43d0-98bb-014fc6ca637c',
    firstName: 'Charissa',
    lastName: 'Goldhawk',
    department: 'Sales',
    dateOfBirth: '05/23/1997',
    startDate: '03/09/2022',
    street: '951 Grover Crossing',
    city: 'Pittsburgh',
    state: 'PA',
    zipCode: '15286',
  },
  {
    key: 'eeddda64-2ffa-4b19-b46f-b510e3360ebe',
    firstName: 'Hinze',
    lastName: 'Paley',
    department: 'Marketing',
    dateOfBirth: '02/06/1982',
    startDate: '01/13/2016',
    street: '866 7th Hill',
    city: 'Portland',
    state: 'OR',
    zipCode: '97216',
  },
  {
    key: '764073c4-5afd-4ded-b682-68f82e7494f5',
    firstName: 'Cori',
    lastName: 'Roddell',
    department: 'Sales',
    dateOfBirth: '01/08/1986',
    startDate: '12/21/2021',
    street: '27 Warrior Park',
    city: 'Canton',
    state: 'OH',
    zipCode: '44710',
  },
  {
    key: '5b01f286-6151-47d1-bad9-9246d5a6cb92',
    firstName: 'Alverta',
    lastName: 'Boerderman',
    department: 'Research and Development',
    dateOfBirth: '05/04/1961',
    startDate: '07/20/2018',
    street: '61 Chive Crossing',
    city: 'Savannah',
    state: 'GA',
    zipCode: '31405',
  },
  {
    key: '5526e5ea-2b34-4802-a739-54ded4ef58d8',
    firstName: 'Sarette',
    lastName: 'Peatman',
    department: 'Sales',
    dateOfBirth: '11/25/1985',
    startDate: '06/18/2020',
    street: '7 Mandrake Place',
    city: 'Lansing',
    state: 'MI',
    zipCode: '48901',
  },
  {
    key: '630df5d2-6a50-47c3-8fba-1dbe84711eff',
    firstName: 'Hillary',
    lastName: 'Mapother',
    department: 'Marketing',
    dateOfBirth: '09/21/1994',
    startDate: '01/29/2018',
    street: '03171 Clyde Gallagher Court',
    city: 'Buffalo',
    state: 'NY',
    zipCode: '14276',
  },
  {
    key: 'ded54f7c-79d1-4d99-997e-abee52f25339',
    firstName: 'Nina',
    lastName: 'Espinheira',
    department: 'Accounting',
    dateOfBirth: '05/11/1974',
    startDate: '05/21/2018',
    street: '61349 Londonderry Terrace',
    city: 'Lubbock',
    state: 'TX',
    zipCode: '79452',
  },
  {
    key: '254205d0-d7fc-4f11-aef1-f731b6ff16e7',
    firstName: 'Gwenneth',
    lastName: 'Laminman',
    department: 'Support',
    dateOfBirth: '03/06/1987',
    startDate: '02/16/2018',
    street: '52 Claremont Avenue',
    city: 'Punta Gorda',
    state: 'FL',
    zipCode: '33982',
  },
  {
    key: '6b9b227e-ec08-4dce-84ab-ffe3c1001532',
    firstName: 'Zaria',
    lastName: 'Dovinson',
    department: 'Product Management',
    dateOfBirth: '03/14/1967',
    startDate: '01/27/2016',
    street: '02704 Randy Alley',
    city: 'Richmond',
    state: 'VA',
    zipCode: '23203',
  },
  {
    key: '2700ab54-fe9f-4931-af04-c2561c748d40',
    firstName: 'Vergil',
    lastName: 'Reith',
    department: 'Engineering',
    dateOfBirth: '02/16/1995',
    startDate: '08/11/2018',
    street: '997 Erie Terrace',
    city: 'Olympia',
    state: 'WA',
    zipCode: '98516',
  },
  {
    key: '9f180ffe-50bd-4214-bdd7-9f3002ef4431',
    firstName: 'Wesley',
    lastName: 'Tyler',
    department: 'Support',
    dateOfBirth: '08/17/1968',
    startDate: '10/01/2018',
    street: '20 Arapahoe Place',
    city: 'Whittier',
    state: 'CA',
    zipCode: '90610',
  },
  {
    key: 'b72b5fee-f3a4-4c51-9682-0d9b01ca8b81',
    firstName: 'Sophronia',
    lastName: 'Henner',
    department: 'Research and Development',
    dateOfBirth: '07/13/1996',
    startDate: '08/30/2021',
    street: '612 Myrtle Park',
    city: 'Denver',
    state: 'CO',
    zipCode: '80299',
  },
  {
    key: '99b0f159-1f73-4244-8d2b-760d4e33284b',
    firstName: 'Tannie',
    lastName: 'Weddup',
    department: 'Human Resources',
    dateOfBirth: '09/27/1979',
    startDate: '11/07/2015',
    street: '230 Fuller Center',
    city: 'Saint Louis',
    state: 'MO',
    zipCode: '63104',
  },
  {
    key: '8e16ab4e-5c08-4b63-9495-77c7d0bc4783',
    firstName: 'Bruis',
    lastName: 'Wildt',
    department: 'Training',
    dateOfBirth: '10/09/1979',
    startDate: '06/19/2020',
    street: '5433 Maple Parkway',
    city: 'Buffalo',
    state: 'NY',
    zipCode: '14233',
  },
  {
    key: 'f0c2d97d-5081-4f53-a568-1b8cd917acc9',
    firstName: 'Alfonso',
    lastName: 'Farnell',
    department: 'Business Development',
    dateOfBirth: '08/08/1986',
    startDate: '11/03/2015',
    street: '0652 Hansons Court',
    city: 'Springfield',
    state: 'MA',
    zipCode: '01105',
  },
  {
    key: '0fe06020-cc8a-4656-8350-a6b5cc12f234',
    firstName: 'Bary',
    lastName: 'Hek',
    department: 'Research and Development',
    dateOfBirth: '10/21/1987',
    startDate: '12/21/2015',
    street: '1 Spaight Terrace',
    city: 'Waco',
    state: 'TX',
    zipCode: '76796',
  },
  {
    key: '1f20b0d0-7987-4dd2-9a84-69634cb406c7',
    firstName: 'Gardiner',
    lastName: 'Chawner',
    department: 'Legal',
    dateOfBirth: '11/07/1987',
    startDate: '09/21/2016',
    street: '82 Truax Circle',
    city: 'Bridgeport',
    state: 'CT',
    zipCode: '06673',
  },
  {
    key: '732f8290-dff1-4d9c-8743-35db308551e7',
    firstName: 'Giorgi',
    lastName: 'Bouts',
    department: 'Human Resources',
    dateOfBirth: '09/01/1966',
    startDate: '11/07/2017',
    street: '30680 Scoville Road',
    city: 'Zephyrhills',
    state: 'FL',
    zipCode: '33543',
  },
  {
    key: '8ced6e58-20c7-45d0-91de-0855261a9825',
    firstName: 'Barret',
    lastName: 'Brownsword',
    department: 'Legal',
    dateOfBirth: '05/14/1991',
    startDate: '09/19/2017',
    street: '2659 7th Avenue',
    city: 'Burbank',
    state: 'CA',
    zipCode: '91505',
  },
  {
    key: '82078fb5-96dd-4dfa-8c22-78d36cc9d9a4',
    firstName: 'Everett',
    lastName: 'Knowler',
    department: 'Training',
    dateOfBirth: '08/04/1982',
    startDate: '02/22/2020',
    street: '101 Pine View Pass',
    city: 'Sioux Falls',
    state: 'SD',
    zipCode: '57110',
  },
  {
    key: '50b64555-5c1c-4e3e-97ae-20bf85f9edc9',
    firstName: 'Rachel',
    lastName: 'Ornils',
    department: 'Engineering',
    dateOfBirth: '06/29/1972',
    startDate: '07/21/2017',
    street: '602 Manitowish Way',
    city: 'Saint Cloud',
    state: 'MN',
    zipCode: '56398',
  },
  {
    key: 'c99164a5-2c11-4d63-9b5c-a38e54b15fb7',
    firstName: 'Lon',
    lastName: 'Pimblotte',
    department: 'Legal',
    dateOfBirth: '02/04/1962',
    startDate: '04/16/2017',
    street: '86384 Cottonwood Junction',
    city: 'Suffolk',
    state: 'VA',
    zipCode: '23436',
  },
  {
    key: '0510e40a-296c-4231-a5e3-530be0b6e446',
    firstName: 'Alister',
    lastName: 'Ortzen',
    department: 'Research and Development',
    dateOfBirth: '06/11/1992',
    startDate: '05/26/2017',
    street: '29003 Wayridge Road',
    city: 'Garden Grove',
    state: 'CA',
    zipCode: '92844',
  },
  {
    key: 'b5ccf3b1-f546-45a4-8dcd-c0e1612e184b',
    firstName: 'Carlene',
    lastName: "O'Lyhane",
    department: 'Sales',
    dateOfBirth: '08/14/1991',
    startDate: '11/17/2018',
    street: '59 Paget Point',
    city: 'Jackson',
    state: 'MS',
    zipCode: '39210',
  },
  {
    key: 'ad98f69f-3927-4648-9e96-c9db55f10078',
    firstName: 'Wilbert',
    lastName: 'Newman',
    department: 'Training',
    dateOfBirth: '02/04/1992',
    startDate: '05/22/2020',
    street: '74 Northview Pass',
    city: 'Pittsburgh',
    state: 'PA',
    zipCode: '15286',
  },
  {
    key: 'f3769b65-1eda-4537-ac20-821f8533a319',
    firstName: 'Licha',
    lastName: 'Woolvett',
    department: 'Product Management',
    dateOfBirth: '02/08/1981',
    startDate: '11/22/2018',
    street: '05 Dixon Center',
    city: 'Norman',
    state: 'OK',
    zipCode: '73071',
  },
  {
    key: '904b1c5b-5adb-4a99-8c66-cf9e21d122ea',
    firstName: 'Rycca',
    lastName: 'Bareford',
    department: 'Research and Development',
    dateOfBirth: '11/22/1990',
    startDate: '07/21/2020',
    street: '34 Hazelcrest Way',
    city: 'Las Vegas',
    state: 'NV',
    zipCode: '89140',
  },
  {
    key: 'abcbf7c4-da4f-4296-a069-8c7b1d3e648f',
    firstName: 'Maitilde',
    lastName: 'Houndesome',
    department: 'Engineering',
    dateOfBirth: '03/18/1995',
    startDate: '07/16/2018',
    street: '6 Haas Circle',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98158',
  },
  {
    key: '9e217f39-3755-4787-8a0b-e943f537cdfd',
    firstName: 'Laurena',
    lastName: 'Girsch',
    department: 'Training',
    dateOfBirth: '11/03/1979',
    startDate: '06/07/2015',
    street: '79648 Northview Court',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40220',
  },
  {
    key: 'eb89c0c2-34dd-4ed8-bb35-6b9ed5aba610',
    firstName: 'Rollo',
    lastName: 'Danielkiewicz',
    department: 'Marketing',
    dateOfBirth: '02/13/1981',
    startDate: '05/06/2015',
    street: '306 Steensland Lane',
    city: 'Decatur',
    state: 'GA',
    zipCode: '30089',
  },
  {
    key: 'a40406d0-34f3-4ac2-94b3-a9891a77d59f',
    firstName: 'Aidan',
    lastName: 'Yosifov',
    department: 'Product Management',
    dateOfBirth: '07/20/1977',
    startDate: '03/18/2015',
    street: '6 Schiller Street',
    city: 'El Paso',
    state: 'TX',
    zipCode: '79928',
  },
  {
    key: '3f1e1324-8aad-4de1-966a-26a80f872e49',
    firstName: 'Esmaria',
    lastName: 'Brimley',
    department: 'Services',
    dateOfBirth: '07/07/1968',
    startDate: '12/23/2021',
    street: '683 Lake View Way',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60630',
  },
  {
    key: 'aa9e6dec-d248-4994-aac9-aa8b9a6ba0c0',
    firstName: 'Sidoney',
    lastName: 'Harpur',
    department: 'Legal',
    dateOfBirth: '10/28/1986',
    startDate: '11/21/2015',
    street: '0481 Clyde Gallagher Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78726',
  },
  {
    key: 'ffb4f628-ea04-450f-88a5-72c4dbe56c54',
    firstName: 'Rab',
    lastName: 'Cowdray',
    department: 'Services',
    dateOfBirth: '05/31/1980',
    startDate: '12/08/2018',
    street: '75 Melody Circle',
    city: 'Washington',
    state: 'DC',
    zipCode: '20244',
  },
  {
    key: '85368798-c509-4cc5-bdf7-e905e3b512ed',
    firstName: 'Hamel',
    lastName: 'Sannes',
    department: 'Product Management',
    dateOfBirth: '04/21/1989',
    startDate: '05/31/2018',
    street: '90 Carberry Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11241',
  },
  {
    key: 'aedb958e-e1b6-4fa1-9975-59740c3bef3e',
    firstName: 'Lucie',
    lastName: 'Pere',
    department: 'Product Management',
    dateOfBirth: '06/02/1980',
    startDate: '09/23/2016',
    street: '15164 3rd Alley',
    city: 'Syracuse',
    state: 'NY',
    zipCode: '13205',
  },
  {
    key: '9b1b34ef-508d-491f-9ede-e9de2115653b',
    firstName: 'Pattie',
    lastName: 'Rowlands',
    department: 'Legal',
    dateOfBirth: '05/03/1962',
    startDate: '09/29/2018',
    street: '0929 Warner Circle',
    city: 'Alhambra',
    state: 'CA',
    zipCode: '91841',
  },
  {
    key: '7e9a0457-bda6-4df0-ad18-e63c9ee61757',
    firstName: 'Bar',
    lastName: 'Conley',
    department: 'Sales',
    dateOfBirth: '01/05/1993',
    startDate: '04/19/2021',
    street: '37709 Melody Lane',
    city: 'Glendale',
    state: 'AZ',
    zipCode: '85305',
  },
  {
    key: '9f4fcc38-9102-46a0-b849-6f11a97580aa',
    firstName: 'Tammie',
    lastName: 'Dybell',
    department: 'Legal',
    dateOfBirth: '04/24/1973',
    startDate: '03/28/2018',
    street: '3259 Bay Hill',
    city: 'Cleveland',
    state: 'OH',
    zipCode: '44191',
  },
  {
    key: 'ba443158-3e84-47df-86a0-448ee0b4ec1a',
    firstName: 'Jarret',
    lastName: 'Renac',
    department: 'Services',
    dateOfBirth: '08/10/1994',
    startDate: '12/12/2019',
    street: '1 Northview Circle',
    city: 'El Paso',
    state: 'TX',
    zipCode: '88514',
  },
  {
    key: 'c15b7ec0-bf31-416b-a5f4-1486c9cb359b',
    firstName: 'Yankee',
    lastName: 'Hutsby',
    department: 'Engineering',
    dateOfBirth: '05/13/1965',
    startDate: '10/03/2016',
    street: '214 Merchant Street',
    city: 'Chula Vista',
    state: 'CA',
    zipCode: '91913',
  },
  {
    key: '84ee1add-50d8-4879-a7dd-d210cd26022b',
    firstName: 'Rollie',
    lastName: 'Gerdes',
    department: 'Support',
    dateOfBirth: '04/24/1984',
    startDate: '07/30/2020',
    street: '5 Blackbird Circle',
    city: 'Salt Lake City',
    state: 'UT',
    zipCode: '84110',
  },
  {
    key: '399b5f6e-44a3-421e-a6af-1cebdfa7627e',
    firstName: 'Clay',
    lastName: 'Huburn',
    department: 'Product Management',
    dateOfBirth: '06/02/1999',
    startDate: '03/16/2020',
    street: '1474 Summerview Drive',
    city: 'Whittier',
    state: 'CA',
    zipCode: '90610',
  },
  {
    key: '667eac51-0131-4bf7-a25b-2c54b88ae564',
    firstName: 'Malory',
    lastName: 'Gooders',
    department: 'Product Management',
    dateOfBirth: '11/27/1996',
    startDate: '02/23/2019',
    street: '79 Mccormick Street',
    city: 'Billings',
    state: 'MT',
    zipCode: '59105',
  },
  {
    key: '227dc573-3a68-4596-b4c1-9881b1f84e5a',
    firstName: 'Petunia',
    lastName: 'Crighton',
    department: 'Research and Development',
    dateOfBirth: '02/10/1970',
    startDate: '12/05/2020',
    street: '6 Crowley Trail',
    city: 'Saint Louis',
    state: 'MO',
    zipCode: '63116',
  },
  {
    key: '18639125-88fc-4525-8d45-48efe90e248e',
    firstName: 'Lin',
    lastName: 'Siehard',
    department: 'Engineering',
    dateOfBirth: '06/25/1962',
    startDate: '05/04/2018',
    street: '4526 Clemons Place',
    city: 'Richmond',
    state: 'CA',
    zipCode: '94807',
  },
  {
    key: 'e4f04af8-92f4-499b-bf81-a059c542a1ee',
    firstName: 'Meriel',
    lastName: 'Faustin',
    department: 'Accounting',
    dateOfBirth: '05/01/1996',
    startDate: '04/28/2015',
    street: '282 Dunning Junction',
    city: 'Merrifield',
    state: 'VA',
    zipCode: '22119',
  },
  {
    key: '0fc3f55d-e52d-4f65-a8ee-82c78f08e968',
    firstName: 'Serene',
    lastName: 'Huckin',
    department: 'Marketing',
    dateOfBirth: '03/03/1966',
    startDate: '06/27/2017',
    street: '2110 Dixon Lane',
    city: 'Wilmington',
    state: 'DE',
    zipCode: '19805',
  },
  {
    key: '3be91876-97cf-42fd-907d-5821c8d6b573',
    firstName: 'Micaela',
    lastName: 'Quoit',
    department: 'Sales',
    dateOfBirth: '11/14/1961',
    startDate: '09/17/2015',
    street: '5 Becker Court',
    city: 'Albany',
    state: 'NY',
    zipCode: '12262',
  },
  {
    key: '42965e1c-37cb-4a70-ab4d-83974c7a7da2',
    firstName: 'Grethel',
    lastName: 'Dorbon',
    department: 'Engineering',
    dateOfBirth: '12/18/1980',
    startDate: '08/08/2015',
    street: '922 Buhler Circle',
    city: 'Indianapolis',
    state: 'IN',
    zipCode: '46231',
  },
]

export const columns: DefaultColumn[] = [
  { id: 'firstName', displayText: 'First Name' },
  { id: 'lastName', displayText: 'Last Name' },
  { id: 'startDate', displayText: 'Start Date', sortMethod: 'sortDateISO' },
  { id: 'department', displayText: 'Department' },
  {
    id: 'dateOfBirth',
    displayText: 'Date of Birth',
    sortMethod: 'sortDateISO',
  },
  { id: 'street', displayText: 'Street' },
  { id: 'city', displayText: 'City' },
  { id: 'state', displayText: 'State' },
  { id: 'zipCode', displayText: 'Zip Code' },
]

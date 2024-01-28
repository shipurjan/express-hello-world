const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const places = [
  {
    id: 1,
    name: 'Muzeum Historyczne w Bielsku-Białej',
    address: 'Wzgórze 16, 43-300 Bielsko-Biała',
    description:
      'Muzeum zamkowe z galerią sztuki współczesnej i biżuterii, wystawą archeologiczną i książkami historycznymi.',
    latitude: 49.82165035763701,
    longitude: 19.044404672800603,
  },
  {
    id: 2,
    name: 'Muzeum Techniki i Włókiennictwa w Bielsku-Białej',
    address: 'Żwirki i Wigury 8, 43-300 Bielsko-Biała',
    description:
      'Muzeum znajduje się na Żywieckim Przedmieściu, w budynkach dawnej wytwórni, a od 1887 roku fabryki sukna i towarów wełnianych, założonej przez bielskiego sukiennika Karola Büttnera (1833-1884), później prowadzonej przez jego synów Karola Teodora (1863-1932) i Gustawa Adolfa (1865-1933).',
    latitude: 49.82004343225192,
    longitude: 19.04478953707793,
  },
  {
    id: 3,
    name: 'Gemini Park Bielsko-Biała',
    address: 'Leszczyńska 20, 43-300 Bielsko-Biała',
    description:
      'Gemini Park Bielsko-Biała – centrum handlowo-rozrywkowe w Bielsku-Białej. Otwarte 14 listopada 2009 roku.',
    latitude: 49.80275716988667,
    longitude: 19.050878978185377,
  },
  {
    id: 4,
    name: 'Uniwersytet Bielsko-Bialski',
    address: 'Willowa 2, 43-300 Bielsko-Biała',
    description:
      'Uniwersytet Bielsko-Bialski – polska publiczna uczelnia akademicka z siedzibą w Bielsku-Białej, utworzona w 2001 roku. W 2018 roku uczelnia uzyskała status uczelni badawczej.',
    latitude: 49.7832527330248,
    longitude: 19.057753953276023,
  },
  {
    id: 5,
    name: 'Park Cygański Las w Bielsku-Białej',
    address: 'Podleśna, 43-309 Bielsko-Biała',
    description:
      'Park Cygański Las w Bielsku-Białej – park miejski położony w południowej części miasta, w dzielnicy Hałcnów, na terenie dawnej wsi Hałcnów.',
    latitude: 49.782327353112635,
    longitude: 19.047794272984085,
  },
  {
    id: 6,
    name: 'Hala Widowiskowa BBOSiR',
    address: 'Karbowa 26, 43-300 Bielsko-Biała',
    description:
      'Hala Widowiskowo-Sportowa BBOSiR w Bielsku-Białej – hala widowiskowo-sportowa w Bielsku-Białej, w Polsce. Została otwarta w 1974 roku. Może pomieścić 2000 widzów. Swoje spotkania rozgrywają na niej koszykarze klubu Basket 90 Gocław.',
    latitude: 49.78590943134278,
    longitude: 19.02238785269772,
  },
  {
    id: 7,
    name: 'Bolek i Lolek',
    address: 'Mostowa, 43-300 Bielsko-Biała',
    description:
      'Metalowa rzeźba przedstawiająca parę bohaterów z kreskówki dla dzieci, która powstała w tym mieście, oraz globus.',
    latitude: 49.82653338665279,
    longitude: 19.048520404591308,
  },
  {
    id: 8,
    name: 'Muzeum Historyczne w Bielsku-Białej - Dom Tkacza',
    address: 'Jana III Sobieskiego 51, 43-300 Bielsko-Biała',
    description:
      'XV-wieczny dom z eksponatami przedstawiającymi jego rolę jako warsztatu tkackiego na przełomie XIX i XX wieku.',
    latitude: 49.8200771545729,
    longitude: 19.035411682953704,
  },
];

const routes = [
  {
    id: 1,
    description: 'Z UBB do Bolka i Lolka przez Gemini',
    waypoints: [
      places.find((p) => p.name === 'Bolek i Lolek'),
      places.find((p) => p.name === 'Gemini Park Bielsko-Biała'),
      places.find((p) => p.name === 'Uniwersytet Bielsko-Bialski'),
    ],
  },
  {
    id: 2,
    description: 'Muzea historyczne',
    waypoints: [
      places.find((p) => p.name === 'Muzeum Historyczne w Bielsku-Białej'),
      places.find((p) => p.name === 'Muzeum Techniki i Włókiennictwa w Bielsku-Białej'),
      places.find((p) => p.name === 'Muzeum Historyczne w Bielsku-Białej - Dom Tkacza'),
    ],
  },
  {
    id: 3,
    description: 'Cygański las i hala widowiskowa',
    waypoints: [
      places.find((p) => p.name === 'Park Cygański Las w Bielsku-Białej'),
      places.find((p) => p.name === 'Hala Widowiskowa BBOSiR'),
    ],
  },
];

app.get("/routes", (req, res) => res.send(routes));
app.get("/routes/:routeId", (req, res) => {
  const routeId = req.params.routeId;
  res.send(routes.find((r) => String(r.id) === routeId))
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

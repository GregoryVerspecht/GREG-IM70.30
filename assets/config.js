/* ==================================================================
   CONFIG.JS — HET ENIGE BESTAND DAT JE NORMAAL MOET BEWERKEN
   ==================================================================
   - Vul de TODO's in met jouw eigen gegevens.
   - Op racedag: pas gewoon "bib" hieronder aan en commit via de
     GitHub website/app. Binnen ~1 minuut staat de site live-update.
   - De hoofdsite is publiek (geen login) — enkel /admin.html vraagt een code.
   - Admin-wachtwoord wijzigen? Open de browser console (F12 -> Console) op
     eender welke pagina van de site en plak dit (pas "test123" aan):

       async function h(s){const b=await crypto.subtle.digest('SHA-256',
       new TextEncoder().encode(s));return[...new Uint8Array(b)]
       .map(x=>x.toString(16).padStart(2,'0')).join('');}
       h("test123").then(console.log)

     Kopieer de output-hash naar adminPassHash.
   ================================================================== */

window.CONFIG = {

  event: {
    name: "IRONMAN 70.3 Luxembourg",
    tagline: "Eerste (halve) triatlon van Greg!",
    athleteName: "Greg",
    raceDate: "2026-07-12T08:00:00+02:00",     // startuur race — check athlete guide voor exacte wave-tijd
    swimStart: "08:00",
    location: "Remich, Luxemburg",
    distances: { swim: "1.9 km", bike: "90 km", run: "21.1 km" },
    swimStartMapUrl: "https://www.google.com/maps/place/49%C2%B032'10.9%22N+6%C2%B021'35.8%22E/@49.536358,6.359951,17z",
    finishName: "Freibad Remich",
    finishMapUrl: "https://www.google.com/maps/place/Freibad+Remich/@49.5399002,6.3612563,714m",
    bib: "Gregory Verspecht",                   // naam volstaat om op te zoeken in de tracker-app — update naar het echte bib-nummer op racedag als je dat liever hebt
    goalTime: "Sub 7 uur",
    trackerNote: "Volg me live via de officiële IRONMAN Tracker-app.",
    trackerUrl: "https://www.ironman.com/im703-luxembourg-results",
    trackerAppStoreUrl: "https://apps.apple.com/us/app/ironman-tracker/id1183983404",
    trackerPlayStoreUrl: "https://play.google.com/store/apps/details?id=me.rtrt.app.irma",
    trackerSteps: [
      "Download de gratis app “IRONMAN Tracker” (App Store of Google Play) — of gebruik de web-tracker hierboven.",
      "Zoek het evenement “IRONMAN 70.3 Luxembourg” op en voeg het toe.",
      "Ga naar de tracker en zoek de deelnemer op — naam of startnummer (bib), zie hierboven (wordt op racedagochtend ingevuld).",
      "Volg live tussentijden, positie op de kaart en zet meldingen aan per splittijd."
    ],
    trackerHiddenNote: "Verschijnt de naam niet? Sommige atleten zetten hun tracking op 'privé' — dat is normaal.",
    officialSite: "https://www.ironman.com/races/im703-luxembourg",
    supportersUrl: "https://www.ironman.com/races/im703-luxembourg/supporters"
  },

  course: {
    intro: "Eén lus door drie landen: zwemmen in de Moselle, fietsen door Luxemburg, Duitsland en Frankrijk, lopen in 3 ronden langs de rivier in Remich. (Officiële cijfers uit de IRONMAN-parcourskaarten.)",
    officialCourseUrl: "https://www.ironman.com/races/im703-luxembourg/course",
    swim: {
      title: "Zwemmen — 1.9 km, 1 ronde",
      text: "Door de Moselle net onder Remich. De swim-out ligt vlak bij de transitiezone — heel kort van water naar fiets."
    },
    bike: {
      title: "Fietsen — 90 km, 1 lus, 580 hm",
      text: "Vanuit Remich eerst richting Grevenmacher (Duitse grens), dan het binnenland in via Moutfort, Contern en Syren, langs Filsdorf — daar ligt de bike-cutoff (12:55) — en Mondorf-les-Bains, en tot slot een lus door Frankrijk (Schengen, Perl) terug naar Remich. Bevoorrading rond km 20, 40 en 70."
    },
    run: {
      title: "Lopen — 21.1 km, 3 ronden",
      text: "3 heen-en-terugronden van elk ~7 km langs de Moselle-promenade in Remich — amper 40 hoogtemeters, dus vrijwel vlak. 4 bevoorradingsposten per ronde (2 per richting)."
    },
    spectatorTip: "De loop is 3 ronden heen-en-terug in Remich zelf — blijf op één plek langs de promenade en je ziet je atleet tot 6 keer voorbijkomen. Het fietsparcours passeert kort Duitsland en een stuk Frankrijk (Schengen); hou rekening met grensoverschrijdend verkeer als je daar wil gaan kijken.",
    transition: {
      title: "Wissels (T1 & T2)",
      text: "Beide wissels liggen op dezelfde plek vlak bij start/finish in Remich, met wisseltenten en toiletten aan beide uiteinden. T1 (zwem→fiets): swim-in → wisseltent → fiets ophalen bij het rek → mount line vlak bij bike-out. T2 (fiets→loop): dismount line bij aankomst → fiets terug naar het rek → wisseltent → run-out."
    }
  },

  logistics: {
    hotelName: "Parc Hotel Alvisse",
    hotelAddress: "120 Route d'Echternach, L-1453 Luxembourg",
    hotelUrl: "https://www.parc-hotel.lu/fr/home",
    checkIn: "Vrijdag 10 juli, 17:00 – 18:00",
    checkOut: "TODO: bv. maandag 13 juli",
    parkingNote: "De Esplanade (N10) in Remich is op racedag afgesloten van 06:15 tot 19:15 — parkeren in het centrum is beperkt. Gebruik bij voorkeur een van de gratis shuttlebussen hieronder.",
    travelNote: "TODO: hoe raak je er als vriend/familie op eigen houtje (auto, trein Remich, ...)",
    directionsUrl: "https://www.ironman.com/races/im703-luxembourg/directions",
    shuttle: {
      intro: "3 gratis shuttlelijnen (P+R → Remich) — handig als je zelf niet vlak bij start/finish geraakt.",
      lines: [
        { label: "A", route: "Stadtbredimus (P+R Centre Sportif) ↔ Remich (Rue Maatebierg)", toRemich: "04:55 – 07:15", fromRemich: "10:30 – 20:30", frequency: "elke 20 min" },
        { label: "B", route: "Ellange / Mondorf-les-Bains (P+R Triangle Vert) ↔ Remich (Place Nico Klopp)", toRemich: "05:15 – 09:05", fromRemich: "15:00 – 21:30", frequency: "elke 10 min" },
        { label: "C", route: "Besch (D) ↔ Nennig / Remich", toRemich: "04:55 – 19:55", fromRemich: "04:55 – 19:55 (beide richtingen doorlopend)", frequency: "elke 10 min" }
      ]
    },
    viewingSpots: [
      { text: "Start/finish-zone Remich (Freibad Remich) — beste sfeer, groot scherm en speaker", mapUrl: "https://www.google.com/maps/place/Freibad+Remich/@49.5399002,6.3612563,714m" },
      "TODO: kijkplek op het fietsparcours (Frankrijk-kant)",
      "TODO: kijkplek op het loopparcours (Luxemburg-kant)"
    ],
    weatherNote: "Check het weerbericht enkele dagen voor vertrek — Moselle-vallei kan warm zijn in juli.",
    emergencyContact: "TODO: noodcontact naam + nummer"
  },

  schedule: [
    {
      day: "Vrijdag 10 juli",
      tag: "Aankomst",
      items: [
        { time: "12:00", desc: "Vertrek naar Remich" },
        { time: "15:00 – 16:00", desc: "Registratie & gerief afhalen (expo/village)" },
        { time: "17:00 – 18:00", desc: "Inchecken hotel (Parc Hotel Alvisse)" },
        { time: "avond", desc: "Avondeten" },
        { time: "23:00", desc: "Slapen" }
      ]
    },
    {
      day: "Zaterdag 11 juli",
      tag: "Briefing & check-in",
      items: [
        { time: "12:30", desc: "Aankomst Place Dr Fernand Kons, Remich" },
        { time: "13:00", desc: "Athlete briefing (Engels)" },
        { time: "14:00 – 17:00", desc: "Fiets & wisselzakken wegzetten (T1/T2)" },
        { time: "avond", desc: "Terug naar hotel, avondeten" },
        { time: "21:30", desc: "Slapen" }
      ]
    },
    {
      day: "Zondag 12 juli — RACEDAG",
      tag: "Race",
      items: [
        { time: "06:00", desc: "Aankomst transitiezone — white bag drop-off, fietscheck, gels & drank klaarleggen" },
        { time: "08:00", desc: "Swim start — 1.9 km" },
        { time: "~08:40", desc: "Geschatte swim-finish + T1" },
        { time: "~08:45", desc: "Bike start — 90.5 km" },
        { time: "~12:00 – 12:20", desc: "Geschatte bike-finish + T2" },
        { time: "~12:05 – 12:25", desc: "Run start — 21.1 km (3 ronden)" },
        { time: "~14:15 – 14:45", desc: "Geschatte finish (totaal 6u15–6u45)" },
        { time: "TBC", desc: "Prijsuitreiking & finish line party" }
      ]
    },
    {
      day: "Maandag 13 juli",
      tag: "Vertrek",
      items: [
        { time: "TBC", desc: "Fiets & materiaal ophalen" },
        { time: "TBC", desc: "Vertrek / terugreis" }
      ]
    }
  ],

  // ---- ADMIN-WACHTWOORD (SHA-256 hash, geen leesbare tekst) ----
  // Standaard: admin-code = "IM70ADMIN2026" — PAS DIT AAN, zie instructies bovenaan dit bestand.
  security: {
    adminPassHash: "6869cbacb81e1511587a06b1e91fddc32a485d771b2062fcb428b77d7ace2800"
  },

  // ---- RACE-STRATEGIE (enkel zichtbaar op /admin.html) ----
  strategy: {
    bags: [
      {
        label: "T1-tas (zwem → fiets)",
        items: [
          "TODO: helm",
          "TODO: fietsschoenen",
          "TODO: zonnebril",
          "TODO: race-riem met nummer"
        ]
      },
      {
        label: "T2-tas (fiets → loop)",
        items: [
          "TODO: loopschoenen",
          "TODO: pet / zonnebril-wissel",
          "TODO: extra gels"
        ]
      },
      {
        label: "White bag / special needs",
        items: [
          "TODO: extra nutrition",
          "TODO: extra kledij bij regen"
        ]
      }
    ],
    nutrition: [
      { moment: "Voor de start", plan: "TODO: bv. ontbijt om 05:00, laatste gel 15 min voor start" },
      { moment: "Fiets", plan: "TODO: bv. elke 20 min een gel + slokken water/sportdrank" },
      { moment: "Loop", plan: "TODO: bv. om de 5 km gel of water aan bevoorradingspost" }
    ]
  },

  todoDefaults: [
    "Startnummer/bib ophalen bij check-in",
    "Fiets + wisselzakken inchecken (T1/T2)",
    "Wetsuit, bril, badmuts testen",
    "Nutrition race day klaarleggen (gels, bidons, zout)",
    "Race-outfit + veiligheidsspelden",
    "Athlete guide volledig doorgenomen",
    "Vrienden/familie doorsturen: link + toegangscode van deze site",
    "Bib-nummer invullen in config.js op racedag ochtend",
    "Wekker + back-up wekker gezet",
    "Documenten (ID, startbewijs) klaarleggen"
  ]
};

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
    hotspotsIntro: "IRONMAN 70.3 Luxembourg is een groot feest in het hart van Europa, met duizenden atleten. Bekijk de start vanaf de Moselle, kom naar de tribunes in de finishzone en moedig de atleten aan langs het zwem-, fiets- en loopparcours — beleef de IRONMAN-sfeer!",
    viewingSpots: [
      { text: "🏊 Zwemmen — langs de Moselle. De atleten zwemmen er twee keer voorbij." },
      { text: "🚴 Fietsen — waar de L146 afdraait van de N10. Hier zie je de atleten drie keer: eerst langs de Moselle naar het keerpunt, daarna klimmen ze door de wijngaarden op de L146." },
      { text: "🏃 Lopen — finishzone rond het openluchtzwembad (Freibad) in Remich. Moedig aan in elk van de 3 looprondes of zie je atleet finishen.", mapUrl: "https://www.google.com/maps/place/Freibad+Remich/@49.5399002,6.3612563,714m" }
    ],
    weatherNote: "Check het weerbericht enkele dagen voor vertrek — Moselle-vallei kan warm zijn in juli.",
    emergencyContact: "TODO: noodcontact naam + nummer"
  },

  schedule: [
  {
    day: "Vrijdag 10 juli",
    tag: "Aankomst & check-in IM70.3 + hotel",
    items: [
      { time: "12:00", desc: "Vertrek naar Remich" },
      { time: "15:00 – 16:00", desc: "Registratie & gerief afhalen (expo/village)" },
      { time: "17:00 – 18:00", desc: "Inchecken hotel (Parc Hotel Alvisse)" },
      { time: "18:00 – 23:00", desc: "Hotel | Douche | Avondeten (carbs) | Ontspannen | Zwembad" },
      { time: "23:00", desc: "Slapen" }
    ]
  },
  {
    day: "Zaterdag 11 juli",
    tag: "Briefing & materiaal klaarzetten",
    items: [
      { time: "07:00 - 08:00", desc: "Opstaan" },
      { time: "08:00 - 09:00", desc: "Ontbijt" },
      { time: "10:00 - 11:00", desc: "Shake out run" },
      { time: "11:00 - 12:00", desc: "Lunch - carbs" },
      { time: "12:00 - 12:30", desc: "Naar Place Dr Fernand Kons, Remich" },
      { time: "12:30", desc: "Aankomst Place Dr Fernand Kons, Remich" },
      { time: "13:00", desc: "Athlete briefing (Engels)" },
      { time: "14:00 - 15:00", desc: "Fiets & wisselzakken wegzetten (T1/T2)" },
      { time: "15:00 - 16:00", desc: "Boodschappen/ontbijt voor racedag fixen" },
      { time: "16:00 - 17:00", desc: "Terug naar hotel" },
      { time: "18:00 – 19:30", desc: "Avondeten" },
      { time: "19:30 – 21:30", desc: "Ontspannen" },
      { time: "21:30", desc: "Slapen" }
    ]
  },
  {
    day: "Zondag 12 juli — RACEDAG",
    tag: "Race",
    items: [
      { time: "04:30 - 05:15", desc: "Opstaan en ontbijt" },
      { time: "05:15", desc: "Vertrek naar Remich" },
      { time: "06:00", desc: "Aankomst transitiezone — white bag drop-off, fietscheck, gels & drank klaarleggen" },
      { time: "~08:05 – 08:15", desc: "Swim start — 1.9 km (jouw wave)" },
      { time: "~08:45 – 09:00", desc: "Geschatte swim-finish + T1" },
      { time: "~08:50 – 09:00", desc: "Bike start — 90.5 km" },
      { time: "~12:00 – 12:40", desc: "Geschatte bike-finish + T2" },
      { time: "~12:05 – 12:45", desc: "Run start — 21.1 km (3 ronden)" },
      { time: "~14:20 – 15:10", desc: "Geschatte finish (totaal 6u15–6u50)" },
      { time: "~15:00 – 16:00", desc: "Omkleden + materiaal" },
      { time: "16:00 – 17:30", desc: "Prijsuitreiking & finish line party (indien van toepassing)" },
      { time: "vóór 18:00", desc: "Fiets & materiaal ophalen (T2 sluit om 18:00)" },
      { time: "18:00 – 19:00", desc: "Terug naar hotel en avondeten familie en vrienden" }
    ]
  },
  {
    day: "Maandag 13 juli",
    tag: "Vertrek",
    items: [
      { time: "08:30 – 09:00", desc: "Rustig opstaan" },
      { time: "09:00 – 09:30", desc: "Douche" },
      { time: "09:30 – 10:30", desc: "Ontbijt (hotel)" },
      { time: "10:30 – 11:30", desc: "Inpakken" },
      { time: "11:30 – 12:00", desc: "Checkout" },
      { time: "12:00", desc: "Vertrek / terugreis naar huis" }
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
    // Doeltijd basis: ~6u15–6u45. Alles Maurten (getest op brick 4 juli).
    fuelTotals: [
      { label: "Drink mix", value: "3 bidons", note: "Maurten 320 · 240 g carbs" },
      { label: "Gels fiets", value: "2–3", note: "Maurten Gel 100" },
      { label: "Gels loop", value: "4", note: "Maurten Gel 100" },
      { label: "Cafeïne", value: "2 gels", note: "einde fiets + helft loop" }
    ],
    fuelTarget: "Fiets: 70–80 g carbs/u · 500–750 ml/u  —  Loop: 30–50 g carbs/u · water elke post",
    placement: [
      "3× Maurten 320 — voorgemengde bidons, klaar op de fiets",
      "2–3× Gel 100 — bike-vak (toptube / achterzak)",
      "4× Gel 100 — loop-riem / vest (waarvan 1 cafeïne)"
    ],
    fuelPhases: [
      {
        title: "Fiets — 90,5 km (~3u15–3u35)",
        rows: [
          { t: "0–5 min", a: "Alleen water, settelen — nog geen fuel" },
          { t: "5–70 min", a: "Bidon 1 (Maurten 320), slokjes elke 5–10 min" },
          { t: "~45 min", a: "Gel 1" },
          { t: "70–140 min", a: "Bidon 2 (Maurten 320)" },
          { t: "~110 min", a: "Gel 2" },
          { t: "140–200 min", a: "Bidon 3 (Maurten 320) — laatste 15–20 min rustiger" },
          { t: "~170 min", a: "☕ Cafeïne-gel (einde fiets)" }
        ]
      },
      {
        title: "Loop — 21,1 km (~2u16–2u23)",
        rows: [
          { t: "0–15 min", a: "Geen gel — benen laten wennen" },
          { t: "~20 min", a: "Gel 1" },
          { t: "~50 min", a: "☕ Cafeïne-gel (± helft loop)" },
          { t: "~80 min", a: "Gel 3" },
          { t: "~110 min", a: "Gel 4 (indien nog nodig)" },
          { t: "elke post", a: "Water, kort wandelen om goed te drinken" }
        ]
      }
    ],
    pacing: [
      {
        title: "Zwemmen — 1,9 km (~38–41 min)",
        rows: [
          { seg: "0–300 m", target: "2:15–2:20 /100m", note: "Bewust trager, rustig ademen" },
          { seg: "300–1500 m", target: "2:05–2:10 /100m", note: "Ritme, buoyancy uitbuiten" },
          { seg: "laatste 400 m", target: "2:00–2:05 /100m", note: "Optrekken richting T1" }
        ]
      },
      {
        title: "Fiets — 90,5 km (negative split)",
        rows: [
          { seg: "0–10 km", target: "105–115 W", note: "Benen openen na de zwem" },
          { seg: "10–35 km", target: "117–125 W", note: "Opbouwen, niet meeslepen" },
          { seg: "35–75 km", target: "120–130 W", note: "Heuvels: cap 150–155 W" },
          { seg: "75–90 km", target: "125–135 W", note: "Snel eindigen" }
        ]
      },
      {
        title: "Lopen — 21,1 km (negative split)",
        rows: [
          { seg: "0–3 km", target: "6:45–7:00 /km", note: "Bewust traag starten" },
          { seg: "3–10 km", target: "6:35–6:45 /km", note: "Geleidelijk zakken" },
          { seg: "10–16 km", target: "6:25–6:35 /km", note: "Comfortabel hard" },
          { seg: "16–21,1 km", target: "6:15–6:25 /km", note: "Versnellen als het lukt" }
        ]
      }
    ],
    keyTip: "Grootste winst: start de eerste 3 km van de loop bewust 20–30 s/km trager dan je targetpace — zo vermijd je de crash rond km 12–15."
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

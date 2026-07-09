/* ==================================================================
   CONFIG.JS — HET ENIGE BESTAND DAT JE NORMAAL MOET BEWERKEN
   ==================================================================
   - Vul de TODO's in met jouw eigen gegevens.
   - Op racedag: pas gewoon "bib" hieronder aan en commit via de
     GitHub website/app. Binnen ~1 minuut staat de site live-update.
   - Wachtwoord wijzigen? Open de browser console (F12 -> Console) op
     eender welke pagina van de site en plak dit (pas "test123" aan):

       async function h(s){const b=await crypto.subtle.digest('SHA-256',
       new TextEncoder().encode(s));return[...new Uint8Array(b)]
       .map(x=>x.toString(16).padStart(2,'0')).join('');}
       h("test123").then(console.log)

     Kopieer de output-hash naar friendsPassHash of adminPassHash.
   ================================================================== */

window.CONFIG = {

  event: {
    name: "IRONMAN 70.3 Luxembourg",
    tagline: "Région Moselle — zwemmen in Duitsland, fietsen in Frankrijk, lopen in Luxemburg",
    athleteName: "TODO: jouw naam",
    raceDate: "2026-07-12T08:00:00+02:00",     // startuur race — check athlete guide voor exacte wave-tijd
    swimStart: "08:00",
    location: "Wintrange, Canton Remich, Luxemburg",
    distances: { swim: "1.9 km", bike: "90 km", run: "21.1 km" },
    bib: "TODO",                                // <-- update dit op racedag!
    goalTime: "TODO: bv. 5u30",
    trackerNote: "Bib-nummer hierboven invullen op de officiële IRONMAN tracker om live te volgen.",
    trackerUrl: "https://www.ironman.com/im703-luxembourg-results",
    officialSite: "https://www.ironman.com/races/im703-luxembourg"
  },

  logistics: {
    hotelName: "TODO: naam hotel/verblijf",
    hotelAddress: "TODO: adres",
    checkIn: "TODO: bv. donderdag 9 juli",
    checkOut: "TODO: bv. maandag 13 juli",
    parkingNote: "TODO: parking-info (bv. dichtsbijzijnde parking t.o.v. start/finish in Remich/Wintrange)",
    travelNote: "TODO: hoe raak je er als vriend/familie op eigen houtje (auto, trein Remich, ...)",
    viewingSpots: [
      "Start/finish-zone Remich — beste sfeer, groot scherm en speaker",
      "TODO: kijkplek op het fietsparcours (Frankrijk-kant)",
      "TODO: kijkplek op het loopparcours (Luxemburg-kant)"
    ],
    weatherNote: "Check het weerbericht enkele dagen voor vertrek — Moselle-vallei kan warm zijn in juli.",
    emergencyContact: "TODO: noodcontact naam + nummer"
  },

  schedule: [
    {
      day: "Donderdag 9 juli",
      tag: "Aankomst",
      items: [
        { time: "TBC", desc: "Aankomst Luxemburg / inchecken verblijf" },
        { time: "TBC", desc: "IRONMAN Village opent — athlete check-in start (controleer athlete guide voor exact uur)" }
      ]
    },
    {
      day: "Vrijdag 10 juli",
      tag: "Race week",
      items: [
        { time: "TBC", desc: "Expo & village open" },
        { time: "TBC", desc: "Athlete briefing (verplicht volgens IRONMAN-reglement)" },
        { time: "TBC", desc: "Vrije dag / rust / laatste losse trainingsritjes" }
      ]
    },
    {
      day: "Zaterdag 11 juli",
      tag: "Check-in",
      items: [
        { time: "TBC", desc: "Verplichte fiets- & wisselzak check-in (T1/T2) — check exact uur in athlete guide" },
        { time: "TBC", desc: "Laatste briefing / rustige avond, vroeg slapen" }
      ]
    },
    {
      day: "Zondag 12 juli — RACEDAG",
      tag: "Race",
      items: [
        { time: "05:15", desc: "Transitiezone opent (indicatief — check athlete guide)" },
        { time: "08:00", desc: "Swim start — 1.9 km in de Moselle/Duitse kant" },
        { time: "~09:15", desc: "Bike start — 90 km door Frankrijk" },
        { time: "~12:30", desc: "Run start (indicatief) — 21.1 km in Luxemburg" },
        { time: "11:55", desc: "Eerste finishers verwacht" },
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

  // ---- WACHTWOORDEN (SHA-256 hashes, geen leesbare tekst) ----
  // Standaard: vrienden-code = "MOSELLE2026" | admin-code = "IM70ADMIN2026"
  // PAS DEZE AAN voor het publiceren — zie instructies bovenaan dit bestand.
  security: {
    friendsPassHash: "ac15040b7a8de976106826a0aec57b083a7a1c02becb7995de79853d06332bda",
    adminPassHash:   "6869cbacb81e1511587a06b1e91fddc32a485d771b2062fcb428b77d7ace2800"
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

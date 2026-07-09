# IRONMAN 70.3 Luxembourg — vrienden & familie site

Statische site voor GitHub Pages met live countdown, dag-planning, racedag-info
(startnummer + tracker), parcours in detail en praktische info (hotel, shuttle,
kijkplekken) — publiek toegankelijk, geen login nodig. Plus een apart,
niet-gelinkt admin-gedeelte met een persoonlijke to-do lijst en race-strategie,
enkel voor jou.

## 1. GitHub Pages activeren
1. Push deze bestanden naar de `main` branch van deze repo.
2. Ga naar **Settings → Pages**.
3. Bij **Source**: kies `Deploy from a branch` → branch `main`, map `/ (root)`.
4. Na ~1 minuut is de site live op `https://gregoryverspecht.github.io/GREG-IM70.30/`.

## 2. Jouw gegevens invullen
Open **`assets/config.js`** — dit is het enige bestand dat je normaal moet
bewerken. Vul alle `TODO`-velden in (naam, hotel, data, doeltijd, kijkplekken...).
Bewerk het rechtstreeks op GitHub (potlood-icoon, ook vanaf je telefoon via de
GitHub app of mobiele browser) en commit naar `main` — de site publiceert
zichzelf automatisch opnieuw binnen ~1 minuut. Geen build-stap nodig.

## 3. Startnummer (bib) bijwerken op racedag
In `assets/config.js`, zoek `bib: "TODO"` onder `event` en vervang door je
startnummer. Commit. Klaar — de racedag-pagina toont het meteen.

## 4. Toegang
De hoofdsite (Home/Planning/Racedag/Parcours/Praktisch) is **publiek** —
geen code nodig, gewoon de link delen. Alleen `/admin.html` (jouw
persoonlijke to-do + race-strategie) staat achter een eigen code, nergens
gelinkt in de navigatie.

Admin-code wijzigen (aanbevolen vóór je de link deelt):
1. Open eender welke pagina van de site in je browser.
2. Open de developer console (F12 → tabblad *Console*).
3. Plak dit (pas `"jouwnieuwecode"` aan):
   ```js
   async function h(s){const b=await crypto.subtle.digest('SHA-256',
   new TextEncoder().encode(s));return[...new Uint8Array(b)]
   .map(x=>x.toString(16).padStart(2,'0')).join('');}
   h("jouwnieuwecode").then(console.log)
   ```
4. Kopieer de hash die verschijnt naar `adminPassHash` in `assets/config.js`.

## 5. Hoe "bot-proof" is dit echt?
GitHub Pages is statische hosting. Wat deze site wél doet om ongewenst
scrapen/indexeren te beperken:
- De eigenlijke inhoud (planning, hotel, bib...) wordt pas in de pagina
  geladen via JavaScript — een simpele `curl`/scraper die geen JS uitvoert,
  ziet dus niets bruikbaars.
- `robots.txt` + `noindex`-meta houden zoekmachines en de meeste
  link-preview bots buiten.
- Het admin-gedeelte staat nergens gelinkt én heeft een eigen code.

Wat het **niet** is: échte beveiliging tegen een gemotiveerde persoon die de
broncode bekijkt. Zet dus geen bank- of paspoortgegevens in `config.js` —
voor een publieke vrienden-overzichtspagina zonder gevoelige info is dit
ruim voldoende.

## Structuur
```
index.html          Home — countdown, snel overzicht
schedule.html        Planning per dag
raceday.html         Startnummer, tracker, cutoff-tijden
course.html          Parcours in detail — kaarten, wissels, kijktips
logistics.html       Hotel, parking, shuttle, kijkplekken
admin.html           (niet gelinkt) — persoonlijke to-do + race-strategie, eigen code
assets/config.js     Alle inhoud + admin-wachtwoord-hash — dit bewerk je
assets/style.css     Design
assets/app.js        Rendert de pagina's vanuit config.js
assets/todo.js       To-do lijst + strategie-render (admin, localStorage)
assets/img/          Transitie-kaarten (T1/T2)
robots.txt           Weert zoekmachines
```

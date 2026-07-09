/* ==================================================================
   APP.JS — rendert de inhoud van elke pagina op basis van config.js
   Wordt pas uitgevoerd NA een geldige passcode (zie gate.js).
   ================================================================== */

function fmtDate(d) {
  return d.toLocaleDateString("nl-BE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function startCountdown(targetIso, els) {
  const target = new Date(targetIso).getTime();
  function tick() {
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    els.d.textContent = d;
    els.h.textContent = String(h).padStart(2, "0");
    els.m.textContent = String(m).padStart(2, "0");
    els.s.textContent = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------------- HOME ---------------- */
function renderHome() {
  const c = window.CONFIG.event;
  document.getElementById("athlete-name").textContent = c.athleteName;
  document.getElementById("race-name").textContent = c.name;
  document.getElementById("race-tagline").textContent = c.tagline;
  document.getElementById("race-location").textContent = c.location;
  document.getElementById("race-date-full").textContent = fmtDate(new Date(c.raceDate));
  document.getElementById("d-swim").textContent = c.distances.swim;
  document.getElementById("d-bike").textContent = c.distances.bike;
  document.getElementById("d-run").textContent = c.distances.run;

  document.getElementById("home-bib").textContent = c.bib || "TODO";
  document.getElementById("home-swim-start").textContent = c.swimStart;
  document.getElementById("home-goal").textContent = c.goalTime;
  document.getElementById("home-tracker-note").textContent = c.trackerNote;
  document.getElementById("home-tracker-link").href = c.trackerUrl;

  startCountdown(c.raceDate, {
    d: document.getElementById("cd-d"),
    h: document.getElementById("cd-h"),
    m: document.getElementById("cd-m"),
    s: document.getElementById("cd-s"),
  });
}

/* ---------------- SCHEDULE ---------------- */
function renderSchedule() {
  const wrap = document.getElementById("schedule-wrap");
  wrap.innerHTML = "";
  window.CONFIG.schedule.forEach((day) => {
    const dayEl = document.createElement("div");
    dayEl.className = "day";
    const itemsHtml = day.items
      .map((it) => `<li><span class="time">${it.time}</span><span class="desc">${it.desc}</span></li>`)
      .join("");
    dayEl.innerHTML = `
      <h3>${day.day} <span class="tag">${day.tag}</span></h3>
      <ul class="timeline">${itemsHtml}</ul>
    `;
    wrap.appendChild(dayEl);
  });
}

/* ---------------- RACE DAY ---------------- */
function renderRaceday() {
  const c = window.CONFIG.event;
  document.getElementById("rd-bib").textContent = c.bib || "TODO";
  document.getElementById("rd-goal").textContent = c.goalTime;
  document.getElementById("rd-swim-start").textContent = c.swimStart;
  document.getElementById("rd-swim").textContent = c.distances.swim;
  document.getElementById("rd-bike").textContent = c.distances.bike;
  document.getElementById("rd-run").textContent = c.distances.run;
  document.getElementById("rd-tracker-note").textContent = c.trackerNote;
  const trackerBtn = document.getElementById("rd-tracker-link");
  trackerBtn.href = c.trackerUrl;
  const officialBtn = document.getElementById("rd-official-link");
  officialBtn.href = c.officialSite;
}

/* ---------------- LOGISTICS ---------------- */
function renderLogistics() {
  const l = window.CONFIG.logistics;
  document.getElementById("lg-hotel-name").textContent = l.hotelName;
  document.getElementById("lg-hotel-address").textContent = l.hotelAddress;
  document.getElementById("lg-checkin").textContent = l.checkIn;
  document.getElementById("lg-checkout").textContent = l.checkOut;
  document.getElementById("lg-parking").textContent = l.parkingNote;
  document.getElementById("lg-travel").textContent = l.travelNote;
  document.getElementById("lg-weather").textContent = l.weatherNote;
  document.getElementById("lg-emergency").textContent = l.emergencyContact;
  const list = document.getElementById("lg-viewing-list");
  list.innerHTML = l.viewingSpots.map((v) => `<li><span class="desc">${v}</span></li>`).join("");
}

/* Router: elke pagina zet window.renderPage vóór gate.js dit aanroept */

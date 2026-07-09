/* ==================================================================
   APP.JS — rendert de inhoud van elke pagina op basis van config.js
   ================================================================== */

/* ---------------- NAV (hamburgermenu op mobiel) ---------------- */
(function () {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

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

/* ---------------- TRACKER (gedeeld door Home & Racedag) ---------------- */
function renderTrackerSteps(listId, c) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.innerHTML = c.trackerSteps.map((step) => `<li>${step}</li>`).join("");
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
  document.getElementById("rd-tracker-appstore").href = c.trackerAppStoreUrl;
  document.getElementById("rd-tracker-playstore").href = c.trackerPlayStoreUrl;
  document.getElementById("rd-tracker-hidden-note").textContent = c.trackerHiddenNote;
  renderTrackerSteps("rd-tracker-steps", c);
  document.getElementById("rd-swimstart-map").href = c.swimStartMapUrl;
  document.getElementById("rd-finish-name").textContent = c.finishName;
  document.getElementById("rd-finish-map").href = c.finishMapUrl;
}

/* ---------------- PARCOURS ---------------- */
function renderCourse() {
  const c = window.CONFIG.course;
  document.getElementById("course-intro").textContent = c.intro;
  document.getElementById("course-swim-title").textContent = c.swim.title;
  document.getElementById("course-swim-text").textContent = c.swim.text;
  document.getElementById("course-bike-title").textContent = c.bike.title;
  document.getElementById("course-bike-text").textContent = c.bike.text;
  document.getElementById("course-run-title").textContent = c.run.title;
  document.getElementById("course-run-text").textContent = c.run.text;
  document.getElementById("course-spectator-tip").textContent = c.spectatorTip;
  document.getElementById("course-transition-text").textContent = c.transition.text;
  document.getElementById("course-official-link").href = c.officialCourseUrl;
}

/* ---------------- LOGISTICS ---------------- */
function renderLogistics() {
  const l = window.CONFIG.logistics;
  document.getElementById("lg-hotel-name").textContent = l.hotelName;
  document.getElementById("lg-hotel-address").textContent = l.hotelAddress;
  document.getElementById("lg-hotel-link").href = l.hotelUrl;
  document.getElementById("lg-checkin").textContent = l.checkIn;
  document.getElementById("lg-checkout").textContent = l.checkOut;
  document.getElementById("lg-parking").textContent = l.parkingNote;
  document.getElementById("lg-travel").textContent = l.travelNote;
  document.getElementById("lg-directions-link").href = l.directionsUrl;
  document.getElementById("lg-weather").textContent = l.weatherNote;
  document.getElementById("lg-emergency").textContent = l.emergencyContact;
  document.getElementById("lg-shuttle-intro").textContent = l.shuttle.intro;
  document.getElementById("lg-shuttle-lines").innerHTML = l.shuttle.lines
    .map(
      (s) => `
      <div class="card">
        <div class="k">Lijn ${s.label} — ${s.route}</div>
        <p style="margin-top:8px; margin-bottom:2px"><strong>Heen:</strong> ${s.toRemich}</p>
        <p style="margin-bottom:2px"><strong>Terug:</strong> ${s.fromRemich}</p>
        <p style="margin-bottom:0; color:var(--ink-faint); font-size:.85rem">${s.frequency}</p>
      </div>`
    )
    .join("");
  const list = document.getElementById("lg-viewing-list");
  list.innerHTML = l.viewingSpots
    .map((v) => {
      const text = typeof v === "string" ? v : v.text;
      const link = typeof v === "object" && v.mapUrl ? ` <a href="${v.mapUrl}" target="_blank" rel="noopener">(kaart →)</a>` : "";
      return `<li><span class="desc">${text}</span>${link}</li>`;
    })
    .join("");
}

/* ---------------- STRATEGIE (admin) ---------------- */
function renderStrategy() {
  const s = window.CONFIG.strategy;
  const bagsWrap = document.getElementById("strategy-bags");
  if (bagsWrap) {
    bagsWrap.innerHTML = s.bags
      .map(
        (bag) => `
        <div class="card">
          <div class="k">${bag.label}</div>
          <ul style="text-align:left; margin:8px 0 0; padding-left:20px">
            ${bag.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>`
      )
      .join("");
  }
  const nutritionWrap = document.getElementById("strategy-nutrition");
  if (nutritionWrap) {
    nutritionWrap.innerHTML = s.nutrition
      .map(
        (n) => `
        <div class="card">
          <div class="k">${n.moment}</div>
          <p style="margin-top:8px">${n.plan}</p>
        </div>`
      )
      .join("");
  }
}

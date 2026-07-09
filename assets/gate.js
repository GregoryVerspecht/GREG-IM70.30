/* ==================================================================
   GATE.JS — client-side passcode-scherm.
   Let op (eerlijk!): dit is GEEN echte serverbeveiliging (GitHub Pages
   kan geen wachtwoorden server-side controleren). Het houdt wél tegen:
   - zoekmachines & de meeste scraper-scripts (die geen JS uitvoeren
     en dus enkel een lege pagina zien),
   - link-preview bots,
   - toevallige bezoekers zonder de code.
   Iemand die heel gericht in de broncode duikt kan in theorie de data
   vinden — voor een privé vrienden-site is dit ruim voldoende.
   ================================================================== */

(function () {
  const STORAGE_KEY = "im703_friends_ok";

  async function sha256(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  function revealContent() {
    document.getElementById("gate").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    if (typeof window.renderPage === "function") window.renderPage();
  }

  // Wissel van rol: logt uit als vriend/viewer en toont opnieuw het passcode-scherm.
  window.logoutFriends = function () {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  };

  window.initGate = function () {
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      revealContent();
      return;
    }
    const form = document.getElementById("gate-form");
    const input = document.getElementById("gate-input");
    const err = document.getElementById("gate-err");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const hash = await sha256(input.value.trim());
      if (hash === window.CONFIG.security.friendsPassHash) {
        localStorage.setItem(STORAGE_KEY, "1");
        revealContent();
      } else {
        err.textContent = "Foute code — probeer opnieuw.";
        input.value = "";
        input.focus();
      }
    });
  };
})();

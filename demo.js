// Beispiel-Demo: feste Antworten, keine KI, keine Eingabe, keine eigenen Netzwerkaufrufe.
// Die Auswahl wird bewusst nicht in die Adresse (#...) geschrieben, damit die Reichweitenmessung
// sie nicht als eigenen Seitenaufruf erfasst. Direktlinks wie /demo#paket funktionieren weiterhin.
document.documentElement.classList.add("js");

(function () {
  const knoepfe = [...document.querySelectorAll(".szenario")];
  const panels = [...document.querySelectorAll(".panel")];
  const ids = panels.map((p) => p.id);

  function waehle(id) {
    if (!ids.includes(id)) id = ids[0];
    panels.forEach((p) => { p.hidden = p.id !== id; });
    knoepfe.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ziel === id)));
  }

  knoepfe.forEach((b) => b.addEventListener("click", () => waehle(b.dataset.ziel)));
  waehle(location.hash.slice(1));
  window.addEventListener("hashchange", () => waehle(location.hash.slice(1)));
})();

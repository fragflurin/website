// Beispiel-Demo: feste Antworten, keine KI, keine Eingabe, keine eigenen Netzwerkaufrufe.
// Weder Szenario noch Handy-Auswahl werden in die Adresse (#...) geschrieben, damit die Reichweitenmessung
// sie nicht als eigenen Seitenaufruf erfasst. Direktlinks wie /demo#paket funktionieren weiterhin.
document.documentElement.classList.add("js");

(function () {
  const knoepfe = [...document.querySelectorAll(".szenario")];
  const panels = [...document.querySelectorAll(".panel")];
  const geraeteBox = document.querySelector(".geraete");
  const geraeteKnoepfe = [...document.querySelectorAll(".geraet")];
  const ids = panels.map((p) => p.id);
  let geraet = "iphone";
  let aktuell = ids[0];

  function zeige() {
    panels.forEach((p) => {
      p.hidden = p.id !== aktuell;
      p.querySelectorAll(".variante").forEach((v) => { v.hidden = v.dataset.geraet !== geraet; });
    });
    knoepfe.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ziel === aktuell)));
    geraeteKnoepfe.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.geraet === geraet)));
    const aktiv = panels.find((p) => p.id === aktuell);
    if (geraeteBox) geraeteBox.hidden = !aktiv.querySelector(".variante");
  }
  function waehle(id) { aktuell = ids.includes(id) ? id : ids[0]; zeige(); }

  knoepfe.forEach((b) => b.addEventListener("click", () => waehle(b.dataset.ziel)));
  geraeteKnoepfe.forEach((b) => b.addEventListener("click", () => { geraet = b.dataset.geraet; zeige(); }));
  waehle(location.hash.slice(1));
  window.addEventListener("hashchange", () => waehle(location.hash.slice(1)));
})();

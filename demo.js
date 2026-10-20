// Beispiel-Demo: feste Antworten, kein Netzwerk, keine Eingabe, keine Speicherung.
document.documentElement.classList.add("js");

(function () {
  const knoepfe = [...document.querySelectorAll(".szenario")];
  const panels = [...document.querySelectorAll(".panel")];
  const ids = panels.map((p) => p.id);

  function waehle(id, mitHash) {
    if (!ids.includes(id)) id = ids[0];
    panels.forEach((p) => { p.hidden = p.id !== id; });
    knoepfe.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ziel === id)));
    if (mitHash) history.replaceState(null, "", "#" + id);
  }

  knoepfe.forEach((b) => b.addEventListener("click", () => waehle(b.dataset.ziel, true)));
  waehle(location.hash.slice(1), false);
  window.addEventListener("hashchange", () => waehle(location.hash.slice(1), false));
})();

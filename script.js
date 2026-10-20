// Hier steht die Adresse des E-Mail-Speichers (aktuell Formspree, USA; Wechsel zu einem EU-Anbieter ist geplant).
// Ist sie leer, wird NICHTS gespeichert und die Seite sagt das auch ehrlich.
const ENDPOINT = "https://formspree.io/f/xbgdoegj";

document.documentElement.classList.add("js");

document.querySelectorAll("form.warteliste").forEach((form) => {
  const meldung = form.querySelector(".meldung");
  const button = form.querySelector("button");
  const knopfText = button.textContent;
  const zeige = (text, art) => { meldung.textContent = text; meldung.className = "meldung " + art; };
  const markiere = (feld, fehler) => feld.setAttribute("aria-invalid", fehler ? "true" : "false");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (form.querySelector(".hp input").value) return; // Spam-Falle
    markiere(form.email, false);
    if (!form.email.checkValidity() || !email) {
      markiere(form.email, true);
      form.email.focus();
      return zeige("Bitte prüf die E-Mail-Adresse.", "fehler");
    }
    if (!form.einwilligung.checked) {
      form.einwilligung.focus();
      return zeige("Bitte stimm zu, damit wir dir schreiben dürfen.", "fehler");
    }
    if (!ENDPOINT) return zeige("Testmodus: Es wurde noch nichts gespeichert.", "fehler");

    button.disabled = true;
    button.textContent = "Wird gesendet …";
    zeige("", "");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, einwilligung: true, zeit: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      form.reset();
      zeige("Danke! Du bist auf der Warteliste.", "ok");
    } catch {
      zeige("Das hat leider nicht geklappt. Versuch es bitte nochmal.", "fehler");
    }
    button.disabled = false;
    button.textContent = knopfText;
  });
});

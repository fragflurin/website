# FragFlurin – Website (Pre-Launch)

Statische Seite (HTML/CSS/JS, kein Build), gehostet über GitHub Pages auf https://fragflurin.ch. Schriften liegen lokal in `fonts/`.

## Seiten
- `index.html`: Startseite mit Hero, Ablauf, Funktionen, Demo-Teaser, FAQ und Warteliste.
- `demo.html` (erreichbar als `/demo`): Beispiel-Demo mit drei festen Situationen. Keine KI, keine Eingabe, keine Speicherung. Logik in `demo.js`.
- `datenschutz.html`, `impressum.html`: Entwürfe, nicht anwaltlich geprüft.

## Bilder
Illustrationen liegen in `images/` (WebP, 720 x 405): `familie-hero`, `foto-vom-bildschirm`, `sprache`, `verdaechtige-nachricht`, `demo-sofa`. Originale (PNG, 1672 x 941) liegen nicht im Repo.

## Warteliste
In `script.js` steht die Konstante `ENDPOINT` (aktuell Formspree, USA; Wechsel zu einem EU-Anbieter geplant). Leer = nichts wird gespeichert.

## Lokal ansehen
`python -m http.server 8000` und dann http://localhost:8000 öffnen.

## Spätere Beta
Eine echte Beta sollte unter einer eigenen Route oder Subdomain laufen (zum Beispiel `beta.fragflurin.ch`), mit geschlossenem Zugang, serverseitiger API-Anbindung, Anfrage- und Kostenlimits sowie eigener Einwilligung und Datenschutzhinweisen. Sie gehört nicht zur öffentlichen Demo.

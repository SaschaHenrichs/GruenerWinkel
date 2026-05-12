# KGV Grüner Winkel e.V. – Website Redesign

## Original Problem Statement
Neue Website für den Kleingartenverein "KGV Grüner Winkel e.V." (Duisburg). Inhalte und Bilder von https://www.kgvgruenerwinkel.de/ und Drive Folder übernehmen.

## User Choices
- Design: Verspielt & einladend (warme Farben, organische Formen)
- Funktionalität: Statische Informationsseite + Kontaktformular
- Sprache: Deutsch
- Kontakt-E-Mail: info@kgvgruenerwinkel.de
- Keine Stock-Fotos – nur eigene Bilder + CSS-Illustrationen
- Verspielte Schriftarten (Caveat + Fredoka + Nunito)

## Architecture
- **Frontend**: React + React Router, Tailwind, Caveat/Fredoka/Nunito fonts, Sonner toasts, Lucide icons
- **Backend**: FastAPI + Motor (MongoDB) – /api/contact POST/GET, /api/ root
- **DB**: MongoDB Collection `contact_messages`
- **Routes (12 Seiten)**: /, /wir-ueber-uns, /vorstand, /aktuelles, /recht, /anfahrt, /vereinsheim, /winterdienst, /galerie, /kontakt, /impressum, /datenschutz + 404

## Implemented
### v1 (Dec 2025) – MVP
- 12 vollständige Seiten in Deutsch
- Earthy-Theme (Moos-Grün, Terracotta, Sand) mit organischen Blob-Shapes
- Sticky Navbar mit Glassmorphism + Mobile Menu
- Vorstand-Seite mit allen Vorstandsmitgliedern + Telefonnummern
- Aktuelles, Anfahrt mit OpenStreetMap, Vereinsheim, Winterdienst, Galerie
- Kontaktformular mit MongoDB-Speicherung
- Impressum & Datenschutz (DSGVO-konform)

### v2 (Dec 2025) – Iteration
- "Feste"-Seite + Nav-Link komplett entfernt (kein St. Martin mehr)
- **80 Jahre Jubiläum 2026** prominent auf Startseite, Aktuelles und About
- Neue Seite **/recht** mit BKleingG, Garten- und Bauordnung, Schottergärten, Heckenschnitt­zeitraum, Bienenhaltung, Bodenuntersuchungen, Naturgemäß-Gärtnern (Inhalte recherchiert von kleingarten-duisburg.de und web search)
- Bezirk-E-(Mitte)-Info ergänzt, ~106 Vereine / 7.000 Pächter / 2,3 Mio m² als Kontext
- Chronik (1946 → 1996 → 2006 → heute → 2026) auf About-Seite
- **Alle Stock-Fotos entfernt** – ersetzt durch CSS-Illustrationen mit Blob-Shapes, dots-pattern, animierten Elementen
- Echtes Vereinslogo (`/images/logo.jpg`) in Navbar und Footer
- Verspieltere Schriften: **Caveat** (handgeschrieben, Akzente), **Fredoka** (Headlines), **Nunito** (Body)
- SVG-Blattbullets für Listen statt Emoji

### v3 (Dec 2025) – Echte Vereinsfotos & Verfeinerung
- **45 echte Fotos** aus Google Drive heruntergeladen, web-optimiert (1600 px / quality 78) und unter `/app/frontend/public/images/gallery/g01-g45.jpg` abgelegt
- Galerie-Seite komplett neu: Masonry-Layout mit allen 45 Fotos + Lightbox (Click-to-Enlarge)
- Echte Fotos auf Home (Hero-Kollage + Gallery-Preview-Strip + About-Preview), About (Foto-Kachel), Vereinsheim, Vorstand (Foto-Banner), Aktuelles (Foto-Banner), Anfahrt (Foto-Strip)
- "Keine Schottergärten in der Anlage"-Hinweis aus Aktuelles entfernt
- Jubiläumsfest-Hinweise entfernt; faktische 80-Jahre-Heritage-Stats bleiben

## Backlog (P1)
- E-Mail-Versand des Kontaktformulars via Resend/SendGrid an info@kgvgruenerwinkel.de
- Jubiläumsprogramm 2026 (Termine, Festfolge) konkretisieren und einpflegen
- Vorstandsfotos pro Person

## Backlog (P2)
- Wartelisten-Formular für Garteninteressenten
- Mitgliederbereich mit Login
- News-CMS für Vorstand zum eigenständigen Pflegen
- Mehrsprachigkeit (DE/EN/TR)

## Test Credentials
n/a (kein Auth)

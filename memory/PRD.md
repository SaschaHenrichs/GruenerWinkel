# KGV Grüner Winkel e.V. – Website Redesign

## Original Problem Statement
Neue Website für den Kleingartenverein "KGV Grüner Winkel e.V." (Duisburg). Inhalte und Bilder von https://www.kgvgruenerwinkel.de/ und Drive Folder übernehmen.

## User Choices
- Design: Verspielt & einladend (warme Farben, organische Formen)
- Funktionalität: Statische Informationsseite + Kontaktformular
- Sprache: Deutsch
- Kontakt-E-Mail: info@kgvgruenerwinkel.de
- Bilder: User stellt Drive-Bilder später bereit (aktuell Unsplash-Platzhalter)

## Architecture
- **Frontend**: React + React Router, Tailwind, Fredoka/Quicksand fonts, Sonner toasts, Lucide icons
- **Backend**: FastAPI + Motor (MongoDB) – /api/contact POST/GET, /api/ root
- **DB**: MongoDB Collection `contact_messages`
- **Routes (12 Seiten)**: /, /wir-ueber-uns, /vorstand, /aktuelles, /feste, /anfahrt, /vereinsheim, /winterdienst, /galerie, /kontakt, /impressum, /datenschutz + 404

## Implemented (Dec 2025)
- 12 vollständige Seiten mit Inhalten der bestehenden Site
- Earthy-Theme (Moos-Grün, Terracotta, Sand) mit organischen Blob-Shapes
- Sticky Navbar mit Glassmorphism + Mobile Menu
- Hero mit animierten Blobs, Stats und Hand-drawn-Underline
- Vorstand-Seite mit allen aktuellen Mitgliedern + Telefonnummern
- Aktuelles-Seite (Briefkasten/Kummerkasten Info)
- Feste-Seite (St. Martin Event)
- Anfahrt mit OpenStreetMap Embed + Google Maps Links
- Vereinsheim, Winterdienst, Galerie (6 Bilder im Masonry-Layout)
- Kontaktformular mit MongoDB-Speicherung + Sonner Toast Feedback
- Impressum & Datenschutz (DSGVO-konform)
- Vollständig responsive, alle Elemente mit data-testid

## Backlog (P1)
- Echte Bilder vom User aus Drive Folder einbinden (alle mit "REPLACE WITH GOOGLE DRIVE IMAGE" markiert)
- E-Mail-Versand via Resend/SendGrid an info@kgvgruenerwinkel.de (aktuell nur DB-Speicherung)
- Echtes Logo + Slogan vom Verein (in /app/frontend/public/images/ bereits geladen)
- Vorstand-Fotos pro Person

## Backlog (P2)
- Mitgliederbereich mit Login
- Newsletter / Mailing-Liste
- News-CMS für Vorstand zum eigenständigen Pflegen
- Wartelisten-Formular für Garteninteressenten
- Mehrsprachigkeit (DE/EN/TR)

## Test Credentials
n/a (kein Auth)

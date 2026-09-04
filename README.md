# Rasmus Schønning — portfolio

En simpel to-siders portfolio: forside med fuldskærms-slideshow og en about-side.
Ren HTML/CSS/JS — ingen build-proces, ingen afhængigheder.

## Filer

```
index.html        Forsiden (slideshow)
about.html         About-siden
styles.css         Alt design
script.js          Slideshow-logik
fonts/             True Serif Book (brugt til overskrifter/about-tekst)
images/            De optimerede projektbilleder
```

## Redigere indhold

**Tilføj/fjern/omarrangér billeder i slideshowet:**
Åbn `script.js` i en almindelig teksteditor og redigér listen øverst
(`SLIDES`). Hvert billede har et afsnit med `src`, `title`, `designedAt`,
`client` og `photography`. Billedteksten under hvert slide bygges
automatisk ud fra disse felter, og gitteret under "Index" opdateres
automatisk med.

**Tilføje et videoprojekt:**
Læg videofilen i `videos/`-mappen, og tilføj et afsnit til `SLIDES` med
`type: "video"`, `src` (sti til .mp4-filen) og `poster` (et stillbillede,
der vises før afspilning — læg det i `images/`-mappen). Der ligger allerede
tre klargjorte videoer og posters i pakken (Bloom Bus, NFFS, Sitting Ugly)
— de mangler blot credits, før de kan tilføjes til `SLIDES`.

**Ret about-teksten eller tilføj kontaktinfo:**
Åbn `about.html` og redigér teksten direkte.

**Tilføj nye billeder:**
Læg den nye billedfil i `images/`-mappen, og tilføj et afsnit til `SLIDES`
i `script.js`. Billeder bør helst være under ca. 2400px brede for hurtig
indlæsning (brug fx et gratis værktøj som squoosh.app til at skalere/
komprimere, hvis dine originalfiler er større).

## Gratis hosting med GitHub Pages

1. Opret en gratis konto på [github.com](https://github.com), hvis du ikke
   allerede har en.
2. Opret et nyt repository (kald det fx `portfolio`), og upload alle
   filerne fra denne mappe til det (du kan trække filerne direkte ind på
   GitHub's "Add file → Upload files"-side i browseren).
3. Gå til repositoriets **Settings → Pages**.
4. Under "Build and deployment" → "Source", vælg **Deploy from a branch**.
5. Vælg branch **main** og mappe **/ (root)**, og tryk **Save**.
6. Efter ét til to minutter er siden live på:
   `https://<dit-brugernavn>.github.io/portfolio/`

Vil du bruge dit eget domæne senere (fx rasmusschonning.dk), kan det
tilføjes under samme Pages-indstillinger — du skal blot pege dit domænes
DNS mod GitHub's servere. Sig til, hvis du får brug for hjælp til det.

## Skrifttype

`True-Serif-Book.otf` er indlejret via `@font-face` i `styles.css` og
bruges på about-siden. Sørg for at beholde filen i `fonts/`-mappen, når du
uploader — ellers falder siden tilbage til en standard-serif.

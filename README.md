# Angolapp 7. osztály

Önálló, GitHub Pages-kompatibilis alkalmazás. Első tartalmi egysége: Enter the Portal 3, 28–35. oldal, 3a–3d. Az olvasmányok és feladatok saját, átdolgozott tananyagok, nem a tankönyv hangfelvételei vagy oldalainak másolatai. A felület a 8. osztályos Angolapp mintáját követi. A magyar betűs kiejtés közelítő. Az audio/ mappában angol eSpeak gépi hangfájlok vannak, külön mondatokhoz, szavakhoz, hallásértéshez és teljes olvasmányokhoz. A lassú mód lejátszási sebességet állít.

## Bővítés
- A lessons.js végéhez új leckeobjektum adható egyedi, állandó azonosítóval. A lecke adatmezői: id, title, theme, reading, short, vocab, grammar, q, readQs, listen, writing, talk. Az egyes sorok szerkezete a meglévő leckékben látható. Az első két olvasásértési kérdésre a rövidített szövegnek is választ kell adnia.
- Új vagy módosított hangok: futtasd a `python generate-audio.py` parancsot (Node.js, eSpeak, FFmpeg szükséges). A szkript csak új vagy módosított szövegeket generál. A hangfájlokkal együtt kell közzétenni.
- A felület a leckéket automatikusan kilistázza; az új leckék megjelennek a Saját tesztben. A meglévő azonosítók megőrzése szükséges a helyi eredmények megtartásához.
- A tanári dolgozat külön hetedikes Apps Script kapcsolata a teacher-test/config.js fájlba kerül. Az üres konfiguráció mellett a gomb letiltott; nincs tényleges Google-táblázatos beküldés.

## Közzététel a Digitális Tanulóműhelyben
1. Hozz létre `lajkogabor1968/angolapp-7` nevű önálló GitHub-repozitóriumot; töltsd fel e csomag tartalmát a főág gyökerébe (ne egy másik alkalmazás almappájába).
2. Kapcsold be GitHub Pages-t: main branch, root. Ellenőrizd a tényleges megnyitást, a hangot és a telefonos működést.
3. A `lajkogabor1968/digitalis-tanulomuhely` repozitórium `index.html` állományában csak az Angol nyelv / 7. osztály tervezett AngolApp 7 bejegyzését cseréld: cím `AngolApp 7. oszt.`, címke `Interaktív alkalmazás`, leírás `Olvasmányok, szókincs, hallásértés, nyelvtan és tesztek.`, útvonal `angolapp-7/`. A noscript listában is szerepeljen. A többi bejegyzést és a tanári központot hagyd változatlanul. Ne adj hozzá linket az éles működés ellenőrzése előtt.
4. A hetedik és nyolcadik osztály legyen egymástól független, mindkettő külön URL-en elérhető, a Tanulóműhely csak hivatkozással gyűjtse őket össze.

## Ellenőrzési állapot
JavaScript szintaxis és adatszerkezeti ellenőrzés, valamint DOM-helyettesítővel a feladattípusok és a három szint generálásának ellenőrzése. A böngészős tesztet a környezet helyi URL-hozzáférési tiltása megakadályozta. Androidon még ténylegesen tesztelendő. GitHub-közzététel és a Tanulóműhely módosítása nem történt meg.

## Interaktív munkafüzet (23–28. oldal)
A leckék menüjében az Interaktív munkafüzet fül az adott lecke feladatcsoportjait mutatja. A workbook-data.js fájlban a lecke azonosítójához új csoportok adhatók: egyedi id, title, help, valamint items (prompt, answer, wrong, alternatives) vagy free (prompt, model). A zárt feladatok a Saját tesztbe is bevonhatók. A nyitott írásbeli válaszok csak helyben mentődnek; nem kapnak automatikus nyelvtani pontot. A nyomtatott keresztrejtvényeket, képes feladatokat digitális szókincsfeladatokká alakítottuk.

## Teszt és témazáró
A test-data.js külön bővíthető adatbank: új felméréshez egyedi id, title, description, sections (title, items, opcionális wordBank/reading/audio), opcionális writing. A tests.js külön felmérési felületet biztosít, csak beadás után mutatja a megoldást. A két Quiz 20-20 pont, a Module 2 65 gépi + 10 tanári íráspont. A Grammar A forrásán 11 üres hely látható, de 10 pont van megadva; a két részből álló did/paint válasz együtt egy pontot ér. A Listening az eredeti felvétel hiánya miatt új eSpeak-gyakorlóanyag, saját megoldókulccsal. A reading gépi javítása válaszváltozatokon alapul. A 4. egység tananyaga még nem része a leckéknek. A felmérések önálló gyakorlásra szolgálnak; az eredmények helyben tárolódnak, a tanári központ felé nincs beküldés. A nyilvános kliensoldali kód nem biztosít titkos vizsgafeladatokat.

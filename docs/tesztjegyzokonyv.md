# Tesztjegyzőkönyv

## Lépések

### Az alkalmazás betöltésének tesztelése

**Elvárt viselkedés:** Az alkalmazás a webcím meglátogatása után sikeresen
betöltődik, HTTP 200 headert küldve.

**Tényleges viselkedés:** Az alkalmazás a https://szfm-todo.herokuapp.com/ címen sikeresen betöltött.

### Az alkalmazás betöltésének tesztelése mobil nézetben

**Elvárt viselkedés:** Az alkalmazás mobil eszközről a webcím meglátogatása
után sikeresen betöltődik, HTTP 200 headert küldve.

**Tényleges viselkedés:** Az alkalmazás mobil eszközről is betöltődik a
https://szfm-todo.herokuapp.com/ címen.

### Todo lista hozzáadása

**Elvárt viselkedés:** A todo listát a név beírása után a rendszer felvezi a
kezelt listák közé.

**Tényleges viselkedés:** A todo listát a rendszer felvette.

### Todo elem hozzáadása listához

**Elvárt viselkedés:**  Lista kiválasztása után bármennyi todo elemet
felvihetünk a todo listákhoz.

**Tényleges viselkedés:** A lista kiválasztása után sikerült todo elemet
felvinnem.

### Todo elem törlése listából

**Elvárt viselkedés:** Meglévő todo elem törölhető a kuka gomb megnyomásával a
listából.

**Tényleges viselkedés:** Sikerült törölnöm hozzáadott lista elemeket.

### Stílus ellenőrzése

**Elvárt viselkedés:** Az alkalmazás hű a képernyőtervekhez.

**Tényleges viselkedés:** Az alkalmazás asztali nézetben hű az előre
elkészített képernyőtervhez.

### Todo listák perzisztenciája

**Elvárt viselkedés:** A todo listák az oldal újratöltése után nem törlődnek
bármely kurrens böngészőben.

**Tényleges viselkedés:** A tesztelés során azt tapasztaltam, hogy a todo
listák megmaradnak az újratöltést követően.

### Todo elemek perzisztenciája, újratöltéskor megjelenés a megfelelő listában

**Elvárt viselkedés:** A todo elemek a megfelelő todo listában kerülnek
betöltésre az oldal újratöltését követően.

**Tényleges viselkedés:** A todo elemek megjelentek a megfelelő listában,
továbbra is törölhetőek maradtak, illetve tudtam új elemet felvinni.

### Két todo lista ugyanazzal a névvel, mentés tesztelése

**Elvárt viselkedés:** Nem okoz gondot a rendszernek, ha két todo listának
ugyanaz a neve, ugyanúgy képes különböző todo elemeket tárolni, és betöltésnél
a megfelelőeket választja ki.

**Tényleges viselkedés:** Kettő vagy több darab todo lista azonos névvel nem
okozott semmilyen gondot.

### Több todo elem ugyanazzal a névvel, mentés tesztelése

**Elvárt viselkedés:** Azonos nevű todo elemek esetén az oldal különbséget tud
tenni közöttük, pl. törlésnél nem törli ki mindkettőt, csak az egyiket.

**Tényleges viselkedés:** Az azonos nevű todo elemek kezelése nem okozott
anomáliákat.

### Több todo elem ugyanazzal a névvel, törlés tesztelése

**Elvárt viselkedés:**

**Tényleges viselkedés:**

## Todo lista kiválasztásának tesztelése a memóriában

**Elvárt viselkedés:** A böngésző localstorage-ában a current lista értéke
átvált a kiválasztott lista indexére.

**Tényleges viselkedés:** A listák rendelkeznek egy key attribútummal, ami a sorrendjüket írja le.
Ez az attribútum kerül megadásra egy függvénynek onClick eventnél majd adódik át a dispatch függvénynek,
ami átírja a current lista értékét.

### A Funkció manuális tesztelésének eredményei

| rákattintott lista  | current változó várt értéke | current változó értéke |
|:-------------------:|:---------------------------:|:----------------------:|
| nincs (alaphelyzet) |              -1             |           -1           |
|          1.         |              0              |            0           |
|          4.         |              3              |            3           |

## Todo lista hozzáadásának tesztelése a memóriában

**Elvárt viselkedés:** A lista bekerül a listák tömbjébe a böngésző localstorage-ában.

**Tényleges viselkedés:** A lista bekerül a listák tömbjébe. Az add gomb megnyomásakor ha lista nevét tartalmazó
 form nem üres a hozzáadást kezelő függvény létrehoz egy új lista objektumot amit paraméterként átad a dispatch
függvénynek, ami hozzáfűzi a már meglévő listákhoz.


### A Funkció manuális tesztelésének eredményei

| hozzáadott lista neve |  listák tömbje hozzáadás előtt  |                      listák várt tömbje                      |                         listák tömbje                        |
|:---------------------:|:-------------------------------:|:------------------------------------------------------------:|:------------------------------------------------------------:|
|  nincs (alaphelyzet)  |                []               |                              []                              |                              []                              |
|         todos1        |                []               |                [[{name: "todos1", todos: []}]]               |                [[{name: "todos1", todos: []}]]               |
|           4.          | [[{name: "todos1", todos: []}]] | [[{name: "todos1", todos: []}, {name: "todos2", todos: []}]] | [[{name: "todos1", todos: []}, {name: "todos2", todos: []}]] |

## A címként a kiválasztott lista jelenik meg

**Elvárt viselkedés:** A header közepén a legutoljára kiválasztott lista neve jelenik meg, ha nincs kiválasztva lista a "No Todos yet." szöveg jelenjen meg.

**Tényleges vislkedés:**
A header cím értéke egy feltételes utasítással kerül megadásra, ha a current változó
értéke kezdőérték, akkor a "No Todos yet" szöveg jelenik meg, egyébként a jelenlegi lista neve.

### A Funkció manuális tesztelésének eredményei

| kiválaszott lista neve | header várt címe |  header címe  |
|:----------------------:|:----------------:|:-------------:|
|   nincs (alaphelyzet)  |  Not Todos yet.  | No Todos yet. |
|          todo0         |       todo0      |     todo0     |
|         todos1         |      todos1      |     todos1    |
|         todos3         |      todos3      |     todos3    |


## Számítógép/mobiltelefon megjelenítésnek ugyan azon viselkedésének tesztelése

### Az alkalmazás számítógépen/telefonon való megjelenítése

**Elvárt viselkedés:** Az alkalmazás számítógépen illetve telefonon ugyan azon
megjelenítése.

**Tényleges viselkedés:** Mobiltelefonon az alkalmazás jobb oldaláról leszakad
az "Add" gomb, kicsinyítésnél láthatóvá válik.

### Listák hozzáadása telefonos megjelenítésben.

**Elvárt viselkedés:** Az alkalmazás mobil nézetből ugyanúgy képes listákat
létrehozni/menteni, mint számítógépes megjelenítésből.

**Tényleges viselkedés:** A listák létrehozása nem okoz gondot mobilos nézetben.

### Checkboxok/textmezők szétcsúszása mobilos megjelenítésben.

**Elvárt viselkedés:** Mobiltelefonos nézetben nem csúsztak el a "textmezők"
illetve "checkboxok" sem.

**Tényleges viselkedés:** Megfelelően működött a megjelenítés, a checkboxok/textmezők
között nem volt szétcsúszás.

### Képernyőtervhez való igazodás mobil megjelenítésben.

**Elvárt viselkedés:** Az alkalmazás megfelel a képernyőtervnek mobilnézetben.

**Tényleges viselkedés:** Az alkalmazás mobil nézetből hű a képernyőtervhez.

### Kuka gomb megjelenítése mobil nézetből.

**Elvárt viselkedés:** A kuka ikon megfelelőn megjelenítődik.

**Tényleges viselkedés:** Az ikon ugyanúgy megjelenik a kijelzőn mint számítógépen.

### Teljesített elemek kipipálása/majd azok megtartása új elemek hozzáadásánál
mobil nézetben.

**Elvárt viselkedés:** Teljesítettnek tudunk minősíteni egy feladatot, ha kipipáljuk,
majd ezek megmaradnak egy új elem felkerülésénél a listára.

**Tényleges viselkedés:** Teljesítetté tudunk nyilvánítani egy feladatot, ha kipipáljuk,
viszont a pipa eltűnik amikor új elemet adunk hozzá a listánkhoz.

### Betűk illetve ikonok összesűrűsödése/leszakadása telefon nézetben.

**Elvárt viselkedés:** Nem történnek sűrűsödések/leszakadások mobil nézetben.

**Tényleges viselkedés:** A betűk illetve ikonok nem sűrűsödnek, nem szakadnak le
mobil nézetben.

### Egyes fix elemek elcsúszása

**Elvárt viselkedés:** A fejléc illetve egyes gombok nem csúsznak el mobil
megjelenítésben.

**Tényleges viselkedés:** A fejléc sáv nem húzódik végig bal oldalról egészen
a kijelző jobb oldaláig, hanem megszakad.

### Elemek középre való centírozása mobil nézetben.

**Elvárt viselkedés:** Az elemek megfelelő helyükre(középre) kerülnek a megjelenítésben.

**Tényleges viselkedés:** Mobilos nézetben az elemek kilistázásáért felelős elem
nem középre kerül(balra elcsúszik).

### Lista létrehozása utáni texztmező törlése.

**Elvárt viselkedés:** Számítógépen illetve mobilnézetben is törlődik a lista neve
miután létrehoztuk azt.

**Tényleges viselkedés:** Tesztelésem során sem számítógépes sem mobil nézetben
nem törlődött az általam megadott listanév, hanem "textmezőben" maradt benne.

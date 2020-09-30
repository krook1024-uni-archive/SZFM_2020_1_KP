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

**Tényleges viselkedés:** A listák rendelkeznek egy key attribútummal, ami a sorrendjüket írja le. Ez az attribútum kerül megadásra egy függvénynek onClick eventnél majd adódik át a dispatch függvénynek, ami átírja a current lista értékét. 

## Todo lista hozzáadásának tesztelése a memóriában 

**Elvárt viselkedés:** A lista bekerül a listák tömbjébe a böngésző localstorage-ában. 

**Tényleges viselkedés:** A lista bekerül a listák tömbjébe. Az add gomb megnyomásakor ha lista nevét tartalmazó form nem üres a hozzáadást kezelő függvény létrehoz egy új lista objektumot amit paraméterként átad a dispatch függvénynek, ami hozzáfűzi a már meglévő listákhoz. 




# Adatbázisterv 

A projekthez nem tervezünk külső adatbázist használni, az adatokat a
böngésző localstorage-ában fogjuk tárolni. Ezzel a megoldással
10 MB-ig tárolhatunk adatokat, amelyek még akkor is fennmaradnak,
ha a böngőszőt már bezárjuk, illetve nincsen lejárati idejük sem.
Előnyük, akár a session-ökkel szemben hogy duplaannyi adatot tárolhatunk
illetve nem csak a böngésző adatott ablakában elérhetők.

A localstorage kezelésére a JavaScirpt Window interfészének localStorage
elemét fogjuk használni. Ez elérést biztosít egy Storage objektumhoz,   
amiben kulcs-érték párokban tárolhatjuk az adatokat. Ezen kívül rendelkezésre  
állnak beépített metódusok az adatok hozzáadásához, lekéréséhez, szerkesztéséhez 
illetve törléséhez.

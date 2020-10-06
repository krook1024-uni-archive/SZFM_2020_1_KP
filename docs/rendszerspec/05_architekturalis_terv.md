# Architekturális terv

## Tervezési minta

MVC - (model-view-controller) tervezési minta alkalmazása, kialakítása.

## Alkalmazás rétegei, komponensei

Még kidolgozás alatt állnak.

Az alkalmazás a következő komponensekből fog állni:

- `App` komponens: tartalmazza a többi komponenst, betölti a kontextust
    - `Header`: a fejlécért és a listák közötti váltásért felel
    - `TodoForm`: az új elemek hozzáadásáért felel
    - `TodoList`: kilistázza az egyes elemeket és lehetőséget ad azok elkészültként való megjelölésére is

## Változások kezelése

A programozási konvencióknak megfelelően. Könnyen és egymástól függetlenül
változtathatók a programunk egyes részei, komponensei az igénynek megfelelően.

## Bővíthetőség

Skálázhatóság szempontjából, és új funkciók hozzáadásával mind bővíthető az
alakalmazásunk.

## Biztonsági funkciók

Az alkalmazásunk semmilyen kiemelkedőbb biztonsági funkcióval nem rendelkezik, 
mivel nem tárol érzékeny adatokat a felhasználóról.
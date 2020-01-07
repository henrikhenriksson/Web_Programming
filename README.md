# DT146 WebbProgrammering med HTML5, CSS3 och JavaScript

## Miun Höstterminen 2019

## Utvecklingsmiljö & Verktyg

- Operating System: Windows 10 Home 64 bit.
- IDE: Visual Studio Code 1.4
- GIT: Version 2.23.0 for Windows
- Browsers: Firefox and Chrome for Windows
- Validation Tool: W3C Markup Validation Service,
- ESLint for Javascript.

## Syfte

Uppgiften har som huvusakligt syfte att studenten ska ges möjlighet att tillämpa kursens innehåll för att lösa ett större projektarbete, och därigenom visa prov på kunskaper imom HTML5, CSS3 och JavaScript. Under uppgiftens gång ska en webbapplikation konstrueras.

Webbapplikationen ska bestå av en HTML-sida, extern stilmall och ett stort fokus på funkionalitet i JavaScript. Målet är att skapa en applikation som mäter användarns skrivhastighet och träffsäkerhet på tangentbordet. Applikationen ska kunna återge statistik gällande hastighet och felsäkerhet.

För grundbetyg ska en fungerande implementation skapas och högre betyg ställer krav på utökad funktionalitet, vilket ger studenten möjlighet att visa prov på ytterligare kunskaper inom HTML5, CSS3 och JavaScript.

## Genomförande

För lösningens utförande har jag till en början skapat projektets fil- och folderstruktur. Arbetet börjar med en index.html fil. I denna har jag skapat sektioner och undersektioner för websidans olika delar. Dokumentet tillförs länkar till de CSS stylesheet och javasScript som skapats i projektets subfolders. Jag valde att skapa hela strukturen för html filen utan någon direkt styling för att få allt på plats med placeholders, varje sektion har även tilldelats unika idn med hänsyn till den styling och script funktionalitet som ska tillföras. Dessa placeholders som helt saknar funktionalitet underlättar vid skrivandet av .css dokumentet för att på ett smidigt sätt kunna styra stylingen. Jag valde också att till en början främst fokusera på betyget E och utöka funktionalitet därefter.
Arbetet har genomgående utförts genom att först skriva rudimentär "skelettkod" som sedan byggs på med ytterligare delar allt eftersom projektet framskrider. Efter att html koden fyllts med taggar har dessa stylats med .css kod och websidans sektioner utformats med bakgrunder, ramar och text-stilar. Jag har för att öka läsbarheten delat upp mitt .css dokument efter de sektioner som hemsidan kommer att bestå av. på så sätt får alla taggar som ligger inom header respektive main sina egna "sektioner" inom .css dokumentet.
Först därefter har jag påbörjat arbetet med javascript dokumentet, eftersom jag då fått en klarare bild av vad jag vill tillföra varje enskild sektion. I denna fas har jag även omvärderat och ändrat något i strukturen i html filen med hänsyn till javascriptet.
När jag påbörjade arbetet med javascript dokumentet började jag med att skapa ett "class" object som skulle kunna innehålla en enskild citation som lästs in. Jag upptäckte dock när jag skapade listan som skulle innehålla dessa objekt att jag i det här läget inte behövde denna klass, eftersom jag hårdkodat samtliga citationer direkt i denna lista.
Jag har byggt i princip all kod inom scriptet inom klassen "UI", eftersom funktionerna då kan göras statiska och laddas in direkt när hemsidan laddats klart. Klassen skapades även med tanken om att ytterligare funktionalitet skulle kunna tillföras i andra klasser i samverkan. Ytterligare en fördel med att skriva koden inom en klass är att klassen kan tillföras instansvariabler som manipuleras av koden som inte är direkt tillgängliga utanför klassen.
Scriptet är satt till att vänta på att hemsidan laddats klart innan starfunktionen kallas, som har som uppgift att ladda in de hårdkodade texterna i första hand och därefter skapa de event listeners som appen behöver för att köras. Jag har inte samlat samtliga event listeners i samma funktion eftersom vissa, som hurvida listener ska ligga för key logs ska kunna stängas av och startas dynamiskt när användaren kör programmet. Scriptet har tack vare strukturen som skapats kunnat tillföras funktionalitet löpande. Jag vill jämföra mitt arbete som en byggnad som uppförs med först stommarna och stålbalkar som skapat "rum" genom html dokumentet, därefter har css stylingen tillfört färg och tapeter till väggar, golv och tak, jag har sedan kunnat med javascript fyllt dessa rum med innehåll.
De utökade fontalternativen jag inkluderat i projektet har hämtats från googles webfonts. Jag har även från googles resurser hämtat de material icons som används för star och stop knappen.

Den största problematiken som uppstått har varit vid skapandet av struktur med css, att få allt att hamna där man avsett att de ska hamna, utan at för den delen påverka resterande objekt. Funktioner inom javascript och hur de samverkar kan ibland kännas svårgreppbart. Detta problem har blivit enklare att hantera genom att deklarera funktionerna inom en klass. Jag är i skrivande stund inte helt nöjd med strukturen på mitt script. Främst att citationerna är hårdkodade i javascriptet. Jag önskar tillföra funktionalitet för att kunna läsa in direkt från fil. I vissa fall har det varit svårt att tolka precis vad som efterfrågas i projektbeskrivningen, men jag föreställer mig att detta är vanligt när man som exempelvis konsult mottar en kravspecifikation på en app från en kund. Dessa problem har jag främst löst genom idogt googlande efter lösningar eller förslag till dessa som går att applicera i det här programmet. För att lösa frågeställningar kring kravspecifikationen har jag även utbytt tankar och information med mina medstundenter på campus och distans. Projektbeskrivningen har dock varit bra på så sätt att man fått klara tips om hur vissa problem kan lösas, exempelvis hur den bokstav som ska skrivas bör highlightas och att detta kan lösas genom att lägga till spans. Det problem jag spenderat mest tid på i det här projektet var att lösa själva highlightningen av "Nästa karaktär". I den lösning som nu presenteras väljer jag att direkt vid start highligta den första karaktären i strängen, och påbörja uppräkningen först efter att användern tryckt på första tangenten. Jag hade hellre sett en lösning där start_Program funktionen endast gör ett funktionsanrop, men detta ledde till problem med uppräkningen på slutet, vilket ledde till att programmet försökte highligta karaktärer efter att slutet på texten nåtts.

### Metodsammanfattning

### _Planering_

En grov skiss har uppförsts för de olika delar websidan kommer att behöva. I första hand för html och css dokumenten När dessa därefter gått vidare till senare faser har planeringsfasen för javascript påbörjats.

### _Implementering_

I första hand har websidans utformning skapats med placeholder text. Därefter har javascriptet påbörjats. Eftersom implementeringen av html och css stylingen gett tydliga funktionalitetskrav har funktioner kunnat skrivas löpande "uppifrån och ner". På så sätt har sektionen som visar text fått innehåll, därefter har funktionaliteten för input rutan utveckalts och så vidare

### _Testning och Revidering_

Löpande under projektets gång har behov uppstått för revideringar. En återgång till planeringsstadiet för vissa funktioner har även uppstått och kod reviderats med hänsyn till kraven för högre betyg än E tagits. På samma sätt har funkionaliteten löpande testats med hjälp av live server och gammal hederlig "got here" debugging genom på lämpliga ställen utplacerade "console.log()"
Utöver detta har texten löpande validerats med hjälp av relevanta verktyg som specificerats ovan.

## Diskussion

Projektet har påvisat vilken mängd arbete som går in i en vanlig webbapplikation. Även om projektet i omfattning inte är stort har jag ändå skrivit över 300 rader kod i javascript. Projektet har varit intressant och utmanande på så sätt att jag verkligen fått möjlighet att använda de moment vi gått igenom tidigare i kursen och utveckla dessa för mer avancerade funktioner. Vid arbetets början var den främsta utmaningen att planera hur websidan skulle utformas. Jag har även med hänsyn till tidsåtgång behövt göra avvägningar för hur mycket funktionalitet som ska tillföras och på vilket sätt. Min förhoppning är att dessa avvägningar trots allt lett till läsbar och smidig kod utan redundans eller onödigt krävande funktioner. Jag tycker att jag under projektets gång fått en bättre förståelse för språket Javascript och hur väl detta samverkar med HTML5. Min HTML kod är därför enligt mig mycket bättre utformad än exempelvis koden jag skrev för kursens laborationer, eller för övrigt all tidigare kod jag skrivit inom html. Tidigare kändes scriptets samverkan med html dokuemntet luddigt, och jag var i större grad beroende av att ha "placeholders" som berättade för mig var saker borde ligga. Jag känner nu att jag i större utsträckning kan skriva html koden med hänsyn till hur jag föreställer mig att mitt script kommer att se ut och vilket innehåll jag kan tillföra med hjälp av detta.

Jag vill argumentera för att projektets syfte är uppfyllt. Slutresultatet är en hemsida bestående av html dokument stöttat med css styling och javascript funktionalitet. Användaren presenteras med en centrerad sida med responsiv layout tänkt att kunna anpassas efter olika skärmstorlekar. Användaren får välja från ett antal citationer där skrivförmågan kan prövas när användaren väljer att starta testet. Löpande under testets gång uppdateras statistik om hur många ord per minut användaren skriver och med vilken träffsäkerhet. Användaren får information om vilka karaktärer som missats eller klarats av genom att textfärgen byts allt eftersom användaren skriver orden i citationen.

Jag har visat prov på att jag i projektet kunnat tillämpa de kunskaper inom html, css och javascript som vi förväntats tagit till oss under kursens gång. Arbetet har flutit på väl och som tidigare nämnts har mina begränsningar främst handlat om tid.

## Referenser

- [keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
- [Clear input field](https://www.w3schools.com/howto/howto_html_clear_input.asp)
- [Gettime() funktion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
- [Material Icons](https://material.io/resources/icons/?style=baseline)
- [Google Fonts](https://fonts.google.com/)
- [font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)

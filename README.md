## Laboration TEMPLATE

## Utvecklingsmiljö & Verktyg

- Operating System: Windows 10 Home 64 bit.
- IDE: Visual Studio Code 1.4
- GIT: Version 2.23.0 for Windows
- Browsers: Firefox and Chrome for Windows
- Live Server Code extension
- Validation Tool: W3C Markup Validation Service,
  ESLint for Javascript.

## Hantering

För att köra programmet har jag använt mig av "Live Server" vilket är en extension till Visual Studio Code. Visual studio code skapar en local server med live reload. Detta har visat sig blivit ett krav för att inläsning från fil ska fungera korrekt i nuvarande implementation.

## Syfte

Uppgiften har som huvusakligt syfte att studenten ska ges möjlighet att tillämpa kursens innehåll för att lösa ett större projektarbete, och därigenom visa prov på kunskaper imom HTML5, CSS3 och JavaScript. Under uppgiftens gång ska en webbapplikation konstrueras.

Webbapplikationen ska bestå av en HTML-sida, extern stilmall och ett stort fokus på funkionalitet i JavaScript. Målet är att skapa en applikation som mäter användarns skrivhastighet och träffsäkerhet på tangentbordet. Applikationen ska kunna återge statistik gällande hastighet och felsäkerhet.

För grundbetyg ska en fungerande implementation skapas och högre betyg ställer krav på utökad funktionalitet, vilket ger studenten möjlighet att visa prov på ytterligare kunskaper inom HTML5, CSS3 och JavaScript.

## Genomförande

Jag påbörjade projektet genom att lägga upp en struktur för hur filstrukturen skulle se ut. Jag började med att skriva för lägsta godkända betyg E med avsikt att med hänsyn till återstående tid utöka applikationen i enligthet med kraven för högre betyg steg för steg. Jag skapade till en början filer för html, css och javascript som jag initialt lämnade utan innehåll. Jag gick därefter igenom specifikationen och staplade upp html-taggar som är tänkta som den ram applikationen kommer byggas inom. HTML koden har strukturerats upp med head, body, header, main och footer. Jag har inom dessa sedan skapat undertaggar, vilka jag tilldelat unika IDn för att kunna identifiera med javascript och styla med css. Jag valde därefter att påbörja själva stylingen av websidan med css och först därefter påbörja arbetet med javascript. Jag valde att arbeta på det här sättet eftersom jag tycker att det är lättare att skriva funktioner när man vet var "allt ska hamna". För att underlätta stylingen har jag i stort använt mig av placeholders som simulerar innehåll. För att underlätta läsbarheten av stildokumentet har jag delat upp innehållet i de sektioner i HTML dokumentet som stylingen avser. När således min websida hade önskvärt utseende påbörjade jag arbetet med mitt javascript. Detta arbete började jag med att först för mig själv skissa upp en strutur över vilka funktioner jag vill ha, och vilken uppgift de ska ha, i syfte att inte ha för många funktioner som gör mer än de bör eller behöver. Till en början skapade jag manuellt en JSON sträng som innehåller alla citations-objekt, eftersom jag visste att jag om tiden tillåter kommer att implementera funtion för inläsning från fil, och att jag då kommer att använda .json format på inläsningen. Jag valde att dela upp själva javascriptet i klasser. Till en början hade jag tanken att fler klasser skulle kunna skapas, men i slutändan blev det endast två. Dock anser jag att användandet av en klass som utför det mesta på arbetet torde leda till bättre modularitet i det fall man exempelvis skulle vilja utöka hemsidan med mer funktionalitet, som då skulle kunna hållas till en separat klass. Själva javascriptet är uppbyggt på så sätt att det först väntar att hela hemsidan har laddats, därefter initeras startfunktionen som i sin tur laddar in texterna till en array av citations-objekt och därefter initierar eventlisteners. Scriptet följer därefter användarens input och handlingar. Jag har försökt strukturera upp koden med felkontroller för att förbättra användarupplevelsen. Under hela tiden som arbetet pågått har jag vid behov reviderat min HTML eller .CSS kod när nya behov uppstått. Skrivandet av scriptet har varit "levande" och jag har i vissa fall flyttat runt funktionsanrop och metoder utöver hur jag tidigare planerat för att slutresultatet ska bli korrekt. När jag väl uppfyllt de lägstakraven som lagts för godkänd påbörjade jag återigen en revidering av HTML och framförallt CSS. Jag valde här exempelv att ladda ner tre fontar från googleFonts för att använda dessa i dokumentet, och därigenom uppfylla högre betygskrav.

De största problemen jag haft under skrivandet av detta projekt har främst varit skapandet av en god struktur med .css och debugging av javascriptet. Problemen med css styling har ibland inneburit att man får göra vissa eftergifter från hur min ursprungliga vision var och ett hanterbart slutresultat. Problem har även uppstått vid skrivandet av javascript, som är ett språk jag inte riktigt vant mig vid ännu, men framförallt inte när jag påbörjade projektet. Fördelen med javascript är att det finns mängder av material att tillgå på internet, både officiella och via frågeforum. De flesta problem som uppstått har jag kunnat lösa med hjälp av dessa resurser, men även mina studiekamrater i kursen, då främst genom utbyte av källor och lösningar för vissa specifika problem. Även själva projektbeskrivningen har varit behjälplig genom att hänvisa till relevanta källor för att lösa exempelvis hur den bostav som ska skrivas kan markeras med färg. Denna funktionalitet har dock varit den jag spenderat i särledes mest tid på. Att lösa själva highlightningen av "Nästa karaktär". I den lösning som nu presenteras väljer jag att direkt vid start highligta den första karaktären i strängen, och påbörja uppräkningen först efter att användern tryckt på första tangenten. Jag hade hellre sett en lösning där start_Program funktionen endast gör ett funktionsanrop, men detta ledde till problem med uppräkningen på slutet, vilket ledde till att programmet försökte highligta karaktärer efter att slutet på texten nåtts. Gällande felsökning har jag under projektets gång insett fördelen av att debugga med olika browsers, vissa funktioner som verkar fungera ostört i en browser kan orsaka fatala fel i en annan, därigenom har jag fått använbar information för att på så sätt utöka modulariteten av applikationen.

## Metodsammanfattning

En grov skiss har uppförsts för de olika delar websidan kommer att behöva. I första hand för html och css dokumenten När dessa därefter gått vidare till senare faser har planeringsfasen för javascript påbörjats.
I första hand har websidans utformning skapats med placeholder text. Därefter har javascriptet påbörjats. Eftersom implementeringen av html och css stylingen gett tydliga funktionalitetskrav har funktioner kunnat skrivas löpande "uppifrån och ner". På så sätt har sektionen som visar text fått innehåll, därefter har funktionaliteten för input rutan utveckalts och så vidare
Löpande under projektets gång har behov uppstått för revideringar. En återgång till planeringsstadiet för vissa funktioner har även uppstått och kod reviderats med hänsyn till kraven för högre betyg än E tagits. På samma sätt har funkionaliteten löpande testats med hjälp av live server och gammal hederlig "got here" debugging genom på lämpliga ställen utplacerade "console.log()"
Utöver detta har texten löpande validerats med hjälp av relevanta verktyg som specificerats ovan.

## Diskussion

Jag vill argumentera för att projektets syfte är uppfyllt. Slutresultatet är en hemsida bestående av html dokument stöttat med css styling och javascript funktionalitet. Användaren presenteras med en centrerad sida med responsiv layout tänkt att kunna anpassas efter olika skärmstorlekar. Användaren får välja från ett antal citationer, beroende på språkval, där skrivförmågan kan prövas när användaren väljer att starta testet. Citationstexterna i sin tur har laddats in från en .json fil placerad i root mappen. Utöver detta får användaren även välja om hänsyn till gemener eller versaler ska tas. Löpande under testets gång uppdateras statistik om hur många ord per minut användaren skriver och med vilken träffsäkerhet. Användaren får information om vilka karaktärer som missats eller klarats av genom att textfärgen byts allt eftersom användaren skriver orden i citationen. Implementationen är lämplig med hänsyn till projektets omfattning och den tid som tilldelats. Min implementation har varit enligt mig varit strukturerad, och enkel att följa. Ett annan implementationsform som hade kunnat övervägas är att skriva utifrån själva javascriptet, och tillföra taggar i HTML allt eftersom funktionerna utvecklas. Som jag argumenterat för ovan anser jag dock att min metod varit enklare eftersom jag hela tiden haft ett "skal" att arbeta efter, vilket inte tagit mycket tid i anspråk att sätta upp, när kravspecifikationen varit så tydlig som den är. Jag har utgått från föreställningen att jag är hyrd konsult som fått i uppdrag att utveckla denna hemsida inom en viss tid och agerat därefter. Jag föreställer mig att min metod därmed medfört fördelen att det alltid funnits "något att visa upp". För i stort kan man säga att min webapplikation till utseendet inte ändrats mycket från då min styling blev klar och under tiden jag tillfört fler och fler funktioner och metoder.

Projektet har påvisat vilken mängd arbete som går in i en vanlig webbapplikation. Även om projektet i omfattning inte är stort har jag ändå skrivit över 300 rader kod i javascript. Projektet har varit intressant och utmanande på så sätt att jag verkligen fått möjlighet att använda de moment vi gått igenom tidigare i kursen och utveckla dessa för mer avancerade funktioner. Vid arbetets början var den främsta utmaningen att planera hur websidan skulle utformas. Jag har även med hänsyn till tidsåtgång behövt göra avvägningar för hur mycket funktionalitet som ska tillföras och på vilket sätt. Min förhoppning är att dessa avvägningar trots allt lett till läsbar och smidig kod utan redundans eller onödigt krävande funktioner. Jag tycker att jag under projektets gång fått en bättre förståelse för språket Javascript och hur väl detta samverkar med HTML5. Min HTML kod är därför enligt mig mycket bättre utformad än exempelvis koden jag skrev för kursens laborationer, eller för övrigt all tidigare kod jag skrivit inom html. Tidigare kändes scriptets samverkan med html dokuemntet luddigt, och jag var i större grad beroende av att ha "placeholders" som berättade för mig var saker borde ligga. Jag känner nu att jag i större utsträckning kan skriva html koden med hänsyn till hur jag föreställer mig att mitt script kommer att se ut och vilket innehåll jag kan tillföra med hjälp av detta.

Jag har visat prov på att jag i projektet kunnat tillämpa de kunskaper inom html, css och javascript som vi förväntats tagit till oss under kursens gång. Arbetet har flutit på väl och som tidigare nämnts har mina begränsningar främst handlat om tid. Projektarbetet har varit utmanande men roligt, men framförallt lärorikt. Jag känner att jag utökat mina kunskaper inom området, och känner mig framförallt säkrare på hantering och skrivande av javascript. Även laborationerna har varit lärorika. Det jag främst saknat är utförligare lektionsmaterial där relevant information samlats tillsammans med länkar till webmaterial. På så sätt har laborationerna förberett mig väl inför projektet, om än inte själva lektionsmaterialet.

## Referenser

- [keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
- [Clear input field](https://www.w3schools.com/howto/howto_html_clear_input.asp)
- [Gettime() funktion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
- [Material Icons](https://material.io/resources/icons/?style=baseline)
- [Google Fonts](https://fonts.google.com/)
- [font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Radio-Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
- [XMLHttpRequest-Video](https://www.youtube.com/watch?reload=9&v=82hnvUYY6QA&start=1086s)
- [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

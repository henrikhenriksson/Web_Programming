/*
    File:       main.js
    Author:     Henrik Henriksson
    Student ID: hehe0601¨
    Contact:    hehe0601@student.miun.se
    Version:    1.0
    Created:    2019-12-18
*/

// Might come in use Later. Current implementation does not use Class objects of this type.
// class Citation {
//   constructor(title, author, language, text) {
//     this.title = title;
//     this.author = author;
//     this.language = language;
//     this.text = text;
//   }
// }

// The UI class handles tasks that change the way the website functions.
class UI {
  constructor() {
    this.citations = [];
  }
  //---------------------------------------------------------------------------
  static load_Citations() {
    const STORED_CITATIONS = [
      {
        title: 'Förändingens Tid',
        author: 'Erik Ström',
        language: 'swedish',
        text:
          'Vinden viner över sällsamma ruiner, över berg och slätter, dagar som nätter.Ger världen form inför den kommande storm, likt gudars sång, skall bli dess undergång.Svart som natten, blank likt vatten, i skyn du häver då Allfader kräver.Åter resas skall nu han, som i misteln döden fann.Sonas med sin ene broder, den blinde född av samma moder.Satt att råda är de båda, bröders hand över evigt land.'
      },
      {
        title: 'Moln',
        author: 'Karin Boye',
        language: 'swedish',
        text:
          'Se de mäktiga moln, vilkas fjärran höga toppar stolta, skimrande resa sig, vita som vit snö! Lugna glida de fram för att slutligen lugnt dö sakta lösande sig i en skur av svala droppar. Majestätiska moln - genom livet, genom döden gå de leende fram i en strålande sols sken utan skymmande oro i eter så klart ren, gå med storstilat, stilla förakt för sina öden.'
      },
      {
        title: 'Jag har en dröm',
        author: 'Martin Luther King Jr.',
        language: 'swedish',
        text:
          'Så säger jag er, mina vänner, att jag trots dagens och morgondagens svårigheter har en dröm. Det är en dröm med djupa rötter i den amerikanska drömmen om att denna nation en dag kommer att resa sig och leva ut den övertygelsens innersta mening, som vi håller för självklar: Att alla människor är skapade med samma värde.'
      },
      {
        title: 'Doktor Glas',
        author: 'Hjalmar Söderberg',
        language: 'swedish',
        text:
          'Jag stod vid pastor Gregorius bädd; han låg sjuk. Övre delen av hans kropp var blottad, och jag lyssnade på hans hjärta. Sängen stod i hans arbetsrum; en kammarorgel stod i ett hörn, och någon spelade på den. Ingen koral, knappt en melodi. Bara formlösa fugaartade tongångar fram och tillbaka. En dörr stod öppen; det oroade mig, men jag kunde inte komma mig för att få den stängd.'
      },
      {
        title: 'Katherine',
        author: 'Abraham Lincoln',
        language: 'english',
        text:
          'I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have. I must stand with anybody that stands right, and stand with him while he is right, and part with him when he goes wrong.'
      },
      {
        title: 'Love and Weirdness',
        author: 'Dr. Seuss',
        language: 'english',
        text:
          "We are all a little weird and life's a little weird, and when we find someone whose weirdness is compatible with ours, we join up with them and fall in mutual weirdness and call it love."
      },
      {
        title: 'Integrity',
        author: 'Francis Bacon',
        language: 'english',
        text:
          "It's not what we eat but what we digest that makes us strong; not what we gain but what we save that makes us rich; not what we read but what we remember that makes us learned; and not what we profess but what we practice that gives us integrity."
      },
      {
        title: 'The Odyssey',
        author: 'Homer',
        language: 'english',
        text:
          'May the gods grant you all things which your heart desires, and may they give you a husband and a home and gracious concord, for there is nothing greater and better than this - when a husband and wife keep a household in oneness of mind, a great woe to their enemies and joy to their friends, and win high renown.'
      }
    ];
    //Add the stored citations to the array.
    UI.citations = STORED_CITATIONS;

    UI.citations.forEach(citation => UI.addCitationsToList(citation));
  }
  static addCitationsToList(citation) {
    const list = document.querySelector('#text_Selector');

    const OPTION = document.createElement('option');
    OPTION.value = citation.title;
    OPTION.text = citation.title;

    list.appendChild(OPTION);
  }
  //---------------------------------------------------------------------------
  static createEventListener() {
    document
      .getElementById('text_Selector')
      .addEventListener('change', UI.getOptionVal, false);
  }
  //---------------------------------------------------------------------------
  static getOptionVal(event) {
    let selection = event.target.value;
    console.log(selection);

    if (selection != 'Select a Text...') {
      let Chosen_Citation = UI.citations.find(
        ({ title }) => title === selection
      );

      UI.displayCitation(Chosen_Citation);
    }
  }
  //---------------------------------------------------------------------------
  static displayCitation(Chosen_Citation) {
    document.getElementById('text_Header').innerHTML = Chosen_Citation.title;
    document.getElementById('text_Author').innerHTML = Chosen_Citation.author;

    let word_Counter = UI.getWordCount(Chosen_Citation.text);

    document.getElementById('word_Count').innerHTML = word_Counter;

    let char_Counter = UI.getCharCount(Chosen_Citation.text);

    document.getElementById('char_Count').innerHTML = char_Counter;

    document.getElementById('citations').innerHTML = UI.addSpan(
      Chosen_Citation.text
    );
  }
  //---------------------------------------------------------------------------
  static getWordCount(pText) {
    return pText.split(' ').length;
  }
  //---------------------------------------------------------------------------
  static getCharCount(pText) {
    return pText.length;
  }
  //---------------------------------------------------------------------------

  static addSpan(text) {
    let text_Array = text.split('');

    let spanned_Text = '';

    for (var i = 0; i < text_Array.length; i++) {
      spanned_Text += `<span class='char' id="char${i}">${text_Array[i]}</span>`;
    }

    return spanned_Text;
  }

  //---------------------------------------------------------------------------
} // End UI

function start() {
  UI.load_Citations();
  UI.createEventListener();
}

window.addEventListener('load', start, false);

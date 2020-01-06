/*
    File:       main.js
    Author:     Henrik Henriksson
    Student ID: hehe0601¨
    Contact:    hehe0601@student.miun.se
    Version:    1.0
    Created:    2019-12-18
*/

// The UI class handles tasks that change the way the website functions. The functions are declared as static. That way they can be called independently.
class UI {
  constructor() {
    this.char_Iterator = 0;
    this.char_Counter = 0;
    this.error_Counter = 0;
    this.citations = [];
    this.start_Time = 0;
  }
  //---------------------------------------------------------------------------
  static load_Citations() {
    // to be changed for higher grades.
    const STORED_CITATIONS = [
      {
        title: 'Förändingens Tid',
        author: 'Erik Ström',
        language: 'swedish',
        text:
          'Vinden viner över sällsamma ruiner, över berg och slätter, dagar som nätter. Ger världen form inför den kommande storm, likt gudars sång, skall bli dess undergång. Svart som natten, blank likt vatten, i skyn du häver då Allfader kräver. Åter resas skall nu han, som i misteln döden fann. Sonas med sin ene broder, den blinde född av samma moder. Satt att råda är de båda, bröders hand över evigt land.'
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
    // Add the stored citations to the array.
    UI.citations = STORED_CITATIONS;

    // add the citations to the options menu for seleciton.
    UI.citations.forEach(citation => UI.addCitationsToList(citation));
  }
  //---------------------------------------------------------------------------
  // This function finds the element with the text_selector id and creates options with value and text from the citation Object.
  // @param citation a citiation object.
  static addCitationsToList(citation) {
    const list = document.querySelector('#text_Selector');

    const OPTION = document.createElement('option');
    OPTION.value = citation.title;
    OPTION.text = citation.title;

    list.appendChild(OPTION);
  }
  //---------------------------------------------------------------------------
  // Create event listeners for when the user selects a citation and for when the play button is pressed.
  static createEventListener() {
    // options:
    document
      .getElementById('text_Selector')
      .addEventListener('change', UI.getOptionVal, false);

    // play button:
    document
      .getElementById('start_Button')
      .addEventListener('click', UI.button_Pressed, false);
  }
  //---------------------------------------------------------------------------
  // Function called by the eventlistener for the text_Selector tag. Searches available citations for the chosen one based on the tag title.
  static getOptionVal(event) {
    let selection = event.target.value;

    let Chosen_Citation = UI.citations.find(({ title }) => title === selection);

    UI.displayCitation(Chosen_Citation);
  }
  //---------------------------------------------------------------------------
  // DIsplay the selected citation in the text_Details section. Calls sub functions to calculate total words and characters of the selected citation.
  // Calls sub function to add spans to each indivudual char.
  static displayCitation(Chosen_Citation) {
    document.getElementById('text_Header').innerHTML = Chosen_Citation.title;
    document.getElementById('text_Author').innerHTML = Chosen_Citation.author;

    let word_Counter = UI.getWordCount(Chosen_Citation.text);

    document.getElementById('word_Count').innerHTML = word_Counter;

    document.getElementById('char_Count').innerHTML = UI.getCharCount(
      Chosen_Citation.text
    );

    document.getElementById('citations').innerHTML = UI.addSpan(
      Chosen_Citation.text
    );
  }
  //---------------------------------------------------------------------------
  // Return the total word count by splitting the text array by spaces.
  // @param pText an array containing the selected citation.
  static getWordCount(pText) {
    return pText.split(' ').length;
  }
  //---------------------------------------------------------------------------
  // Set the instance variable char_Counter to the total lenght of the text array, including spaces.
  // @param pText an array containgin the selected citation.
  // @return an updated UI.char_Counter.
  static getCharCount(pText) {
    UI.char_Counter = pText.length;

    return UI.char_Counter;
  }
  //---------------------------------------------------------------------------
  // Add spans to each individual char in the selected text by splitting a text array by char
  // @param text, the selected text as a string.
  // @return spanned_Text, a string holding the input parameter text with added span tags.
  static addSpan(text) {
    let text_Array = text.split('');

    let spanned_Text = '';

    // loop through the split text array and add span tag to each index.
    for (var i = 0; i < text_Array.length; i++) {
      spanned_Text += `<span class='char' id="char${i}">${text_Array[i]}</span>`;
    }

    return spanned_Text;
  }

  //---------------------------------------------------------------------------
  // Function called by the eventlistener, checks wether the test is currently running or not, initializes appropriate function.
  static button_Pressed() {
    let current_Button = document.getElementById('play_Stop_Icon').innerHTML;

    if (current_Button === 'play_arrow') {
      UI.start_Program();
    } else if (current_Button === 'stop') {
      UI.stop_Program();
    }
  }
  //---------------------------------------------------------------------------
  // Called when the user presses the start button. Starts the test and initializes counters to starting values.
  static start_Program() {
    // Change the button:
    document.getElementById(
      'start_Button'
    ).innerHTML = `<i class="material-icons md-48 md-red" id="play_Stop_Icon">stop</i>`;

    // Set the readOnly value to false to enable typing in the input box.
    let current_Input = document.getElementById('user_input');
    current_Input.readOnly = false;

    // set focus to the input box.
    current_Input.focus();

    // add event listener to log each key the user presses.
    current_Input.addEventListener('keypress', UI.log_Key, false);

    // Set initial values for time, errors, successfull and missed chars.
    UI.start_Time = new Date().getTime();
    UI.error_Counter = 0;
    UI.char_Iterator = 0;

    document.querySelectorAll('.successfull_Char').forEach(e => {
      e.classList.remove('successfull_Char');
    });

    document.querySelectorAll('.missed_Char').forEach(e => {
      e.classList.remove('missed_Char');
    });

    // Add highlight to the first char.
    document
      .getElementById(`char${UI.char_Iterator}`)
      .classList.add('highlighted_Char');
  }
  //---------------------------------------------------------------------------

  // function called by the user by pressing the stop button, or automatically called when the test is finished.
  static stop_Program() {
    // Set button to play arrow.
    document.getElementById(
      'start_Button'
    ).innerHTML = `<i class="material-icons md-48 md-green" id="play_Stop_Icon">play_arrow</i>`;

    let current_Input = document.getElementById('user_input');

    // Set the input box to readonly again to disable typing after the test has stopped.
    current_Input.readOnly = true;

    // remove event listener for key presses as we no longer care what the user presses.
    current_Input.removeEventListener('keypress', UI.log_Key, false);

    // remmove any highlight if user pressed stop.
    document.querySelectorAll('.highlighted_Char').forEach(e => {
      e.classList.remove('highlighted_Char');
    });

    UI.clear_Input_Field();
  }
  //---------------------------------------------------------------------------

  //---------------------------------------------------------------------------
  // Function called by event listener to log each keypress.
  static log_Key(event) {
    // update the char iterator as soon as a button is pressed.
    UI.char_Iterator++;

    // find the actual button key value. eg. "V"
    let current_Input = event.key;

    // find the currently highlighted char
    let current_Span = document.querySelector('.highlighted_Char');

    // call function to clear the input field if the user has pressed space.
    if (current_Input === ' ') {
      UI.clear_Input_Field();
    }

    // validate the input char
    UI.validate_Input(current_Span, current_Input);

    // highlight the next char if not the last char in the citation.
    if (UI.char_Iterator < UI.char_Counter) {
      UI.highlight_Next();
    } else if (UI.char_Iterator === UI.char_Counter) {
      UI.stop_Program();
    }

    UI.update_Statistics();
  }
  //---------------------------------------------------------------------------
  // check the current span vs current input. If they are the same, add succes, otherwise add miss and update error counter. Always remove highlight from the current char.
  static validate_Input(current_Span, current_Input) {
    if (current_Span.innerHTML === current_Input) {
      current_Span.classList.add('successfull_Char');
    } else {
      current_Span.classList.add('missed_Char');
      UI.error_Counter++;
    }
    current_Span.classList.remove('highlighted_Char');
  }
  //---------------------------------------------------------------------------
  // Highlight the next char based on the char_iterators current position.
  static highlight_Next() {
    document
      .getElementById(`char${UI.char_Iterator}`)
      .classList.add('highlighted_Char');
  }
  //---------------------------------------------------------------------------
  // clera the input field by setting it to an empty value.
  static clear_Input_Field() {
    document.getElementById('user_input').value = '';
  }
  //---------------------------------------------------------------------------
  // uses advanced commando maths to calculate time elapsed, gross wpm, net wpm and accuracy with each keypress the user makes.
  static update_Statistics() {
    // time elapsed in minutes.
    let time_Elapsed = (new Date().getTime() - UI.start_Time) / 1000 / 60;

    let gross_WPM = UI.char_Iterator / 5 / time_Elapsed;

    let net_WPM = gross_WPM - UI.error_Counter / time_Elapsed;

    let accuracy = (UI.char_Iterator - UI.error_Counter) / UI.char_Counter;

    // present the statistics to the user.
    document.getElementById('GWPMD').innerHTML = Math.round(gross_WPM);
    document.getElementById('NWPMD').innerHTML = Math.round(net_WPM);
    document.getElementById('acc_Data').innerHTML = Math.round(accuracy * 100);
    document.getElementById('error_Data').innerHTML = UI.error_Counter;
  }

  //---------------------------------------------------------------------------
} // End UI
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// Start function loading the citations and creating initial event listeners.
function start() {
  UI.load_Citations();
  UI.createEventListener();
}
// Make sure the entire page has loaded before calling the start function.
window.addEventListener('load', start, false);

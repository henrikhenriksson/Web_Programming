/*
    File:       main.js
    Author:     Henrik Henriksson
    Student ID: hehe0601¨
    Contact:    hehe0601@student.miun.se
    Version:    1.0
    Created:    2019-12-18
*/

// Global variable accessable by both classes as i heard on the forums that this was ok.
let file_Citations = [];

// The FileLoader class will handle the loading of the UI texts from file.
class FileLoader {
  // empty constructor
  constructor() {}
  static loadTexts() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'Texts.json', false);

    xhr.onload = function() {
      if (this.status == 200) {
        // console.log(this.responseText);
        file_Citations = JSON.parse(this.responseText);
      } else if (this.status == 404) {
        document.getElementById('citations').innerHTML =
          '404 not found error: Could not load file Texts.Json';
      }
    };
    xhr.onerror = function() {
      console.log('Request Error: Could not load file Texts.Json');
    };

    xhr.send();
  }
} //End FileLoader
//---------------------------------------------------------------------------

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

    FileLoader.loadTexts();
    UI.citations = file_Citations;
  }
  //---------------------------------------------------------------------------

  // This function finds the element with the text_selector id and creates options with value and text from the citation Object.
  // @param citation a citiation object.
  static addCitationsToList(citation, selected_Language) {
    let list = document.querySelector('#text_Selector');

    if (selected_Language === citation.language) {
      const OPTION = document.createElement('option');
      OPTION.value = citation.title;
      OPTION.text = citation.title;

      list.appendChild(OPTION);
    }
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

    let languages = document.querySelectorAll('input[name="language"]');

    languages.forEach(language =>
      addEventListener('click', UI.language_selected, false)
    );
  }
  //---------------------------------------------------------------------------
  // Function called when a language is selected in the radial input. Clear the list from any present entries and add the ones corresponding to selected language.
  static language_selected() {
    let selected_Lang = document.querySelector('input[name="language"]:checked')
      .value;

    let list = document.querySelector('#text_Selector');

    while (list.length > 1) {
      list.remove(1);
    }

    // UI.citations.forEach(citation =>
    //   UI.addCitationsToList(citation, selected_Lang)
    // );
    file_Citations.forEach(citation =>
      UI.addCitationsToList(citation, selected_Lang)
    );
  }

  //---------------------------------------------------------------------------

  //---------------------------------------------------------------------------
  // Function called by the eventlistener for the text_Selector tag. Searches available citations for the chosen one based on the tag title.
  static getOptionVal(event) {
    let selection = event.target.value;

    let Chosen_Citation = UI.citations.find(({ title }) => title === selection);

    UI.displayCitation(Chosen_Citation);
  }
  //---------------------------------------------------------------------------
  // Display the selected citation in the text_Details section. Calls sub functions to calculate total words and characters of the selected citation.
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
    let text_is_selected = document.getElementById('citations').innerHTML
      .length;

    console.log('text is selected: ' + text_is_selected);
    if (text_is_selected) {
      let current_Button = document.getElementById('play_Stop_Icon').innerHTML;

      if (current_Button === 'play_arrow') {
        UI.start_Program();
      } else if (current_Button === 'stop') {
        UI.stop_Program();
      }
    }
  }
  //---------------------------------------------------------------------------
  // Called when the user presses the start button. Starts the test and initializes counters to starting values.
  static start_Program() {
    new Audio('./audio/QuestNew.wav').play();
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
    UI.reset_Statistics();

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
    new Audio('./audio/GoodJob.wav').play();
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
    let ignore_Case = document.getElementById('casing').checked;
    if (ignore_Case) {
      if (
        current_Span.innerHTML.toUpperCase() === current_Input.toUpperCase()
      ) {
        current_Span.classList.add('successfull_Char');
      } else {
        current_Span.classList.add('missed_Char');

        UI.error_Counter++;
        new Audio('./audio/Error.wav').play();
      }
    } else {
      if (current_Span.innerHTML === current_Input) {
        current_Span.classList.add('successfull_Char');
      } else {
        current_Span.classList.add('missed_Char');
        UI.error_Counter++;
        new Audio('./audio/Error.wav').play();
      }
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

    let accuracy = (UI.char_Iterator - UI.error_Counter) / UI.char_Iterator;

    // present the statistics to the user.
    document.getElementById('GWPMD').innerHTML = Math.round(gross_WPM);
    document.getElementById('NWPMD').innerHTML = Math.round(net_WPM);
    document.getElementById('acc_Data').innerHTML = Math.round(accuracy * 100);
    document.getElementById('error_Data').innerHTML = UI.error_Counter;
  }
  //---------------------------------------------------------------------------
  // reset the statistics on start.
  static reset_Statistics() {
    document.getElementById('GWPMD').innerHTML = 0;
    document.getElementById('NWPMD').innerHTML = 0;
    document.getElementById('acc_Data').innerHTML = 0;
    document.getElementById('error_Data').innerHTML = 0;
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

import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {};

const overAllState = {
  meanings: {
    synonyms: {
      Adhoc: {
        // will be in square brackets
        meaning: 'Focus',
        exampleSentence: 'Focus on One Task',
        name: 'Adhoc',
      },
      Defacto: {
        meaning: 'Standard',
        exampleSentence:
          'ISO certification is defacto standard for selling electronic goods in india',
        name: 'Defacto',
      },
    },
  },
  pronounciations: {
    urls: {
      Onomatopoeia: {
        // will be in square brackets
        url: 'https://dictionary.com/abcde.mp3',
        language: 'english',
        name: 'Onomatopoeia',
      },
      Worcestershire: {
        url: 'https://dictionary.com/abcdefgh.mp3',
        language: 'english',
        name: 'Worcestershire',
      },
    },
  },
  writeups: {
    notes: [
      {
        'Side Effects And Pure Function': {
          // will be in square brackets
          note: 'Pure Function = Fasting.',
          name: 'Side Effects And Pure Function',
        },
      },
      {
        'Greedy Quantifiers': {
          note: 'greedy quantifiers used in patterns helps to *generate matched strings with maximum number of characters *',
          name: 'Greedy Quantifiers',
        },
      },
    ],
  },
  selectedText: '',
};

const actionCreatorForMeaningPayload = (payload) => {
  return {
    type: 'please-tell-the-meaning',
    selectedWord: payload.selectedWord,
  };
};

const actionCreatorForStoringMeaningPayload = (payload) => {
  return {
    type: 'please-store-the-meaning',
    selectedWord: payload.selectedWord,
    meaning: payload.meaning,
    exampleSentence: payload.exampleSentence,
  };
};

const actionCreatorForFetchingMeaningOfPayload = (payload) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${payload.selectedWord}`)
      .then((response) => {
        console.log(response.data);
        return actionCreatorForStoringMeaningPayload({
          selectedWord: payload.selectedWord,
          meaning: response.data.meaning,
          exampleSentence: response.data.exampleSentence,
        });
      })
      .catch((error) => {
        console.log(error.data);
        return actionCreatorForStoringMeaningPayload({
          selectedWord: payload.selectedWord,
          meaning: 'Not Available',
          exampleSentence: 'Not Available',
        });
      });
  };
};
const actionCreatorForPronounciationPayload = (payload) => {
  return {
    type: 'please-tell-the-pronounciation',
    selectedWord: payload.word,
  };
};

const actionCreatorForStoringPronounciationPayload = (payload) => {
  return {
    type: 'please-store-the-pronounciation',
    selectedWord: payload.selectedWord,
    url: payload.url,
    language: payload.language,
  };
};

const actionCreatorForFetchingPronounciationOfWord = (payload) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${payload.selectedWord}`)
      .then((response) => {
        console.log(response.data);
        return actionCreatorForStoringPronounciationPayload({
          selectedWord: payload.selectedWord,
          url: response.data.url,
          language: response.data.language,
        });
      })
      .catch((error) => {
        console.log(error.data);
        return actionCreatorForStoringPronounciationPayload({
          selectedWord: payload.selectedWord,
          url: 'Not Available',
          language: 'Not Available',
        });
      });
  };
};

const initialStateForMeaningsReducer = { synonyms: {} };
const initialStateForPronounciationReducer = { urls: {} };
const initialStateForWriteUpsReducer = { notes: [] };
const initialStateForSelectedTextReducer = { selectedText: '' };

const meaningsReducer = (state = initialStateForMeaningsReducer, action) => {
  // can think of supporting different type of actions for getting new meaning, retrying meaning for unavailable case, etc...

  let actionType = action.type;
  let selectedWord = action.selectedWord;
  if (actionType === 'please-tell-the-meaning') {
    let meaningList = state.synonyms;
    let detailsForGivenWord = meaningList[selectedWord];
    if (detailsForGivenWord !== undefined) {
      return detailsForGivenWord;
    } else {
      return {
        ...state,
        synonyms: {
          ...state.synonyms,
          [selectedWord]: {
            meaning: 'Not Available',
            exampleSentence: 'Not Available',
            name: selectedWord,
          },
        },
      };
    }
  }
  if (actionType === 'please-store-the-meaning') {
    let meaningOfWord = action.meaning;
    let sentence = action.exampleSentence;
    return {
      ...state,
      synonyms: {
        ...state.synonyms,
        [selectedWord]: {
          meaning: meaningOfWord,
          exampleSentence: sentence,
          name: selectedWord,
        },
      },
    };
  }
};

const pronounciationReducer = (
  state = initialStateForPronounciationReducer,
  action
) => {
  let actionType = action.type;
  let selectedWord = action.selectedWord;
  if (actionType === 'please-tell-the-pronounciation') {
    let urlsList = state.urls;
    let selectedWord = action.selectedWord;

    let detailsForGivenWord = meaningList[selectedWord];
    if (detailsForGivenWord !== undefined) {
      return detailsForGivenWord;
    } else {
      return {
        ...state,
        urls: {
          ...state.urls,
          [selectedWord]: {
            url: 'Not Available',
            language: 'Not Available',
            name: selectedWord,
          },
        },
      };
    }
  }
  if (actionType === 'please-store-the-meaning') {
    let url = action.url;
    let language = action.language;
    return {
      ...state,
      urls: {
        ...state.urls,
        [selectedWord]: {
          url: url,
          language: language,
          name: selectedWord,
        },
      },
    };
  }
};

const actionCreatorForStoringNote = (payload) => {
  return {
    type: 'store-the-note',
    note: payload.note,
    sentence: payload.sentence,
  };
};

const actionCreatorForGettingNote = (payload) => {
  return {
    type: 'get-the-note',
    sentence: payload.sentence,
  };
};
const actionCreatorForGettingAllNotes = () => {
  return {
    type: 'get-all-notes',
    sentence: payload.sentence,
  };
};

const actionCreatorForDeletingtheNote = (payload) => {
  return {
    type: 'delete-the-note',
    sentence: payload.sentence,
  };
};

const actionCreatorForEditingtheNote = (payload) => {
  return {
    type: 'editing-the-note',
    sentence: payload.sentence,
    note: payload.note,
  };
};

const notesReducer = (state = initialStateForWriteUpsReducer, action) => {
  let actionType = action.type;
  let sentence = action.sentence;
  if (actionType === 'store-the-note') {
    let note = action.note;
    return {
      ...state,
      notes: [
        ...state.notes,
        {
          [sentence]: {
            note: note,
            name: sentence,
          },
        },
      ],
    };
  }
  if (actionType === 'get-the-note') {
    let requiredNoteInfo = state.notes.filter((noteObj) => {
      return noteObj[sentence] !== undefined;
    });

    return requiredNoteInfo;
  }
  if (actionType === 'delete-the-note') {
    let updatedNoteInfo = state.notes.filter((noteObj) => {
      return noteObj[sentence] === undefined;
    });
    return {
      ...state,
      notes: [...updatedNoteInfo],
    };
  }
  if (actionType === 'edit-the-note') {
    let updatedNoteInfo = state.notes.map((noteObj) => {
      if (noteObj[sentence] !== undefined) {
        noteObj[sentence].note = action.note;
      }
      return noteObj;
    });
    return {
      ...state,
      notes: [...updatedNoteInfo],
    };
  }
};

const selectedTextReducer = (
  state = initialStateForSelectedTextReducer,
  action
) => {
  let selectedWord = action.selectedText;
  return { ...state, selectedText: selectedWord };
};

const rootReducer = combineReducers({
  meanings: meaningsReducer,
  pronounciations: pronounciationReducer,
  writeups: notesReducer,
  selectedNote: selectedTextReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

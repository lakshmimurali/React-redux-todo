const initialState = {};

const overAllState = {
  meanings: {
    synonyms: {
      Adhoc: {
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
    notes: {
      'Side Effects And Pure Function': {
        note: 'Pure Function = Fasting.',
        name: 'Side Effects And Pure Function',
      },
      'Greedy Quantifiers': {
        note: 'greedy quantifiers used in patterns helps to *generate matched strings with maximum number of characters *',
        name: 'Greedy Quantifiers',
      },
    },
  },
};

const actionCreatorForMeaningPayload = (payload) => {
  return {
    type: 'tell-the-meaning',
    selectedWord: payload.selectedWord,
  };
};

const actionCreatorForFetchingMeaningOfPayload = (payload) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${payload.selectedWord}`)
      .then((response) => {
        console.log(response.data);
        return actionCreatorForMeaningPayload({
          selectedWord: payload.selectedWord,
          meaning: response.data.meaning,
          exampleSentence: response.data.exampleSentence,
        });
      })
      .catch((error) => {
        console.log(error.data);
        return actionCreatorForMeaningPayload({
          selectedWord: payload.selectedWord,
          meaning: 'Not Available',
          exampleSentence: 'Not Available',
        });
      });
  };
};
const actionCreatorForPronounciationPayload = (payload) => {
  return {
    type: 'pronounce-the-word',
    selectedWord: payload.word,
  };
};

const actionCreatorForFetchingMeaningOfWord = (payload) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${payload.selectedWord}`)
      .then((response) => {
        console.log(response.data);
        return actionCreatorForMeaningPayload({
          selectedWord: payload.selectedWord,
          meaning: response.data.meaning,
          exampleSentence: response.data.exampleSentence,
        });
      })
      .catch((error) => {
        console.log(error.data);
        return actionCreatorForMeaningPayload({
          selectedWord: payload.selectedWord,
          meaning: 'Not Available',
          exampleSentence: 'Not Available',
        });
      });
  };
};
const actionCreatorForFetchingPronounciationOfWord = (payload) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${payload.selectedWord}`)
      .then((response) => {
        console.log(response.data);
        return actionCreatorForMeaningPayload({
          selectedWord: payload.selectedWord,
          url: response.data.url,
          language: response.data.language,
        });
      })
      .catch((error) => {
        console.log(error.data);
        return actionCreatorForMeaningPayload({
          selectedWord: payload.selectedWord,
          url: 'Not Available',
          language: 'Not Available',
        });
      });
  };
};

const actionCreatorForWriteUpsPayload = (payload) => {
  return {
    type: 'give-me-details',
    note: payload.load,
    sentence: payload.sentence,
  };
};

const initialStateForMeaningsReducer = { synonyms: {} };
const initialStateForPronounciationReducer = { urls: {} };
const initialStateForWriteUpsReducer = { notes: {} };

const meaningsReducer = (state = initialStateForMeaningsReducer, action) => {};

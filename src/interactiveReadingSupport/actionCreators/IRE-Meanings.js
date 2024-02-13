const actionCreatorForMeaningPayload = (selectedWord) => {
  return {
    type: 'please-tell-the-meaning',
    selectedWord: selectedWord,
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

const actionCreatorForFetchingMeaningOfPayload = (selectedWord) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${selectedWord}`)
      .then((response) => {
        console.log(response.data);

        return dispatch(
          actionCreatorForStoringMeaningPayload({
            selectedWord: selectedWord,
            meaning: response.data.meaning,
            exampleSentence: response.data.exampleSentence,
          })
        );
      })
      .catch((error) => {
        console.log(error.data);
        return dispatch(
          actionCreatorForStoringMeaningPayload({
            selectedWord: selectedWord,
            meaning: 'Not Available',
            exampleSentence: 'Not Available',
          })
        );
      });
  };
};

const actionCreatorForUpdatingSelectedText = (text) => {
  return {
    type: 'update-selected-text',
    text: text,
  };
};

export {
  actionCreatorForMeaningPayload,
  actionCreatorForStoringMeaningPayload,
  actionCreatorForFetchingMeaningOfPayload,
};

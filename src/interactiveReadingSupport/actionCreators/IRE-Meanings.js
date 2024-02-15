const actionCreatorForStoringMeaningPayload = (payload) => {
  console.log(
    'After Thunk inside actionCreatorForStoringMeaningPayload Meanings Action creator',
    payload
  );
  return {
    type: 'please-store-the-meaning',
    selectedWord: payload.selectedWord,
    meaning: payload.meaning,
    exampleSentence: payload.exampleSentence,
  };
};

const actionCreatorForFetchingMeaningOfPayload = (selectedWord) => {
  return function (dispatch) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
      .then((response) => {
        console.log(
          'Thunk ahayaaaa>>>>>>>>>>>>>>>>>>>> Meanings Action creator'
        );
        console.log(
          'actionCreatorForFetchingMeaningOfPayload Meanings Action creator',
          response
        );

        return response.json();
      })
      .then((data) => {
        if (data.title === 'No Definitions Found') {
          console.log('Inside word not exists in dictionary service');
          throw 'Word Not Exists';
        }
        let meaningList = data[0].meanings[0].definitions[0];
        let definition = meaningList.definition || 'Not Available';
        let meaning = data[0].meanings[0].synonyms[0] || 'Not Available';
        console.log(definition, meaning);
        return dispatch(
          actionCreatorForStoringMeaningPayload({
            selectedWord: selectedWord,
            meaning: meaning,
            exampleSentence: definition,
          })
        );
      })
      .catch((error) => {
        console.log('Meanings Action creator', error);
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
  actionCreatorForStoringMeaningPayload,
  actionCreatorForFetchingMeaningOfPayload,
};

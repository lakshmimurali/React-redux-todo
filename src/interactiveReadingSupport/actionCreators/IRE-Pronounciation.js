const actionCreatorForStoringPronounciationPayload = (payload) => {
  console.log('In actionCreatorForStoringPronounciationPayload', payload);
  return {
    type: 'please-store-the-pronounciation',
    selectedWord: payload.selectedWord,
    audioUrl: payload.audioUrl,
    phonetic: payload.phonetic,
  };
};

const actionCreatorForFetchingPronounciationOfWord = (selectedWord) => {
  return function (dispatch) {
    console.log(
      'selectedWord inside actionCreatorForFetchingPronounciationOfWord',
      selectedWord
    );
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
      .then((response) => {
        console.log(
          'Thunk ahayaaaa>>>>>>>>>>>>>>>>>>>> Pronounciation Action creator'
        );
        console.log(
          'actionCreatorForFetchingPronounciationOfWord Action creator',
          response
        );
        return response.json();
      })
      .then((data) => {
        if (data.title === 'No Definitions Found') {
          console.log('Inside word not exists in dictionary service');
          throw 'Word Not Exists';
        }

        let audioUrl = data[0].phonetics[0].audio || 'Not Available';
        let phonetic = data[0].phonetic || 'Not Available';
        console.log('output for pronounciation api', audioUrl, phonetic);
        return dispatch(
          actionCreatorForStoringPronounciationPayload({
            selectedWord: selectedWord,
            audioUrl: audioUrl,
            phonetic: phonetic,
          })
        );
      })
      .catch((error) => {
        console.log(
          'Inside Error Block of pronounciation action creator',
          error.data
        );
        return dispatch(
          actionCreatorForStoringPronounciationPayload({
            selectedWord: selectedWord,
            audioUrl: 'Not Available',
            phonetic: 'Not Available',
          })
        );
      });
  };
};

export {
  actionCreatorForStoringPronounciationPayload,
  actionCreatorForFetchingPronounciationOfWord,
};

const actionCreatorForPronounciationPayload = (selectedWord) => {
  return {
    type: 'please-tell-the-pronounciation',
    selectedWord: selectedWord,
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

const actionCreatorForFetchingPronounciationOfWord = (selectedWord) => {
  return function (dispatch) {
    fetch(`https://dictionaryapi.com/meaning/${selectedWord}`)
      .then((response) => {
        console.log(response.data);
        return dispatch(
          actionCreatorForStoringPronounciationPayload({
            selectedWord: selectedWord,
            url: response.data.url,
            language: response.data.language,
          })
        );
      })
      .catch((error) => {
        console.log(error.data);
        return dispatch(
          actionCreatorForStoringPronounciationPayload({
            selectedWord: selectedWord,
            url: 'Not Available',
            language: 'Not Available',
          })
        );
      });
  };
};

export {
  actionCreatorForPronounciationPayload,
  actionCreatorForStoringPronounciationPayload,
  actionCreatorForFetchingPronounciationOfWord,
};

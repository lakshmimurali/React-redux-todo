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

export {
  actionCreatorForPronounciationPayload,
  actionCreatorForStoringPronounciationPayload,
  actionCreatorForFetchingPronounciationOfWord,
};

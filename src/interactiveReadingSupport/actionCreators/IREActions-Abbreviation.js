const actionCreatorForStoringAbbreviation = (payload) => {
  console.log(
    'After Thunk inside actionCreatorForStoringAbbreviationPayload Abbreviation Action creator',
    payload
  );
  return {
    type: 'please-store-the-abbreviation',
    acronym: payload.selectedWord,
    abbreviation: payload.abbreviation,
    field: payload.field,
  };
};

const actionCreatorForFetchingAbbreviations = (selectedWord) => {
  return function (dispatch) {
    fetch(
      `https://www.stands4.com/services/v2/abbr.php?uid=12381&tokenid=BoPubKpqOeKtbxQ2&term=${selectedWord}&format=json`
    )
      .then((response) => {
        console.log(
          'Thunk ahayaaaa>>>>>>>>>>>>>>>>>>>> Abbreviations Action creator'
        );
        console.log(
          'actionCreatorForFetchingAbbreviationsOfPayload Abbreviations Action creator',
          response
        );

        return response.json();
      })
      .then((data) => {
        console.log('data inside abbr response ', data);
        let abbrList = data.result;
        let definition = abbrList[0].definition || 'Not Available';
        let field = abbrList[0].category || 'Not Available';
        //console.log(definition, field);

        return dispatch(
          actionCreatorForStoringAbbreviation({
            selectedWord: selectedWord,
            abbreviation: definition,
            field: field,
          })
        );
      });
    /*.catch((error) => {
        console.log('Abbreviations Action creator', error);
        return dispatch(
          actionCreatorForStoringAbbreviation({
            selectedWord: selectedWord,
            abbreviation: 'Not Available',
            field: 'Not Available',
          })
        );
      });*/
  };
};

export {
  actionCreatorForStoringAbbreviation,
  actionCreatorForFetchingAbbreviations,
};

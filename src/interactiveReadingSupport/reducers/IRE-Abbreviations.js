const initialStateForAbbreviationsReducer = { abbreviations: {} };

const abbreviationsReducer = (
  state = initialStateForAbbreviationsReducer,
  action
) => {
  let actionType = action.type;

  if (actionType === 'please-store-the-abbreviation') {
    let acronym = action.acronym;
    let abbreviationList = state.abbreviations;
    let detailsForGivenWord = abbreviationList[acronym];
    if (detailsForGivenWord !== undefined) {
      return state;
    }
    let abbrOfAcronym = action.abbreviation;
    let field = action.field;
    return {
      ...state,
      abbreviations: {
        ...state.abbreviations,
        [acronym]: {
          abbreviation: abbrOfAcronym,
          field: field,
          name: acronym,
        },
      },
    };
  }
  return state;
};

export default abbreviationsReducer;

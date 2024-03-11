import React from 'react';

function ShowAbbreviationForAcronym(props) {
  let selectedText = props.selectedText;
  let abbrInfo = props.abbrList[selectedText];
  let abbreviation = '';
  let field = '';
  if (abbrInfo !== undefined) {
    abbreviation = abbrInfo.abbreviation;
    field = abbrInfo.field;
  }
  console.log('In Show AbbreviationForAcronym Component', abbreviation);

  return (
    <div className="not-selectable">
      <div> Selected Text:{selectedText} </div>
      <div>
        {' '}
        Abbreviation For Selected Text:{' '}
        {abbreviation !== undefined && abbreviation !== ''
          ? abbreviation
          : 'Loading...'}
        <br />
        Category of Acronym:
        {field !== undefined && field !== '' ? field : 'Loading...'}
      </div>
    </div>
  );
}

export default ShowAbbreviationForAcronym;

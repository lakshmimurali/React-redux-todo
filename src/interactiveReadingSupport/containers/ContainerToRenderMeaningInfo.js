import React, { useState } from 'react';

import { connect } from 'react-redux';

import ShowMeaningForWord from '../components/Dictionary.js';

function getDataFromStore(state) {
  console.log('Meanings >>>>>>>>.', state.meanings);

  console.log('Selected Text >>>>>>>>.', state.selectedNode);

  let selectedText = state.selectedNode;
  return {
    selectedText: selectedText,
    meaningObj: state.meanings.synonyms[selectedText],
  };
}

function RenderMeaningInfo(props) {
  console.log('props in RespondToUIActionsBasedOnTextSelectionChange', props);

  return (
    <div>
      <ShowMeaningForWord
        meaningInfo={props.meaningObj}
        selectedText={props.selectedText}
      />
    </div>
  );
}

export default connect(getDataFromStore, null)(RenderMeaningInfo);

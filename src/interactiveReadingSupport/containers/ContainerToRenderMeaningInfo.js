import React, { useState } from 'react';

import { connect } from 'react-redux';

import ShowMeaningForWord from '../components/Dictionary.js';

function getDataFromStore(state) {
  console.log('Meanings >>>>>>>>. RenderMeaningInfo Container', state.meanings);

  console.log(
    'Selected Text >>>>>>>>. RenderMeaningInfo Container',
    state.selectedNode
  );

  let selectedText = state.selectedNode;
  let meaningInfo = state.meanings.synonyms[selectedText];
  let meaningText = '';
  if (meaningInfo !== undefined) {
    meaningText = meaningInfo.meaning;
  }
  console.log('RenderMeaningInfo Container ', meaningInfo, meaningText);
  return {
    selectedText: selectedText,
    meaning: meaningText,
  };
}

function RenderMeaningInfo(props) {
  console.log('props in RenderMeaningInfo Container', props);
  if (props.selectedText === '0000' || props.selectedText.length === 0) {
    return null;
  }
  return (
    <div>
      <ShowMeaningForWord
        meaning={props.meaning}
        selectedText={props.selectedText}
      />
    </div>
  );
}

export default connect(getDataFromStore, null)(RenderMeaningInfo);

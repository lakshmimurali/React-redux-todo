import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  actionCreatorForMeaningPayload,
  actionCreatorForFetchingMeaningOfPayload,
} from '../actionCreators/IRE-Meanings.js';

import InteractiveReader from '../components/UIActionsForInteractiveReader.js';
import ShowMeaningForWord from '../components/Dictionary.js';

function getDataFromStore({ selectedNode, meanings }) {
  console.log('Selected Text in toolscontainer', selectedNode);
  return {
    selectedText: selectedNode,
    meaningObj: meanings.synonyms[selectedNode],
  };
}

function dispatchActions(dispatch) {
  return {
    getMeaning: (selectedText) => {
      dispatch(actionCreatorForMeaningPayload(selectedText));
    },

    fetchMeaningsFromServer: (word) => {
      dispatch(actionCreatorForFetchingMeaningOfPayload(word));
    },
  };
}

function RespondToUIActionsBasedOnTextSelectionChange({
  selectedText,
  getMeaning,
  fetchMeaningsFromServer,
  meaningObj,
}) {
  if (selectedText === '0000' || selectedText.length === 0) {
    return null;
  }
  console.log(
    'props in RespondToUIActionsBasedOnTextSelectionChange toolscontainer',
    selectedText,
    getMeaning,
    fetchMeaningsFromServer
  );

  let meaningRenderer = (
    <ShowMeaningForWord
      meaning={meaningObj.meaning}
      selectedText={selectedText}
    />
  );

  return (
    <div>
      <InteractiveReader
        selectedText={selectedText}
        invokeServerFetch={fetchMeaningsFromServer}
        localFetch={getMeaning}
        Meaningrenderer={meaningRenderer}
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  actionCreatorForMeaningPayload,
  actionCreatorForFetchingMeaningOfPayload,
} from '../actionCreators/IRE-Meanings.js';
import InteractiveReader from '../components/UIActionsForInteractiveReader.js';

function getDataFromStore({ selectedNode }) {
  console.log('Selected Text in toolscontainer', selectedNode);

  return {
    selectedText: selectedNode,
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
}) {
  if (selectedText === '0000' || props.selectedText.length === 0) {
    return null;
  }
  console.log(
    'props in RespondToUIActionsBasedOnTextSelectionChange toolscontainer',
    selectedText,
    getMeaning,
    fetchMeaningsFromServer
  );

  return (
    <div>
      <InteractiveReader
        selectedText={selectedText}
        invokeServerFetch={fetchMeaningsFromServer}
        localFetch={getMeaning}
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

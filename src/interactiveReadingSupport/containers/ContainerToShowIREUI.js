import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  actionCreatorForMeaningPayload,
  actionCreatorForFetchingMeaningOfPayload,
} from '../actionCreators/IRE-Meanings.js';

import InteractiveReader from '../components/UIActionsForInteractiveReader.js';
import ShowMeaningForWord from '../components/Dictionary.js';

function getDataFromStore(state) {
  console.log(
    'Selected Text in toolscontainer',
    state.selectedNode,
    state.meanings
  );
  return {
    selectedText: state.selectedNode,
    meaningObj: state.meanings.synonyms,
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

function RespondToUIActionsBasedOnTextSelectionChange(props) {
  if (props.selectedText === '0000' || props.selectedText.length === 0) {
    return null;
  }
  console.log(
    'props in RespondToUIActionsBasedOnTextSelectionChange toolscontainer',
    props.selectedText,
    props.getMeaning,
    props.fetchMeaningsFromServer,
    props.meaningObj
  );

  let meaningRenderer = (
    <ShowMeaningForWord
      meaningObj={props.meaningObj}
      selectedText={props.selectedText}
    />
  );

  return (
    <div>
      <InteractiveReader
        selectedText={props.selectedText}
        invokeServerFetch={props.fetchMeaningsFromServer}
        localFetch={props.getMeaning}
        Meaningrenderer={meaningRenderer}
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

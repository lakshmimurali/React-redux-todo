import React from 'react';

import { connect } from 'react-redux';
import { actionCreatorForMeaningPayload } from '../actionCreators/IRE-Meanings.js';
import { actionCreatorForPronounciationPayload } from '../actionCreators/IRE-Pronounciation.js';
import { actionCreatorForGettingNote } from '../actionCreators/IRE-Notes.js';
import InteractiveReader from '../components/UIActionsForInteractiveReader.js';

function RenderUIActionsBasedOnTextSelectionChange(props) {
  return (
    <div>
      <InteractiveReader
        selectedText={props.selectedText}
        invokeMeaning={props.invokeMeaning}
        invokePronounciation={props.invokePronounciation}
        invokeAddNotes={props.invokeAddNotes}
      />
    </div>
  );
}

function getSelectedText(state) {
  console.log('insidegetSelectedText >>>>>>>>.', state);
  return {
    selectedText: state.selectedNode.selectedText,
  };
}

function dispactchActions(dispatch) {
  return {
    invokeMeaning: (selectedText) => {
      dispatch(actionCreatorForMeaningPayload(selectedText));
    },
    invokePronounciation: (selectedText) => {
      dispatch(actionCreatorForPronounciationPayload(selectedText));
    },
    invokeAddNotes: (selectedText) => {
      dispatch(actionCreatorForGettingNote(selectedText));
    },
  };
}

export default connect(
  getSelectedText,
  dispactchActions
)(RenderUIActionsBasedOnTextSelectionChange);

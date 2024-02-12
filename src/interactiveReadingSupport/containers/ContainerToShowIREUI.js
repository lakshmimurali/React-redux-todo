import React from 'react';

import { connect } from 'react-redux';
import { actionCreatorForMeaningPayload } from '../actionCreators/IRE-Meanings.js';
import { actionCreatorForPronounciationPayload } from '../actionCreators/IRE-Pronounciation.js';
import { actionCreatorForGettingNote } from '../actionCreators/IRE-Notes.js';
import InteractiveReader from '../components/UIActionsForInteractiveReader.js';

function RenderUIActionsBasedOnTextSelectionChange(props) {
  if (props.selectedText === '0000') {
    return null;
  }
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
  console.log('Meanings >>>>>>>>.', state.meanings);
  console.log('Pronounciations >>>>>>>>.', state.pronounciations);
  console.log('WriteUps >>>>>>>>.', state.writeups);
  console.log('Selected Text >>>>>>>>.', state.selectedNode);
  //  console.log('Selected Text >>>>>>>>.', state.selectedNode);

  return {
    selectedText: state.selectedNode,
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

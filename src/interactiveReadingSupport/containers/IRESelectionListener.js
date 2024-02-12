import getSelectionText from './helperToGetSelectedText.js';
import { actionCreatorForMeaningPayload } from '../actionCreators/IRE-Meanings.js';
import { actionCreatorForPronounciationPayload } from '../actionCreators/IRE-Pronounciation.js';
import { actionCreatorForGettingNote } from '../actionCreators/IRE-Meanings.js';
import InteractiveReader from '../components/UIActionsForInteractiveReader.js';

function renderUIActionsBasedOnTextSelectionChange(props) {
  return (
    <InteractiveReader
      selectedText={props.selectedText}
      invokeMeaning={props.invokeMeaning}
      invokePronounciation={props.invokePronounciation}
      invokeAddNotes={props.invokeAddNotes}
    />
  );
}

function getSelectedText(state) {
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
    updatedSelectedText: (selectedText) => {
      dispatch(actionCreatorForUpdatingSelectedText(selectedText));
    },
  };
}

export default connect(
  getSelectedText,
  dispactchActions
)(renderUIActionsBasedOnTextSelectionChange);

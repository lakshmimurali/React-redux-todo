import getSelectionText from './helperToGetSelectedText.js';
import { actionCreatorForMeaningPayload } from '../actionCreators/IRE-Meanings.js';
import { actionCreatorForPronounciationPayload } from '../actionCreators/IRE-Pronounciation.js';
import { actionCreatorForGettingNote } from '../actionCreators/IRE-Meanings.js';

function showIREFeatures({ dispatch }) {
  let selectedText = getSelectionText();

  if (selectedText !== '' && selectedText !== undefined) {
    return (
      <p>
        <button
          value="Meaning"
          key="1"
          onClick={() => {
            dispatch(actionCreatorForMeaningPayload(selectedText));
          }}
        >
          Check Meaning
        </button>
        <button
          value="Pronounciation"
          key="2"
          onClick={() => {
            dispatch(actionCreatorForPronounciationPayload(selectedText));
          }}
        >
          Pronounce It.. Plz..
        </button>
        <button
          value="addnote"
          key="3"
          onClick={() => {
            dispatch(actionCreatorForGettingNote(selectedText));
          }}
        >
          Add Note
        </button>
      </p>
    );
  }

  return null;
}

export default connect()(showIREFeatures);

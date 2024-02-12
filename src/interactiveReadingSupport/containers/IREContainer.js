import { connect } from 'react-redux';
import getSelectionText from './helperToGetSelectedText.js';

function getDataFromStore(state) {
  let selectedText = getSelectionText();
  return {
    meaningObj: state.meanings.synonyms[selectedText],
    pronounciationObj: state.pronounciations.urls[selectedText],
    notes: state.writeups.notes,
    selectedText: selectedText,
  };
}

function invokeInteractiveReadingExperienceActions(dispatch) {
  return {
    fetchMeaningsFromLocal: (word) => {
      dispatch(actionCreatorForMeaningPayload(word));
    },

    fetchMeaningsFromServer: (word) => {
      dispatch(actionCreatorForStoringMeaningPayload(word));
    },

    fetchMeaningsFromServer: (word) => {
      dispatch(actionCreatorForPronounciationPayload(word));
    },
    fetchPronounciationURLFromServer: (word) => {
      dispatch(actionCreatorForStoringPronounciationPayload(word));
    },
    fetchNote: (sentence) => {
      dispatch(actionCreatorForGettingNote(sentence));
    },
    listNotes: () => {
      dispatch(actionCreatorForGettingAllNotes());
    },
    storeNote: (sentence) => {
      dispatch(actionCreatorForStoringNote(sentence));
    },
    editNote: (sentence) => {
      dispatch(actionCreatorForEditingtheNote(sentence));
    },
    deleteNote: (sentence) => {
      dispatch(actionCreatorForDeletingtheNote(sentence));
    },
  };
}
function routingContainerForInteractiveReadingExperience(props) {
  let selectedText = getSelectionText();

  if (selectedText !== '' && selectedText !== undefined) {
    return (
      <p>
        <button
          value="Meaning"
          key="1"
          onClick={() => {
            renderMeaningsUI(props);
          }}
        >
          Check Meaning
        </button>
        <button
          value="Pronounciation"
          key="2"
          onClick={() => {
            renderPronounciationsUI(props);
          }}
        >
          Pronounce It.. Plz..
        </button>
        <button
          value="addnote"
          key="3"
          onClick={() => {
            renderNotesUI(props);
          }}
        >
          Add Note
        </button>
      </p>
    );
  }
  return null;
}

function renderMeaningsUI(props) {
  return (
    <ShowMeaningForWord
      meaningInfo={props.meaningObj}
      localAction={props.fetchMeaningsFromLocal}
      serverAction={fetchMeaningsFromServer}
    />
  );
}

function renderPronounciationsUI(props) {
  return (
    <ShowProuniciationAudioForGivenWord
      pronounciationInfo={props.pronounciationObj}
      localAction={fetchPronounciationURLFromLocal}
      serverAction={fetchPronounciationURLFromServer}
    />
  );
}

function renderNotesUI(props) {
  return (
    <ShowNotesForSentence
      sentence={props.selectedText}
      fetchNote={props.fetchNote}
      fetchAllNotes={props.listNotes}
      editNote={props.editNote}
      storeNote={props.storeNote}
      deleteNote={props.deleteNote}
    />
  );
}

export default connect(
  getDataFromStore,
  invokeInteractiveReadingExperienceActions
)(routingContainerForInteractiveReadingExperience);

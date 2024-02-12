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

function routingContainerForInteractiveReadingExperience_new(props) {
  let invokedAction = props.action;
  let invokeHandler;
  if (invokedAction === 'meaning') {
    invokeHandler = renderMeaningsUI;
  } else if (invokedAction === 'pronounciation') {
    invokeHandler = renderPronounciationsUI;
  } else {
    invokeHandler = renderNotesUI;
  }

  return <div>{invokeHandler()}</div>;
}

let renderMeaningsUI = (props) => {
  return (
    <ShowMeaningForWord
      meaningInfo={props.meaningObj}
      localAction={props.fetchMeaningsFromLocal}
      serverAction={fetchMeaningsFromServer}
    />
  );
};

let renderPronounciationsUI = (props) => {
  return (
    <ShowProuniciationAudioForGivenWord
      pronounciationInfo={props.pronounciationObj}
      localAction={fetchPronounciationURLFromLocal}
      serverAction={fetchPronounciationURLFromServer}
    />
  );
};

let renderNotesUI = (props) => {
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
};

export default connect(
  getDataFromStore,
  invokeInteractiveReadingExperienceActions
)(routingContainerForInteractiveReadingExperience);

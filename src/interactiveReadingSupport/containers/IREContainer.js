import { connect } from 'react-redux';

function getDataFromStore(state, ownProps) {
  return {
    meaningObj: state.meanings.synonyms[ownProps],
    pronounciationObj: state.pronounciations.urls[ownProps],
    notes: state.writeups.notes,
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
  if (props.invokedAction === 'meaning') {
    return (
      <ShowMeaningForWord
        word={props.word}
        localAction={props.fetchMeaningsFromLocal}
        serverAction={fetchMeaningsFromServer}
      />
    );
  }
  if (props.invokedAction === 'pronounciation') {
    return (
      <ShowProuniciationAudioForGivenWord
        word={props.word}
        localAction={fetchPronounciationURLFromLocal}
        serverAction={fetchPronounciationURLFromServer}
      />
    );
  }
  if (props.invokedAction === 'notes') {
    return (
      <ShowNotesForSentence
        sentence={props.sentence}
        fetchNote={props.fetchNote}
        fetchAllNotes={props.listNotes}
        editNote={props.editNote}
        storeNote={props.storeNote}
        deleteNote={props.deleteNote}
      />
    );
  }
}

export default connect(
  getDataFromStore,
  invokeInteractiveReadingExperienceActions
)(routingContainerForInteractiveReadingExperience);

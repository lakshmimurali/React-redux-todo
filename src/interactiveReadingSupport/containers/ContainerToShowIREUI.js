import React, { useState } from 'react';

import { connect } from 'react-redux';
import {
  actionCreatorForMeaningPayload,
  actionCreatorForStoringMeaningPayload,
} from '../actionCreators/IRE-Meanings.js';
import {
  actionCreatorForPronounciationPayload,
  actionCreatorForStoringPronounciationPayload,
} from '../actionCreators/IRE-Pronounciation.js';
import {
  actionCreatorForGettingNote,
  actionCreatorForGettingAllNotes,
  actionCreatorForStoringNote,
  actionCreatorForEditingtheNote,
  actionCreatorForDeletingtheNote,
} from '../actionCreators/IRE-Notes.js';
import InteractiveReader from '../components/UIActionsForInteractiveReader.js';

import ShowMeaningForWord from '../components/Dictionary.js';
import ShowProuniciationAudioForGivenWord from '../components/EnglishTrainer.js';
import ShowNotesForSentence from '../components/EnglishTrainer.js';

function getDataFromStore(state) {
  console.log('Meanings >>>>>>>>.', state.meanings);
  console.log('Pronounciations >>>>>>>>.', state.pronounciations);
  console.log('WriteUps >>>>>>>>.', state.writeups);
  console.log('Selected Text >>>>>>>>.', state.selectedNode);
  //  console.log('Selected Text >>>>>>>>.', state.selectedNode);
  let selectedText = state.selectedNode;
  return {
    selectedText: selectedText,
    meaningObj: state.meanings.synonyms[selectedText],
    pronounciationObj: state.pronounciations.urls[selectedText],
    notes: state.writeups.notes,
  };
}

function dispactchActions(dispatch) {
  return {
    getMeaning: (selectedText) => {
      dispatch(actionCreatorForMeaningPayload(selectedText));
    },
    getPronounciation: (selectedText) => {
      dispatch(actionCreatorForPronounciationPayload(selectedText));
    },
    invokeAddNotes: (selectedText) => {
      dispatch(actionCreatorForGettingNote(selectedText));
    },
    fetchMeaningsFromServer: (word) => {
      dispatch(actionCreatorForStoringMeaningPayload(word));
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

function RespondToUIActionsBasedOnTextSelectionChange(props) {
  let [currentIREAction, setFetchingData] = useState('');
  if (props.selectedText === '0000') {
    return null;
  }
  let componentToRender = null;
  if (currentIREAction === 'meaning') {
    componentToRender = (
      <ShowMeaningForWord
        meaningInfo={props.meaningObj}
        localAction={props.getMeaning}
        serverAction={props.fetchMeaningsFromServer}
        selectedText={props.selectedText}
      />
    );
  }
  if (currentIREAction === 'pronounciation') {
    componentToRender = (
      <ShowProuniciationAudioForGivenWord
        pronounciationInfo={props.pronounciationObj}
        localAction={props.getPronounciation}
        serverAction={props.fetchPronounciationURLFromServer}
        selectedText={props.selectedText}
      />
    );
  }
  if (currentIREAction === 'notes') {
    componentToRender = (
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
  return (
    <div>
      <InteractiveReader
        selectedText={props.selectedText}
        invokeMeaning={props.invokeMeaning}
        invokePronounciation={props.invokePronounciation}
        invokeAddNotes={props.invokeAddNotes}
        notifyParent={setFetchingData}
      />
      {componentToRender}
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispactchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

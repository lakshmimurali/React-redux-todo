import React, { useState } from 'react';

import { connect } from 'react-redux';
import {
  actionCreatorForMeaningPayload,
  actionCreatorForFetchingMeaningOfPayload,
} from '../actionCreators/IRE-Meanings.js';
import {
  actionCreatorForPronounciationPayload,
  actionCreatorForFetchingPronounciationOfWord,
} from '../actionCreators/IRE-Pronounciation.js';
import {
  actionCreatorForGettingNote,
  actionCreatorForGettingAllNotes,
  actionCreatorForStoringNote,
  actionCreatorForEditingtheNote,
  actionCreatorForDeletingtheNote,
} from '../actionCreators/IRE-Notes.js';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

import InteractiveReader from '../components/UIActionsForInteractiveReader.js';

import ShowMeaningForWord from '../components/Dictionary.js';
import ShowProuniciationAudioForGivenWord from '../components/EnglishTrainer.js';
import ShowNotesForSentence from '../components/EnglishTrainer.js';

function getDataFromStore(state) {
  console.log('Selected Text >>>>>>>>.', state.selectedNode);
  let selectedText = state.selectedNode;
  return {
    selectedText: selectedText,
    //meaningObj: state.meanings.synonyms[selectedText],
    // pronounciationObj: state.pronounciations.urls[selectedText],
    //notes: state.writeups.notes,
  };
}

function dispatchActions(dispatch) {
  return {
    /*getMeaning: (selectedText) => {
      dispatch(actionCreatorForMeaningPayload(selectedText));
    },
    getPronounciation: (selectedText) => {
      dispatch(actionCreatorForPronounciationPayload(selectedText));
    },
    invokeAddNotes: (selectedText) => {
      dispatch(actionCreatorForGettingNote(selectedText));
    },*/
    fetchMeaningsFromServer: (word) => {
      dispatch(actionCreatorForFetchingMeaningOfPayload(word));
    },

    /*fetchPronounciationURLFromServer: (word) => {
      dispatch(actionCreatorForFetchingPronounciationOfWord(word));
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
    updateCurrentIREAction: (action) => {
      dispatch(actionCreatorForUpdatingCurrentIREAction(action));
    },
    updateCurrentSelectedText: (text) => {
      dispatch(actionCreatorForUpdatingSelectedText(text));
    },*/
  };
}

function RespondToUIActionsBasedOnTextSelectionChange(props) {
  console.log('props in RespondToUIActionsBasedOnTextSelectionChange', props);
  /*if (props.selectedText === '0000') {
    return null;
  }*/

  /*let meaningRenderer = (
    <ShowMeaningForWord
      meaningInfo={props.meaningObj}
      invokelocalFetch={props.getMeaning}
      serverAction={props.fetchMeaningsFromServer}
      selectedText={props.selectedText}
      updateCurrentSelectedText={props.updateCurrentSelectedText}
    />
  );

  let pronounceRenderer = (
    <ShowProuniciationAudioForGivenWord
      pronounciationInfo={props.pronounciationObj}
      invokelocalFetch={props.getPronounciation}
      serverAction={props.fetchPronounciationURLFromServer}
      selectedText={props.selectedText}
    />
  );

  let notesRenderer = (
    <ShowNotesForSentence
      sentence={props.selectedText}
      fetchNote={props.fetchNote}
      fetchAllNotes={props.listNotes}
      editNote={props.editNote}
      storeNote={props.storeNote}
      deleteNote={props.deleteNote}
      updateCurrentIREAction={props.updateCurrentIREAction}
    />
  );*/

  return (
    <div>
      <InteractiveReader
        selectedText={props.selectedText}
        invokeServerFetch={props.fetchMeaningsFromServer}
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

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

function getDataFromStore({ selectedNode }) {
  console.log('Selected Text >>>>>>>>.', selectedNode);

  return {
    selectedText: selectedNode,
    //meaningObj: state.meanings.synonyms[selectedText],
    // pronounciationObj: state.pronounciations.urls[selectedText],
    //notes: state.writeups.notes,
  };
}

function dispatchActions(dispatch) {
  return {
    getMeaning: (selectedText) => {
      dispatch(actionCreatorForMeaningPayload(selectedText));
    },
    /*getPronounciation: (selectedText) => {
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

function RespondToUIActionsBasedOnTextSelectionChange({
  selectedText,
  getMeaning,
  fetchMeaningsFromServer,
}) {
  console.log(
    'props in RespondToUIActionsBasedOnTextSelectionChange',
    selectedText,
    getMeaning,
    fetchMeaningsFromServer
  );

  return (
    <div>
      <InteractiveReader
        selectedText={selectedText}
        invokeServerFetch={fetchMeaningsFromServer}
        localFetch={getMeaning}
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

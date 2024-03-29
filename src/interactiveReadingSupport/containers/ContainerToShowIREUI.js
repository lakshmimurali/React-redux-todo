import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actionCreatorForFetchingMeaningOfPayload } from '../actionCreators/IRE-Meanings.js';

import { actionCreatorForFetchingPronounciationOfWord } from '../actionCreators/IRE-Pronounciation.js';

import { actionCreatorForFetchingAbbreviations } from '../actionCreators/IREActions-Abbreviation.js';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

import {
  actionCreatorForStoringNote,
  actionCreatorForEditingtheNote,
  actionCreatorForDeletingtheNote,
  
} from '../actionCreators/IRE-Notes.js';

import actionCreatorForHightlightingToDo from '../../actions/highlightToDo.js';

import InteractiveReader from '../components/UIActionsForInteractiveReader.js';
import ShowMeaningForWord from '../components/Dictionary.js';
import ShowProuniciationAudioForGivenWord from '../components/EnglishTrainer.js';
import ShowAbbreviationForAcronym from '../components/DisplayAbbreviation.js';
import ShowUserWrittenNote from '../components/DisplayUserNote.js';
import DisplayAllNotes from '../components/DisplayUserNoteList.js';

function getDataFromStore(state) {
  console.log(
    'Selected Text in Toolscontainer',
    state.selectedNode,
    state.meanings,
    state.pronounciations,
    state.abbr
  );
  return {
    selectedText: state.selectedNode,
    meaningObj: state.meanings.synonyms,
    urlList: state.pronounciations.urls,
    notesList: state.writeups.notes,
    abbrList: state.abbr.abbreviations,
  };
}

function dispatchActions(dispatch) {
  return {
    fetchMeaningsFromServer: (word) => {
      dispatch(actionCreatorForFetchingMeaningOfPayload(word));
    },
    fetchPronounciationDetailsFromServer: (word) => {
      dispatch(actionCreatorForFetchingPronounciationOfWord(word));
    },
    fetchAbbreviationDetailsFromServer: (word) => {
      dispatch(actionCreatorForFetchingAbbreviations(word));
    },
    storeNote: (payload) => {
      dispatch(actionCreatorForStoringNote(payload));
    },
    updateNote: (payload) => {
      dispatch(actionCreatorForEditingtheNote(payload));
    },
    deleteNote: (payload) => {
      dispatch(actionCreatorForDeletingtheNote(payload));
    },
    invokeHighlightTextAction: (payload) => {
      dispatch(actionCreatorForHightlightingToDo(payload));
    },
    invokeActionCreatorForUpdatingSelectedText: (text) => {
      dispatch(actionCreatorForUpdatingSelectedText(text));
    },
  };
}

function RespondToUIActionsBasedOnTextSelectionChange(props) {
  if (props.selectedText === '0000' || props.selectedText.length === 0) {
    return null;
  }

  console.log(
    'props in RespondToUIActionsBasedOnTextSelectionChange toolscontainer',
    props.selectedText,
    props.meaningObj,
    props.urlList,
    props.notesList,
    props.abbrList,
    props.fetchMeaningsFromServer,
    props.fetchPronounciationDetailsFromServer,
    props.fetchAbbreviationDetailsFromServer
  );

  console.log('noteList is >>>>>>>>>>>>>', props.notesList);

  let meaningRenderer = (
    <ShowMeaningForWord
      meaningObj={props.meaningObj}
      selectedText={props.selectedText}
      notesList={props.notesList}
      storeNote={props.storeNote}
      updateNote={props.updateNote}
    />
  );
  let pronounciationRenderer = (
    <ShowProuniciationAudioForGivenWord
      selectedText={props.selectedText}
      urlList={props.urlList}
      notesList={props.notesList}
      storeNote={props.storeNote}
      updateNote={props.updateNote}
    />
  );

  let noteRenderer = (
    <ShowUserWrittenNote
      selectedText={props.selectedText}
      notesList={props.notesList}
      storeNote={props.storeNote}
      updateNote={props.updateNote}
      fromAddForm={true}
    />
  );

  let allNotesRenderer = (
    <DisplayAllNotes
      notesList={props.notesList}
      deleteNote={props.deleteNote}
      selectedText={props.selectedText}
      updateNote={props.updateNote}
    />
  );

  let abbreviationRenderer = (
    <ShowAbbreviationForAcronym
      selectedText={props.selectedText}
      abbrList={props.abbrList}
      notesList={props.notesList}
      storeNote={props.storeNote}
      updateNote={props.updateNote}
    />
  );

  return (
    <div>
      <InteractiveReader
        selectedText={props.selectedText}
        invokeServerFetch={props.fetchMeaningsFromServer}
        invokeServerFetchForPronounciation={
          props.fetchPronounciationDetailsFromServer
        }
        invokeServerFetchForAbbreviation={
          props.fetchAbbreviationDetailsFromServer
        }
        invokeHighlightTextAction={props.invokeHighlightTextAction}
        meaningObj={props.meaningObj}
        abbrList={props.abbrList}
        urlList={props.urlList}
        Meaningrenderer={meaningRenderer}
        PronounciationRenderer={pronounciationRenderer}
        NoteRenderer={noteRenderer}
        AllNotesRenderer={allNotesRenderer}
        AbbreviationRenderer={abbreviationRenderer}
        invokeActionCreatorForUpdatingSelectedText={
          props.invokeActionCreatorForUpdatingSelectedText
        }
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

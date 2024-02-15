import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actionCreatorForFetchingMeaningOfPayload } from '../actionCreators/IRE-Meanings.js';

import { actionCreatorForFetchingPronounciationOfWord } from '../actionCreators/IRE-Pronounciation.js';

import InteractiveReader from '../components/UIActionsForInteractiveReader.js';
import ShowMeaningForWord from '../components/Dictionary.js';
import ShowProuniciationAudioForGivenWord from '../components/EnglishTrainer.js';

function getDataFromStore(state) {
  console.log(
    'Selected Text in toolscontainer',
    state.selectedNode,
    state.meanings,
    state.pronounciations
  );
  return {
    selectedText: state.selectedNode.textValue,
    meaningObj: state.meanings.synonyms,
    urlList: state.pronounciations.urls,
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
    props.fetchMeaningsFromServer,
    props.fetchPronounciationDetailsFromServer
  );

  let meaningRenderer = (
    <ShowMeaningForWord
      meaningObj={props.meaningObj}
      selectedText={props.selectedText}
    />
  );
  let pronounciationRenderer = (
    <ShowProuniciationAudioForGivenWord
      selectedText={props.selectedText}
      urlList={props.urlList}
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
        meaningObj={props.meaningObj}
        urlList={props.urlList}
        Meaningrenderer={meaningRenderer}
        PronounciationRenderer={pronounciationRenderer}
      />
    </div>
  );
}

export default connect(
  getDataFromStore,
  dispatchActions
)(RespondToUIActionsBasedOnTextSelectionChange);

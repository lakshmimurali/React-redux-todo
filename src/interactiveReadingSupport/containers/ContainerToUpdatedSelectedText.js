import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = (event) => {
      let selectedWord = window.getSelection().toString().trim();
      console.log(
        'Selected Word in Container to listen for selection change',
        selectedWord
      );
      dispatch(actionCreatorForUpdatingSelectedText(selectedWord));
    };
    document.addEventListener('selectionchange', handleSelection, false);

    return () => {
      document.removeEventListener('selectionchange', handleSelection, false);
    };
  }, []);
  return null;
}

export default connect()(UpdateSelectedText);

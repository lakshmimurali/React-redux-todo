import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

import getSelectionText from './helperToGetSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = (event) => {
      //let selectedWord = getSelectionText();
      let selectedWord = window.getSelection().toString();
      console.log(
        'In  UpdateSelectedText container useeffect for mouseup event',
        selectedWord
      );
      console.log('event.target IS >>>>>>>>>', event.target.value);
      dispatch(actionCreatorForUpdatingSelectedText(selectedWord));
    };

    document.addEventListener('mouseup', handleSelection, true);

    return () => {
      document.removeEventListener('mouseup', handleSelection, true);
    };
  }, []);
  return null;
}

export default connect()(UpdateSelectedText);

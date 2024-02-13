import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

import getSelectionText from './helperToGetSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = () => {
      let selectedWord = getSelectionText();
      console.log(
        'In  UpdateSelectedText container useeffect for mouseup event',
        selectedWord
      );
      dispatch(actionCreatorForUpdatingSelectedText(selectedWord));
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);
  return null;
}

export default connect()(UpdateSelectedText);

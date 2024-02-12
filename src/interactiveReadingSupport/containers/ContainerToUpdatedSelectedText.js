import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        const selectedWord = selection.toString();
        console.log(
          'In  UpdateSelectedText container useeffect for mouseup event',
          selectedWord
        );
        dispatch(actionCreatorForUpdatingSelectedText(selectedWord));
      }
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);
  return null;
}

export default connect()(UpdateSelectedText);

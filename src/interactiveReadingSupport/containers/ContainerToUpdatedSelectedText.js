import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = (event) => {
      console.log('selection event triggers', event.target);

      let selectedWord = window.getSelection().toString();
      console.log(
        'In  UpdateSelectedText container useeffect for selectionchange event',
        selectedWord
      );

      dispatch(actionCreatorForUpdatingSelectedText(selectedWord));
    };
    document.addEventListener('selectionchange', handleSelection, true);

    return () => {
      document.removeEventListener('selectionchange', handleSelection, true);
    };
  }, []);
  return null;
}

export default connect()(UpdateSelectedText);

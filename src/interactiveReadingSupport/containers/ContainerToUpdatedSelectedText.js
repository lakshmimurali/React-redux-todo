import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = (event) => {
      console.log('selection event triggers', event.target, event.target.value);

      let selectedWord = window.getSelection().toString();
      let selectedElemParent = console.log(
        'In  UpdateSelectedText container useeffect for selectionchange event',
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

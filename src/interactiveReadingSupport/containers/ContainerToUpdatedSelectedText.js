import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getSelectionParentElement from './helperToGetSelectedElementParent.js';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = (event) => {
      let selectedWord = window.getSelection().toString();
      let selectedElemParent = getSelectionParentElement();
      console.log(
        'In  UpdateSelectedText container useeffect for selectionchange event',
        selectedWord,
        selectedElemParent
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

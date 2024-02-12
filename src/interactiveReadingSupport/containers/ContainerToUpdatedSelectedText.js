import { connect } from 'react-redux';

import actionCreatorForUpdatingSelectedText from '../actionCreators/IRE-UpdateSelectedText.js';

function UpdateSelectedText({ dispatch }) {
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        const selectedWord = selection.toString();
        dispatch(actionCreatorForUpdatingSelectedText(selectedWord));
      }
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);
}

export default connect()(UpdateSelectedText);

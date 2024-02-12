import actionCreatorForUpdatingSelectedText from '../acionCreators/IRE-UpdatedSelectedText.js'
function updateSelectedText({ dispatch }) {
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

export default connect()(updateSelectedText);

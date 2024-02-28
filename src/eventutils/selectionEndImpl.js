import debounce from './debounce.js';

function subscribeToSelectEvent(callBackHandler) {
  let selectionEndTimeout = null,
    selectionEndEvent = new Event('selectionEnd');
  let selectedWord = '';
  let isTyping = false;

  let selectionEndCallBackHandler = () => {
    console.log('End selection!');
    callBackHandler(selectedWord);
  };
  document.addEventListener('selectionEnd', selectionEndCallBackHandler, false);

  let isTypingTrueHandler = () => {
    isTyping = true;
  };

  let isTypingFalseHandler = () => {
    isTyping = false;
  };
  document.addEventListener('keydown', isTypingTrueHandler);
  document.addEventListener('input', isTypingTrueHandler);
  document.addEventListener('change', isTypingTrueHandler);
  document.addEventListener('dragstart', isTypingTrueHandler);
  document.addEventListener('touchstart', isTypingTrueHandler);
  document.addEventListener('paste', isTypingTrueHandler);
  document.addEventListener('mousedown', isTypingFalseHandler);
  document.addEventListener('dragend', isTypingFalseHandler);
  document.addEventListener('touchend', isTypingFalseHandler);

  let selectionChangeHandler = (event) => {
    if (
      event.type == 'selectionchange' &&
      window.getSelection().toString().trim() != '' &&
      isTyping === false
    ) {
      selectedWord = window.getSelection().toString().trim();
      document.dispatchEvent(selectionEndEvent);
    }
  };

  const debouncedHandleSelectionChange = debounce(selectionChangeHandler, 300);

  ['selectionchange'].map((e) => {
    document.addEventListener(
      e.toString(),
      debouncedHandleSelectionChange,
      false
    );
  });
  return function unSubscribe() {
    document.removeEventListener(
      'selectionEnd',
      selectionEndCallBackHandler,
      false
    );
    document.removeEventListener(
      'selectionchange',
      selectionChangeHandler,
      false
    );
    document.removeEventListener('keydown', isTypingTrueHandler, false);
    document.removeEventListener('input', isTypingTrueHandler, false);
    document.removeEventListener('change', isTypingTrueHandler, false);
    document.removeEventListener('dragstart', isTypingTrueHandler, false);
    document.removeEventListener('touchstart', isTypingTrueHandler, false);
    document.removeEventListener('paste', isTypingTrueHandler, false);
    document.removeEventListener('mousedown', isTypingFalseHandler, false);
    document.removeEventListener('dragend', isTypingFalseHandler, false);
    document.removeEventListener('touchend', isTypingFalseHandler, false);
  };
}

export default subscribeToSelectEvent;

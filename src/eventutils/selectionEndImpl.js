function subscribeToSelectEvent(callBackHandler) {
  let selectionEndTimeout = null,
    selectionEndEvent = new Event('selectionEnd');
  let selectedWord = '';

  document.addEventListener(
    'selectionEnd',
    function (evt /*event*/) {
      console.log('End selection!');
      callBackHandler(selectedWord);
    },
    false
  );

  ['selectionchange'].map((e) => {
    document.addEventListener(e.toString(), (evt /*event*/) => {
      if (selectionEndTimeout && evt.type == 'selectionchange') {
        clearTimeout(selectionEndTimeout);
        console.info('User Selection Changed');
      }

      selectionEndTimeout = setTimeout(function () {
        if (
          evt.type == 'selectionchange' &&
          window.getSelection().toString() != ''
        ) {
          selectedWord = window.getSelection().toString().trim();
          document.dispatchEvent(selectionEndEvent);
        }
      }, 100);
    });
  });
  return function unSubscribe() {
    document.removeEventListener('selectionEnd');
    document.removeEventListener('selectionchange');
  };
}

function unsubscribeToSelectEvent() {}
export default subscribeToSelectEvent;

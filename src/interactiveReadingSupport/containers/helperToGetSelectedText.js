export default function getSelectionText() {
  let selectedText = '';
  var activeEl = document.activeElement;
  var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
  if (
    activeElTagName == 'textarea' ||
    (activeElTagName == 'input' &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
      typeof activeEl.selectionStart == 'number')
  ) {
    selectedText = activeEl.value.slice(
      activeEl.selectionStart,
      activeEl.selectionEnd
    );
  } else if (window.getSelection) {
    selectedText = window.getSelection().toString();
  }
  return selectedText;
}

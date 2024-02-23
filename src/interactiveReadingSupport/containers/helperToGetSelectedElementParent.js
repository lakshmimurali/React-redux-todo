function getSelectionParentElement() {
  var parentEl = null,
    sel;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      parentEl = sel.getRangeAt(0).commonAncestorContainer;
      if (parentEl.nodeType != 1) {
        parentEl = parentEl.parentNode;
      }
    }
  } else if ((sel = document.selection) && sel.type != 'Control') {
    parentEl = sel.createRange().parentElement();
  }
  return parentEl;
}

export default getSelectionParentElement;

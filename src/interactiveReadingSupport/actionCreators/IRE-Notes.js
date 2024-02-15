const actionCreatorForStoringNote = (payload) => {
  return {
    type: 'store-the-note',
    note: payload.note,
    sentence: payload.sentence,
  };
};

/*const actionCreatorForGettingNote = (sentence) => {
  return {
    type: 'get-the-note',
    sentence: sentence,
  };
};
const actionCreatorForGettingAllNotes = () => {
  return {
    type: 'get-all-notes',
  };
};*/

const actionCreatorForDeletingtheNote = (sentence) => {
  return {
    type: 'delete-the-note',
    sentence: sentence,
  };
};

const actionCreatorForEditingtheNote = (payload) => {
  return {
    type: 'editing-the-note',
    sentence: payload.sentence,
    note: payload.note,
  };
};

export {
  actionCreatorForStoringNote,
  actionCreatorForDeletingtheNote,
  actionCreatorForEditingtheNote,
};

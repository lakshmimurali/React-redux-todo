const initialStateForWNotesReducer = { notes: [] };
const notesReducer = (state = initialStateForWNotesReducer, action) => {
  let actionType = action.type;

  if (actionType === 'store-the-note') {
    let sentence = action.sentence;
    let note = action.note;
    return {
      ...state,
      notes: [
        ...state.notes,
        {
          [sentence]: {
            note: note,
            name: sentence,
          },
        },
      ],
    };
  }
  if (actionType === 'get-the-note') {
    let sentence = action.sentence;
    let requiredNoteInfo = state.notes.filter((noteObj) => {
      return noteObj[sentence] !== undefined;
    });

    return requiredNoteInfo;
  }
  if (actionType === 'delete-the-note') {
    let sentence = action.sentence;
    let updatedNoteInfo = state.notes.filter((noteObj) => {
      return noteObj[sentence] === undefined;
    });
    return {
      ...state,
      notes: [...updatedNoteInfo],
    };
  }
  if (actionType === 'edit-the-note') {
    let sentence = action.sentence;
    let updatedNoteInfo = state.notes.map((noteObj) => {
      if (noteObj[sentence] !== undefined) {
        noteObj[sentence].note = action.note;
      }
      return noteObj;
    });
    return {
      ...state,
      notes: [...updatedNoteInfo],
    };
  }
  return state;
};

export default notesReducer;

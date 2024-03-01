function getNote(sentence, notesList) {
  let requiredNoteInfo = notesList.filter((noteObj) => {
    console.log('noteObj in getNote is', noteObj, noteObj[sentence]);
    return noteObj[sentence] !== undefined;
  });

  console.log('Required Note Info is >>>>>>>>>>>>', requiredNoteInfo);
  if (requiredNoteInfo.length) {
    return requiredNoteInfo[0][sentence];
  } else {
    return {
      note: '',
      sentence: '',
    };
  }
}

export default getNote;

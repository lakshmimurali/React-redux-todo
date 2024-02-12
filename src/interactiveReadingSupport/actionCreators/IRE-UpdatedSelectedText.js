const actionCreatorForUpdatingSelectedText = (text) => {
  return {
    type: 'update-selected-text',
    text: text,
  };
};

export default actionCreatorForUpdatingSelectedText;

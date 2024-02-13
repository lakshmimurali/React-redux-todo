const actionCreatorForUpdatingSelectedText = (text = '') => {
  console.log('inside actionCreatorForUpdatingSelectedText', text);
  return {
    type: 'update-selected-text',
    text: text,
  };
};

export default actionCreatorForUpdatingSelectedText;

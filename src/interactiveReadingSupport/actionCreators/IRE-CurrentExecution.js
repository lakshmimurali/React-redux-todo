const actionCreatorForUpdatingCurrentIREAction = (text) => {
  return {
    type: 'update-selected-text',
    text: text,
  };
};

export default actionCreatorForUpdatingCurrentIREAction;

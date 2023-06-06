function toDoFilterReducer(state = { selectedView: 'All', toDos: [] }, action) {
  if (action.type === 'APPLY_FILTER') {
    let selectedFilter = action.selectedFilter;
    return {
      ...state,
      selectedView: selectedFilter,
    };
  }
  return state;
}

export default toDoFilterReducer;

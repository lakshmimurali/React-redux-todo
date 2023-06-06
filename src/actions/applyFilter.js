function applyFilter(filerValue) {
  return {
    type: 'APPLY_FILTER',
    selectedFilter: filerValue,
  };
}

export default applyFilter;

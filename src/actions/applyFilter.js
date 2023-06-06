function applyFilter(filerValue) {
  console.log('Inside ApplyFilter', filerValue);
  return {
    type: 'APPLY_FILTER',
    selectedFilter: filerValue,
  };
}

export default applyFilter;

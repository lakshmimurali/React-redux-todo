import React from 'react';
import { connect } from 'react-redux';
import applyFilter from '../actions/applyFilter.js';
import FilterButton from '../components/FilterButton.js';

/*let mapDispatchToprops = (dispatch, ownProps) => {
  return {
    invokeApplyFilterActionCreator: (filterValue) => {
      dispatch(applyFilter(filterValue));
    },
  };
};
export default connect(null, mapDispatchToprops)(Button);

*/

function applyFilterActionCreator(dispatch) {
  return {
    invokeApplyFilterActionCreator: (filterValue) => {
      dispatch(applyFilter(filterValue));
    },
  };
}

function ConnectFilterButton({ dispatch }) {
  console.log('Inside ConnectAddToDoForm', dispatch);
  let invokeApplyFilterActionCreatorAsProps =
    applyFilterActionCreator(dispatch);

  return (
    <FilterButton
      values={['All', 'Active', 'Completed']}
      invokeApplyFilterActionCreatorAsProps={
        invokeApplyFilterActionCreatorAsProps
      }
    />
  );
}
export default connect()(ConnectFilterButton);

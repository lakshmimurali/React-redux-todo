import { connect } from 'react-redux';
import applyFilter from '../actions/applyFilter.js';
import Button from '../components/Button.js';

let mapDispatchToprops = (dispatch, ownProps) => {
  return {
    invokeApplyFilterActionCreator: (filterValue) => {
      dispatch(applyFilter(filterValue));
    },
  };
};
export default connect(null, mapDispatchToprops)(Button);

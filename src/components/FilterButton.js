import React from 'react';
function FilterButton(props) {
  let invokeApplyFilterActionCreator = (event) => {
    return props.invokeApplyFilterActionCreatorAsProps.invokeApplyFilterActionCreator(
      event.target.value
    );
  };
  let filterButtons = props.values.map((value, index) => {
    return (
      <button
        value={value}
        key={index}
        onClick={invokeApplyFilterActionCreator}
      >
        {value}
      </button>
    );
  });
  return filterButtons;
}

export default FilterButton;

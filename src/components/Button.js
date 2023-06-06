import React from 'react';

function Button(props) {
  let invokeApplyFilterActionCreator = () => {
    return props.invokeApplyFilterActionCreator(props.value);
  };

  return (
    <button onClick={invokeApplyFilterActionCreator}>{props.value}</button>
  );
}

export default Button;

import React from 'react';
import Todo from './Todo.js';

function TodoList(props) {
  console.log(props.toDoListFromStore);
  console.log(props.invokeToggleToDoActionCreator);
  let toToDoList = null;

  function renderToDoData() {
    if (
      props.toDoListFromStore === undefined ||
      props.toDoListFromStore === null
    ) {
      return null;
    }
    toToDoList = props.toDoListFromStore.map((toDo) => {
      let toDoKey = Object.keys(toDo);
      console.log(toDoKey);
      let toToData = toDo[toDoKey];
      console.log(toToData);
      return toToData;
    });
    console.log(toToDoList);
    return constructToDoData(toToDoList);
  }

  function constructToDoData(toToDoList) {
    let toDoListElements = toToDoList.map((toDo) => {
      if (selectedView === 'Completed' && toDo.isCompleted === false) {
        return;
      }
      if (selectedView === 'Active' && toDo.isCompleted === true) {
        return;
      }

      return (
        <Todo
          value={toDo.task}
          id={toDo.id}
          isCompleted={toDo.isCompleted}
          invokeToggleToDoActionCreator={props.invokeToggleToDoActionCreator}
          selectedView={props.selectedView}
        />
      );
    });
    return toDoListElements;
  }

  return (
    <div>
      Added ToDo List:
      <ul>{renderToDoData()}</ul>
    </div>
  );
}
export default TodoList;

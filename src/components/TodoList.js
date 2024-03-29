import React from 'react';
import Todo from './Todo.js';

function TodoList(props) {
  /*console.log('Inside TodoList', props.toDoListFromStore);
  console.log(' Inside TodoList', props.invokeToggleToDoActionCreator);
  console.log(' Inside TodoList', props.selectedView);*/
  let toToDoList = null;

  function renderToDoData() {
    if (props.toDoListFromStore.toDos.length === 0) {
      return null;
    }
    toToDoList = props.toDoListFromStore.toDos.map((toDo) => {
      let toDoKey = Object.keys(toDo);
      //console.log(toDoKey);
      let toToData = toDo[toDoKey];
      //console.log(toToData);
      return toToData;
    });
    //console.log(toToDoList);
    return constructToDoData(toToDoList);
  }

  function constructToDoData(toToDoList) {
    let toDoListElements = toToDoList.map((toDo) => {
      console.log('Inside constructToDoData', toDo);
      if (props.selectedView === 'Completed' && toDo.completed === false) {
        return;
      }
      if (props.selectedView === 'Active' && toDo.completed === true) {
        return;
      }

      return (
        <Todo
          value={toDo.value}
          id={toDo.id}
          key={toDo.id}
          completed={toDo.completed}
          invokeToggleToDoActionCreator={props.invokeToggleToDoActionCreator}
          selectedView={props.selectedView}
          textToHighlight={toDo.textToHighlight}
        />
      );
    });
    return toDoListElements;
  }
  //console.log('Props Data', props);
  let taskList = renderToDoData();
  return (
    <div>
      Added ToDo List:
      <ul style={{ whiteSpace: 'pre-wrap' }}>{taskList}</ul>
    </div>
  );
}
export default TodoList;

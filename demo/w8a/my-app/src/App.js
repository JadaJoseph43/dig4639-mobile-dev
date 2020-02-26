import React from 'react';
import logo from './logo.svg';
import './App.css';

function TodoItem(props) {
  return <p className='card'>{props.content}</p>
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todolist: todoList,
      showOnlyUncompletedTasks: false
    }
}

addTask() {
  let newtask =
  { "content": "Task 3", "priority": 3, "completed": false }
  let currrentList = his.state.todoList
  currentlist.push(newtask)
  this.setState({ todoList: currentList })
}
render() {
  return (
    <>
    <div className="inputTask">

    <input type="button" value="Add Task" onClick={() => this.addTask()}/>
    <input type="checkbox" ref="completedFilter"
    onChange={(e) => this.setState({showOnlyUncompletedTasks: e.target.checked})}
id="completedFilter" name="completedFilter" value="completed" />
    <label htmlFor="compltedFilter"> show only uncompleted tasks</label>
    </div>
    {(this.state.showOnlyUncompletedTask ?
      this.state.todoList.filter((v) => !v.completed)
      :
    this.state.todoList)
    .map((V) => <TodoItem priority={v.priority}
    content={v.content} completed={v.completed} />)}
  </>
  );
}
}

export default App;
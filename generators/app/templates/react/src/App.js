import React from 'react';
import ReactDOM from 'react-dom';
import {TodoItem,NewTodoItem} from './ToDoItem';
import {UserList} from './UserList';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
    let stored_items = ["Clean out stockroom","Generate paychecks for week","Re-inspect the alarm systems"];
	this.state = {items: stored_items};
  }
 
  render() {
    let items = this.state.items.map((item,index) => {
      return <li key={index}><TodoItem item={item} /></li>;
    });
    return(
      <div>
        <h3>Available Staff</h3>
        <UserList/>
        <h3>Work List</h3>
        <ul>{items}</ul>
		<p/>
        <div><NewTodoItem addEvent={this.addEvent} /></div>
      </div>
    );
  }
  
  addEvent(todoItem){
    let stored_items = this.state.items;
    stored_items.push(todoItem.newItem);
    this.setState({items : stored_items});
  }
}

ReactDOM.render(<TodoList/>, document.getElementById('@@portletNameCleaned'));
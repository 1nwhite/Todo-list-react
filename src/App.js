import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import TodoForm from './components/form/TodoForm'
import TodoList from './components/list/TodoList'
import { updateLocalStorage, getItemsList } from './localStorage'

class App extends Component {
  state = {
    itemsList: [],
    todoTitle: '',
    error: false,
  }

  componentDidMount() {
    const itemsList = getItemsList();

    this.setState({ itemsList });
  }

  getTodoTitle = (e) => {
    this.setState({
      todoTitle: e.target.value
    })
  }

  writeData = () => {
    if (this.state.todoTitle) {
      let todoItem = {
        title: this.state.todoTitle,
        id: Date.now(),
        edit: false,
        checked: false,
      }
      const { itemsList } = this.state;

      this.setState({
        itemsList: itemsList.concat(todoItem),
        error: false,
        todoTitle: ''
      }, () => {
        updateLocalStorage(this.state.itemsList)
      })

    } else {
      this.setState({
        error: true
      })
    }

  }

  activateEditing = (id) => {
    const { itemsList } = this.state;

    return () => {
      this.setState({
        itemsList: itemsList.map(item => item.id === id
          ? { ...item, edit: true } : item)
      })
    }
  }

  getEditText = (id) => {
    const { itemsList } = this.state;

    return (event) => {
      this.setState({
        itemsList: itemsList.map(item => item.id === id
          ? { ...item, title: event.target.value } : item)
      })
    }
  }

  applyEditing = (id) => {
    const { itemsList } = this.state;

    return () => {
      this.setState({
        itemsList: itemsList.map(item => item.id === id
          ? { ...item, edit: false } : item)
      }, () => {
        updateLocalStorage(this.state.itemsList)
      })
    }
  }

  deleteItem = (id) => {
    const { itemsList } = this.state;

    return () => {
      this.setState({
        itemsList: itemsList.filter(item => item.id !== id)
      }, () => {
        updateLocalStorage(this.state.itemsList)
      })
    }
  }

  checkedItem = (id) => {
    const { itemsList } = this.state;

    return () => {
      this.setState(
        (prevState => ({
          itemsList: itemsList.map((item, i) => item.id === id
            ? { ...item, checked: !prevState.itemsList[i].checked } : item)
        })),
        () => {
          updateLocalStorage(this.state.itemsList)
        }
      );
    }
  }

  render() {
    const { itemsList, todoTitle, error } = this.state;

    return (
      <div className="todo">

        <div className="todo-header">
          <Header as='h1'>TODO list</Header>
        </div>

        <div className="todo-body">

          <TodoForm
            todoTitle={todoTitle}
            getTodoTitle={this.getTodoTitle}
            writeData={this.writeData}
            error={error}
          />

          {!!itemsList.length
            && (
              <TodoList
                itemsList={itemsList}
                deleteItem={this.deleteItem}
                activateEditing={this.activateEditing}
                getEditText={this.getEditText}
                applyEditing={this.applyEditing}
                checkedItem={this.checkedItem}
              />
            )
          }

        </div>

      </div>
    )
  }

}

export default App;

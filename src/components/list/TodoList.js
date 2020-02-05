import React from 'react';
import { List, Header } from 'semantic-ui-react';
import TodoItem from './list-item/TodoItem'

function TodoList(props) {

    return (

        < div className="todo-body-list" >
            <List divided relaxed>
                <Header as='h2' className="todo-body-list__header">Tasks</Header>

                {props.itemsList.map(item =>
                    <TodoItem
                        title={item.title}
                        key={item.id}
                        id={item.id}
                        edit={item.edit}
                        checked={item.checked}
                        deleteItem={props.deleteItem}
                        activateEditing={props.activateEditing}
                        getEditText={props.getEditText}
                        applyEditing={props.applyEditing}
                        checkedItem={props.checkedItem}
                    />
                )}

            </List>
        </div >
    )
}
export default TodoList
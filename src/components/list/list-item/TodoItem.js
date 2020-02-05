import React from 'react';
import { List, Checkbox, Button, Input } from 'semantic-ui-react'

function TodoItem(props) {
    const { checkedItem, getEditText, title, checked } = props;

    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 0'
    }

    return (

        < List.Item
            className="todo-body-list-item"
            style={itemStyle}
        >
            <Checkbox
                className="todo-body-list-item-checkbox"
                onClick={checkedItem(props.id)}
                checked={checked}
            />

            <List.Content
                className="todo-body-list-item-content"
            >
                {props.edit
                    ? <Input
                        action
                        placeholder='Edit...'
                        value={title}
                        onChange={getEditText(props.id)}
                        className="todo-body-list-item-content-input"
                    >
                        <input />
                        <Button
                            type='submit'
                            onClick={props.applyEditing(props.id)}
                        >
                            Apply
                        </Button>
                    </Input>
                    : <List.Header
                        as='h3'
                        className={props.checked ? "disabled" : ''}
                    >
                        {props.title}
                    </List.Header>
                }
            </List.Content>

            <Button.Group basic size='large'>
                <Button
                    icon='edit'
                    onClick={props.activateEditing(props.id)}
                />
                <Button
                    icon='delete'
                    onClick={props.deleteItem(props.id)}
                />
            </Button.Group>

        </List.Item >
    )
}

export default TodoItem
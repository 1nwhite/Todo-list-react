import React from 'react';
import { Form, Label, Icon } from 'semantic-ui-react'


function TodoForm(props) {
    const errorStyle = {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        transform: 'translateY(-150%)'
    }



    return (
        < div className="todo-body-form" >
            <Form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        props.writeData();
                    }
                }
            >
                {props.error ?
                    <Label
                        basic
                        pointing='below'
                        color='red'
                        style={errorStyle}
                    >
                        Please enter a value
            </Label> : null
                }

                <Form.Input
                    icon={
                        <Icon
                            name='plus'
                            onClick={props.writeData}

                            circular
                            link
                            style={{ backgroundColor: 'blue !important' }}
                        />
                    }
                    placeholder='Add Item'
                    value={props.todoTitle}
                    onChange={props.getTodoTitle}
                >
                </Form.Input>
            </Form>
        </div >
    )
}

export default TodoForm
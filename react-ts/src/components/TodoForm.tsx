// Import dependencies
import * as React from 'react'
import shortid from 'shortid'
// Import interfaces
import {TodoInterface, TodoFormInterface} from './../interfaces'

const TodoForm = (props: TodoFormInterface) => {
    // Create ref for form input
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [formState, setFormState] = React.useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value)
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            }

            props.handleTodoCreate(newTodo)
            
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
                setFormState('')
            }
        }
    }
    return (
        <div className="todo-form">
        <input
            ref={inputRef}
            type="text"
            placeholder='Enter new todo'
            onChange={event => handleInputChange(event)}
            onKeyPress={event => handleInputEnter(event)}
        />
        </div>
    )
}
export default TodoForm
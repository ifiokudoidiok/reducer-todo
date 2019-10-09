import React, { useReducer } from 'react';
import reducer, { initialState, MARK, SUBMIT,CHANGE_INPUT, CLEAR_COMPLETED} from '../reducers/reducer';
export default function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const markTodo = (id, isComplete) => () => {
      dispatch({
        type: MARK,
        payload: { id, isComplete }
      });
    }; 
    const onSubmit = (event) => {
      event.preventDefault();
      dispatch({
        type: SUBMIT
      })
    };
    const onInputChange = (event) => {
      dispatch ({
        type: CHANGE_INPUT,
        payload: event.target.value
      })
    };
    const clearCompleted = () => {
      dispatch({
        type: CLEAR_COMPLETED,
      })
    }

    return (
      <div className="component">
        <form>

        <input value={state.addItem} onChange={onInputChange} name='todo' placeholder='Enter Item...' />
        <button type='submit' onClick={onSubmit} >Submit</button>
        <button type='button' onClick={clearCompleted} >Clear Completed</button>
        </form>
        {state.todos.map(todo => (
          <div key={todo.id} style={{ color: !todo.completed ? "red" : "green" }}>
            {todo.item}
            
            <button onClick={markTodo(todo.id, true)}>Mark complete</button>
            <button onClick={markTodo(todo.id, false)}>Mark incomplete</button>
          </div>
        ))}
      </div>
    );
}
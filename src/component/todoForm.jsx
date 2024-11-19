import { useReducer, useState } from 'react';
import EditForm from './editForm'
import ACTION from '../utilities/ReducerAction.mjs';

function TodoForm({ id, todo, dispatch }) {
    const [editList, setEditList] = useState(false)

    function handleChange() {
        dispatch({
            type: ACTION.COMPLETE,
            payload: todo,
        });
    }

    function handleDelete() {
        dispatch({
            type: ACTION.DELETE,
            payload: todo,
        });
    }

    return (
        <li>{!editList ?
            (<>
                <input onChange={handleChange} checked={todo.complete} type="checkbox" />
                {todo.desc}
                <button onClick={() => setEditList(!editList)} disabled={todo.complete}>
                    Edit
                </button>
                <button onClick={handleDelete} disabled={!todo.complete}>Delete</button>
            </>) : (
                <EditForm todo={todo} setEditList={setEditList} dispatch={dispatch}/>
            )}
        </li>
    )
}

export default TodoForm
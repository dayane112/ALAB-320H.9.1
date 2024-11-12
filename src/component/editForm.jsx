import { useState } from "react";
import ACTION from "../utilities/ReducerAction.mjs";

function editForm({ todo, setEditList, dispatch }){
    const [form, setForm] = useState(todo.desc)

    function handleChange(e) {
        setForm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: ACTION.EDIT,
            payload: { id: todo.id, desc: form },
          });
          setEditList(false);
    };

    return(
        <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"/><br />
        <input type="submit" />
      </form>
    )
}

export default editForm
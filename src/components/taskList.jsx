import { useState } from "react"


export default function TaskList({ todos, handleDelete, handleEdit }) {
    return (
        <ul className="tasks">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}/>
                </li>
            ))}
        </ul>
    )
}


function Task({ todo,handleDelete, handleEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    let todobtn;

    if (isEditing) {
        todobtn = (
            <>
                <input className="editInput" type="text" value={todo.title}
                onChange={(e) => handleEdit({...todo, title: e.target.value})} />
                <button className="save" onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        todobtn = (
            <>
                <span className="title-list">{todo.title}</span>
                <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )

    }

    return (
        <label>
            <input className="chekbox" type="checkbox" onChange={(e) => handleEdit({...todo, done: e.target.checked})}/>
            {todobtn}
            <button className="del" onClick={() => handleDelete(todo.id)}>Delete</button>
        </label>
    )
};
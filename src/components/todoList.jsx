

export default function TodoList({handleAdd, title,setTitle}) {
    
  return (
    <div className='todoList'>
        <input type='text' value={title} placeholder='Add New Todo...'
        onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={() => handleAdd(title)}>Add Item</button>
    </div>
  )
}

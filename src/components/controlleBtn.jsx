import React from 'react'

export default function ControlleBtn({ todoType, setTodoType, todos , itemTodo}) {

//     if(todoType === 'all'){
//       <p>{itemTodo}</p> 
        

//     }else if(todoType === 'completed'){
// <p style={{color: "red"}}>{itemTodo}</p> 
//     }

    return (
        <>

            <div className='countItems'>
                 Count Your Todos({todos.length})
            </div>

            <div>
                <button value='all' style={{ background: "red" }}>all</button>
                {/* <button  value='none' style={{ background: "red" }}>active</button> */}
                <button  value='completed' style={{ background: "red" }}>completed</button>
            </div>
        </>

    )
}

import React, { useState } from "react";
import Todo from "./Todo";
import {ImBin} from "react-icons/im"


function Todoitem({todos,completeTodo,removeTodo, updateTodo}){
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })
    const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:'',
        })
    }
    if (edit.id){
        return <Todo edit={edit} onSubmit={submitUpdate}/>
    }
    
    
return todos.map((todo,index) => ( 
    <ul className="listView">
    <li className={todo.completed ? 'completed' :'active'} key={index}>
        <div className="view">
            <div className="viewCon">
            <input 
                className="toggle" 
                type="checkbox"
                checked={todo.completed} 
                onChange={()=> completeTodo(todo.id)}
            />
            <label
                onClick={()=> setEdit({id: todo.id, value: todo.text})}
            >{todo.text}
            </label>
            </div>
            <button 
                className="destroy"
                onClick={()=> removeTodo(todo.id)}
            ><ImBin/></button>
        </div>
    </li>
    </ul>
    ))
    }
export default Todoitem;
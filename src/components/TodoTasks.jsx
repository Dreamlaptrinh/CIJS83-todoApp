import React from "react";
import { memo } from "react";
import "../App.css"

function TodoTasks({ setStatusFilter, status}){
    const filterBtns = [
        {
            title: 'All',
            isActive: status === 'all',
            onClick: ()=> setStatusFilter('all'),
            link: ''
        },
        {
            title: 'Active',
            isActive: status === 'active',
            onClick: ()=> setStatusFilter('active'),
            link: 'Active'
        },
        {
            title: 'Completed',
            isActive: status === 'completed',
            onClick: ()=> setStatusFilter('completed'),
            link: 'Completed'
        }
    ]
    return (
        <div className="task-todo" >
            <ul className="filter">
                {filterBtns.map(btn =>(
                    <FilterBtn 
                    key = {`btn${btn.title}`}
                    {...btn}
                    ></FilterBtn>
                ))
                }
            </ul>
        </div>
    )}

    const FilterBtn = memo(props=>{
        const {title, onClick, link, isActive} = props
        return (
            <li>
                <div className="liContainer">
                <a 
                href={`#/${link}`}
                className={`${isActive ? 'selected' : ''}`}
                onClick={onClick}
                >{title}</a>
                </div>
            </li>
        )
    })
export default TodoTasks
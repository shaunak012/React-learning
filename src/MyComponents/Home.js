import React from 'react'
import { Todos } from "./Todos";
import { AddTodo } from './AddTodo';

//Hooks
import { useState, useEffect } from "react";

export const Home = () => {
    let initTodo;

    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        setTodo(
            todos.filter((e) => {
                return e !== todo;
            })
        );
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const addTodo = (tittle, desc) => {
        let sno = 1;
        if (todos.length !== 0) {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            tittle: tittle,
            desc: desc,
        };
        setTodo([...todos, myTodo]);

        console.log(localStorage.getItem("todos"));
    };

    const [todos, setTodo] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
            <AddTodo AddTodo={addTodo}></AddTodo>
            <Todos todo={todos} onDelete={onDelete} />
        </>
    )
}

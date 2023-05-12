import React, { useState } from "react";

export const AddTodo = (props) => {
    const [tittle,setTittle]=useState("")
    const [desc,setDesc]=useState("")

    const submit=(e)=>{
        e.preventDefault()
        if(!tittle){
            alert("tittle cannot be left empty")
        }else if(!desc){
            alert("description cannot be left empty")
        }else{
        props.AddTodo(tittle , desc);
        setTittle("");
        setDesc("");
        }
    }
    return (
        <div className="container my-3 text-center">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">
                        Todo Tittle
                    </label>
                    <input
                        type="string"
                        value={tittle}
                        onChange={(e)=>{setTittle(e.target.value)}}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Todo description
                    </label>
                    <input
                        type="string"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-success btn-sm">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

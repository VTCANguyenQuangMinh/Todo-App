import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Header from './LayOut/Header';
import Footer from '../store/containers/Footer';
import Todos from './Todos.js';
import AddTodo from './AddTodo';

function TodoApp () {


    const [state, setState] = useState({
        todos:[]
    })

    const handleCheckBoxChange = id =>{
        setState({
            todos: state.todos.map(e=>{
                if(e.id === id){
                    e.completed = !e.completed;
                }
                return e;
            })
        })
    }

    const handleDeleteTodo = id =>{
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => setState({
            todos:[
                ...state.todos.filter(todo=>{
                    return todo.id !== id;
                })
            ]
        }))
    }

    const handleAddTodo = title =>{
        const TodoData={
            title:title,
            completed:false
        }
   
        Axios.post("https://jsonplaceholder.typicode.com/todos", TodoData)
        .then(response => {
            setState({
                todos: [...state.todos, response.data]
            })
        });
    };

    useEffect(()=>{
        const config = {
            params : {
                _limit: 20
            }
        }

        Axios.get("https://jsonplaceholder.typicode.com/todos", config)
        .then(response=>{
            setState({todos:response.data})}
            );

    }, [])


    return (
        <div class='container'>
            <Header />
            <AddTodo AddTodo={handleAddTodo}/>
            <Todos 
            todos={state.todos} 
            handleChange={handleCheckBoxChange}
            handleDelete={handleDeleteTodo}
            />
            <Footer />
        </div>
    )

}

export default TodoApp;
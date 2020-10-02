import React, {useState} from "react";

function AddTodo (props){

    const [title, setTitle] = useState('');

    const onInputChange = e =>{
    
        setTitle(e.target.value)
    
    }

    const addTodo = e => {
        e.preventDefault();
        props.AddTodo(this.state.title);
        setTitle('');
    }



    return(
        <form className="form-container" onSubmit={addTodo}>
            <input 
                type='text' 
                className="input-text" 
                value={title} 
                placeholder="Add Todo..."
                onChange={onInputChange}
            />
            <input 
                type="submit" 
                className="input-submit" 
                value="submit" 
            />
        </form>
    )

}

export default AddTodo;
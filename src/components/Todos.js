import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(element=>(
                        <TodoItem 
                        key={element.id} 
                        todo={element} 
                        handleChange={this.props.handleChange}
                        handleDelete={this.props.handleDelete}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todos;
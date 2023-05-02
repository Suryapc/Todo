
import React,{Component} from "react";
import TodoItem from "./TodoItem";
class TodosList extends Component{
render(){
        return(
            <div>
                {this.props.todos.map(todo =>(
                    <TodoItem key= {todo.id} 
                    todo={todo} 
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps} />
                ))}
            </div>
        )
    }
}
export default TodosList;

// import React,{Component} from 'react';
// import TodoItem from './TodoItem';

// class TodoList extends Component{

//         render(){
//                return(
//                  <div>
//                      {this.props.todos.map(todo =>(<TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps}
//                        deleteTodoProps={this.props.deleteTodoProps}/>
//                      ))}
//                  </div>
//                    )
//            }
// }
// export default TodoList;
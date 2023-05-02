import React,{Component} from 'react';

class TodoItem extends Component{
                componentWillUnmount(){
                  alert("Item deleted")
                }
       render(){
                const completedStyle={
                                fontStyle:"italic",
                                color:"#535e04",
                                opacity:0.5,
                                textDecoration:"line-through"
                }

                const {id,title,completed}=this.props.todo;

      
               return(
                  <li>
                    <input type="checkbox" className="ms-5" checked={completed}
                     onChange={()=>{this.props.handleChangeProps(id)}}/>
                    <button  style={{color:"red"}} type="button" onClick={()=>{this.props.deleteTodoProps(id)}}>Delete</button>
                   <span style={completed ? completedStyle :null}>{title}</span>
                   </li>
                   )
           }
}
export default TodoItem;
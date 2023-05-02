import React ,{Component} from 'react';

class InputTodo extends Component{

                state={
                   title:""
                }

                onChange=(event)=>{
                    this.setState({
                      [event.target.name]:event.target.value
                    })
                }


                handleSubmit=(event)=>{
                                event.preventDefault();
                              
                                this.props.addTodoProps(this.state.title);
                                this.setState({
                                  title:""
                                })
                            }
                
                render(){
                         return(
                              <form onSubmit={this.handleSubmit}>
                                <input type="text"  className='bg-warning ms-5 mb-5 p-3 border border-secondary'
                                placeholder='eg: im leaving to the US' 
                                value={this.state.title}
                                 name="title" 
                                 onChange={this.onChange}/>

                              <input type="submit" value="submit" className=' bg-danger text-white ms-5 w-25 p-2'/>

                              </form>
                                )
                }
              
              }
export default InputTodo;


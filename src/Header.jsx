import React,{Component} from 'react';

class Header extends Component{

        componentDidUpdate(prevProps){
                var red = Math.floor(Math.random()*256);
                var blue = Math.floor(Math.random()*256);
                var green = Math.floor(Math.random()*256);

                var bg= `rgb(${red},${green},${blue})`;
           if(prevProps.headerSpan !== this.props.headerSpan)
                   {
                document.getElementById("inHd").innerHTML="USer changed the Checkbox";
                document.getElementById("inHd").style.backgroundColor = bg;
                    }

             }
                render(){

         const headerStyle={
                 padding:"10px 0",
                 lineHeight:"2px"
                           }
                   return(
                          <header className="ms-5 " style={headerStyle}>
                                <h1 style={{fontSize:"35px",marginBottom:"15px",color:"blue",
                                border:"2px solid red", textAlign:"center",padding:"10px"}}>Todo List
                                 <span className= "ms-5" id="inHd"></span></h1>

                                <p style={{fontSize:"28px",marginTop:"45px",color:"green",}}>Add Item </p>
                          </header>
                        )
                }
}
export default Header;
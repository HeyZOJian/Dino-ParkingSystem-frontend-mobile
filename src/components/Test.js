import React, {Component} from 'react'


export default class Test extends React.Component {
    
    chagePage=(path)=>{
        console.log(path)
        console.log(this.props)
        // const history = createHistory()
        this.props.history.push('/home/RobOrder')
        // history.push(path);
      }
    
      render(){
       
        return(
          <div>
            222211
            <button onClick={()=>this.chagePage()}>click</button>
            </div>
            
          
          
        );
      }
    }
    
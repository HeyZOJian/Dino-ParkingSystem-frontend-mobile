import {Button,NavBar,ListView } from 'antd-mobile';
import React from 'react';

export default class RobOrder extends React.Component {

 


  render(){
      let a = "../171204271735066.mp3"
 
    return(
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
         <audio controls>
            <source src={a} type="audio/mpeg" />
            
            </audio>

      </div>
    );
  }
}

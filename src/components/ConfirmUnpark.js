import React from 'react';
import { List,Button,NavBar} from 'antd-mobile';
import createHistory from 'history/createBrowserHistory';
const Item = List.Item;
export default class ConfirmUnpark extends React.Component{
    constructor() {
        super();
    }
      
  render(){
      const data = JSON.parse(localStorage.getItem("unparkData"))
      // const parkingBoyId = localStorage.getItem("id");
      let parkingLotId = 0;
      return(
          <div>
        <NavBar
      mode="dark" 
      leftContent="Back"
      rightContent={[
        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        // <Icon key="1" type="ellipsis" />,
      ]}
      // onLeftClick	={()=>window.location.href="/home/ParkingWorkList"}
      // onLeftClick	={()=>this.props.history.push("/home/ParkingWorkList")}
      onLeftClick = {()=>{
        let history = createHistory()
        // history = "/home/ParkingWorkList"
        history.go(-1)
      }}
    >取车详情</NavBar>
    

    <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img
                style={{
                height: '64px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', fontWeight: 'bold'}}>{data.plateNumber}</div>
                <div>停车时间:2018-07-21<span
                  style={{
            fontSize: '30px',
            color: '#FF6E27'
          }}></span>
          
                </div>
                
                </div>
                
              </div>

       

      <Button style={{marginTop:300,backgroundColor:"#1a81d2"}} onClick={()=>this.props.ConfirmUnparkHandler(data.id)}>确定取车</Button>
      </div>
      )
  }
}


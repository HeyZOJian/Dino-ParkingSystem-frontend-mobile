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
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <NavBar
      style={{
        backgroundColor:'#1a81d2',
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        zIndex:100}}

      leftContent="Back"
      rightContent={[
        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        // <Icon key="1" type="ellipsis" />,
      ]}
      // onLeftClick	={()=>window.location.href="/home/ParkingWorkList"}
      onLeftClick	={()=>{
        let history = createHistory();
        // history .push("/home/ParkingWorkList") 
        history.go(-1)
      }}
    >取车详情</NavBar>
    <div style={{marginTop:45}}></div>

    <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
              fontSize:16
            }}>
              <img
                style={{
                height: '55px',
                marginLeft: '20px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1.5
              }}>
                <div style={{marginBottom: '8px', textAlign:"left",marginBottom:10}}>车牌号：<span style={{fontWeight: 'bold',fontSize:17}}>{data.plateNumber}</span></div>
                <div style={{marginBottom:10,textAlign:"left"}}>停车场名称:&nbsp;{data.parkingLotName}</div> 
                <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div>    
                
                </div>
                
              </div>

       

      <Button style={{backgroundColor:"#1a81d2",position:"fixed",bottom:200,width:'100%'}} onClick={()=>this.props.ConfirmUnparkHandler(data.id)}>确定取车</Button>
      </div>
      )
  }
}


import {Button,NavBar,ListView } from 'antd-mobile';
import React from 'react';

export default class RobOrder extends React.Component {

  componentDidMount() {
        this.props.getOrderHandler();
      }

  render(){
    const data1 = this.props.lotsList
    console.log(this.props.lotsList)
    return(
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {/* <div
          style={{
          backgroundColor: "#1a81d2",
          height: '8%',
          fontSize: 20,
          // verticalAlign: "middle",
          // lineHeight:25,
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          zIndex:100,
        }}>停车</div> */}
        <NavBar  style={{
          backgroundColor:'#1a81d2',
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          zIndex:100}}>订单</NavBar>
        <div style={{marginTop:45}}></div>
        {/* <NavBar mode="dark" style={{backgroundColor:'bule',position:"fixed"}}>订单</NavBar> */}
        {data1.map(data=>(
          <div style={{border:'4px solid #9e969633',fontSize:16}}> 
            <div 
                style={{
                display: '-webkit-box',
                display: 'flex',
                padding: '15px 0',
              }}>
                <img 
                  style={{
                  height: '62px',
                  marginLeft: '20px',
                  marginRight: '15px'
                }}
                  src={data.img}
                  alt=""/>
                <div style={{
                  lineHeight: 1
                }}>
                  {/* <div style={{marginBottom: '8px', fontWeight: 'bold',textAlign:"left"}}>车牌号：{data.plateNumber}</div>
                  <div>停车时间:&nbsp;{data.parkDate}<span style={{fontSize: '30px',color: '#FF6E27'}}></span></div>           */}
                  <div style={{marginBottom: '8px', textAlign:"left",marginBottom:14}}>车牌号：<span style={{fontWeight: 'bold',fontSize:17}}>{data.plateNumber}</span></div>
                  <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div> 
                </div>               
            </div>
                <Button onClick={()=>this.props.robOrderHandle(data.id)}>抢单</Button>
          </div>         
        ))
      }
      <div style={{marginBottom:50}}></div>    
      </div>
    );
  }
}

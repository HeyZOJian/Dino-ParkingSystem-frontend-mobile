import {Button,NavBar, Icon} from 'antd-mobile';
import React from 'react';

export default class ParkingWorkList extends React.Component {

  componentDidMount() {
        this.props.getParkingLotsHandler();
  }

  chageSelectParkingLotsPage=(orderId)=>{
    localStorage.setItem("orderId",orderId)  
    this.props.history.push('/home/SelectParkingLots')
  }
  chageConfirmUnparkPage=(data)=>{
    localStorage.setItem("unparkData",JSON.stringify(data))
    this.props.history.push('/home/ConfirmUnpark')
  }

  render(){
    //const data = this.props.lotsList
    console.log(this.props.lotsList)
    return(
      <div>
        <NavBar  style={{
          backgroundColor:'#1a81d2',
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          zIndex:100}}>停取工作列表</NavBar>
        <div style={{marginTop:'11%'}}></div>

        {this.props.lotsList.map(data=>(
          <div style={{border:'4px solid #9e969633'}}>
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
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
                <div style={{marginBottom: '8px', fontWeight: 'bold',textAlign:"left"}}>车牌号：{data.plateNumber}</div>
                <div>停车时间:&nbsp;{data.parkDate}<span style={{fontSize: '30px',color: '#FF6E27'}}></span></div>     
                </div>            
              </div>
              {data.status==='waitPark'?
              <Button onClick={()=>this.chageSelectParkingLotsPage(data.id)}>选择停车场</Button>
              :<Button onClick={()=>this.chageConfirmUnparkPage(data)}>取车</Button>
              }
          </div>
        ))}
      </div>
    );
  }
}

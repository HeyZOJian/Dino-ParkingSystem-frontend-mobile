import {Button,NavBar, Icon,Toast} from 'antd-mobile';
import React from 'react';

export default class ParkingWorkList extends React.Component {

  componentDidMount() {
      // Toast.loading('Loading...', 30, () => {
      //   console.log('Load complete !!!');
      // });
  
      // setTimeout(() => {
      //   Toast.hide();
      // }, 3000);
    
    
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
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <NavBar  style={{
          backgroundColor:'#1a81d2',
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          zIndex:100}}>停取工作列表</NavBar>
        <div style={{marginTop:45}}></div>

        {this.props.lotsList.map(data=>(
          <div style={{border:'4px solid #9e969633',fontSize:16}}>
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
              <div style={{marginBottom: '8px', textAlign:"left",marginBottom:14}}>车牌号：<span style={{fontWeight: 'bold',fontSize:17}}>{data.plateNumber}</span></div>
              <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div>    
                </div>            
              </div>
              {data.status==='waitPark'?
              <Button onClick={()=>this.chageSelectParkingLotsPage(data.id)}>选择停车场</Button>
              :<Button onClick={()=>this.chageConfirmUnparkPage(data)}>取车</Button>
              }
          </div>
        ))}
        <div style={{marginBottom:50}}></div> 
      </div>
    );
  }
}

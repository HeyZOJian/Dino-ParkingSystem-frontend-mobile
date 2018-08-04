import {Button,NavBar, Icon,Tabs, WhiteSpace, Badge} from 'antd-mobile';
import React from 'react';

const tabs = [
  { title: <Badge >停车订单</Badge> },
  { title: <Badge >取车订单</Badge> },
];


export default class HistoryOrder extends React.Component {

  componentDidMount() {
        this.props.getHistoryOrderHandler();
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
          zIndex:100}}>历史订单</NavBar>
        <div style={{marginTop:45}}></div>

        {/* {this.props.lotsList.map(data=>(
          <div style={{border:'4px solid #9e969633',fontSize:16}}>
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img
                style={{
                height: '45px',
                marginLeft: '20px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', textAlign:"left",marginBottom:10}}>车牌号：<span style={{fontWeight: 'bold',fontSize:18}}>{data.plateNumber}</span></div>
                <div style={{marginBottom:10,textAlign:"left"}}>停车场名称:&nbsp;{data.parkingLotName}</div> 
                <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div> 
                {data.unParkDate!==null?<div style={{marginBottom:10}}>取车时间:&nbsp;{data.unParkDate}</div>:<div></div>}
                <div style={{textAlign:"left",marginBottom:10}}>状态:&nbsp;{data.status==='finish'?'已完成取车':'已完成停车'}</div>     
                </div>            
              </div>
          </div>
        ))} */}
        <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div >
      {this.props.lotsList.map(data=>(
          data.status==='parked'?
          <div style={{border:'4px solid #9e969633',fontSize:16}}>
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img
                style={{
                height: '45px',
                marginLeft: '20px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', textAlign:"left",marginBottom:10}}>车牌号：<span style={{fontWeight: 'bold',fontSize:18}}>{data.plateNumber}</span></div>
                <div style={{marginBottom:10,textAlign:"left"}}>停车场名称:&nbsp;{data.parkingLotName}</div> 
                <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div> 
                {data.unParkDate!==null?<div style={{marginBottom:10}}>取车时间:&nbsp;{data.unParkDate}</div>:<div></div>}
                <div style={{textAlign:"left",marginBottom:10}}>状态:&nbsp;{data.status==='finish'?'已完成取车':'已完成停车'}</div>     
                </div>            
              </div>
          </div> : <div></div>
        ))}
      </div>
      
      <div>
      {this.props.lotsList.map(data=>(
          data.status==='finish'?
          <div style={{border:'4px solid #9e969633',fontSize:16}}>
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img
                style={{
                height: '45px',
                marginLeft: '20px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', textAlign:"left",marginBottom:10}}>车牌号：<span style={{fontWeight: 'bold',fontSize:18}}>{data.plateNumber}</span></div>
                <div style={{marginBottom:10,textAlign:"left"}}>停车场名称:&nbsp;{data.parkingLotName}</div> 
                <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div> 
                {data.unParkDate!==null?<div style={{marginBottom:10}}>取车时间:&nbsp;{data.unParkDate}</div>:<div></div>}
                <div style={{textAlign:"left",marginBottom:10}}>状态:&nbsp;{data.status==='finish'?'已完成取车':'已完成停车'}</div>     
                </div>            
              </div>
          </div> : <div></div>
        ))}
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
      </div>
    );
  }
}

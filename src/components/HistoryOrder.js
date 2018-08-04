import {Button,NavBar, Icon} from 'antd-mobile';
import React from 'react';

export default class History extends React.Component {

  componentDidMount() {
        this.props.getHistoryOrderHandler();
  }

  render(){
    //const data = this.props.lotsList
    console.log(this.props.lotsList)
    return(
      <div>
        <NavBar mode="dark">历史订单</NavBar>

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
                <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}</div> 
                <div style={{marginBottom:10}}>取车时间:&nbsp;{data.unParkDate}</div>  
                <div style={{textAlign:"left",marginBottom:10}}>状态:&nbsp;{data.status==='finish'?'已完成':'未完成'}</div>     
                </div>            
              </div>
          </div>
        ))}
      </div>
    );
  }
}

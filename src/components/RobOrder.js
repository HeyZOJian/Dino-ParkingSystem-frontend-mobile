import {Button,NavBar} from 'antd-mobile';
import React from 'react';

export default class RobOrder extends React.Component {

  componentDidMount() {
        this.props.getOrderHandler();
      }

  render(){
    const data1 = this.props.lotsList
    console.log(this.props.lotsList)
    let num = 0
    return(
      <div>
        {/* <div
          style={{
          backgroundColor: "#1a81d2",
          height: 50,
          fontSize: 20,
          verticalAlign: "middle"
        }}>停车</div> */}
        <NavBar mode="dark">订单</NavBar>

        {data1.map(data=>(
          <div style={{border:'4px solid #9e969633'}}> 
          <div 
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img 
                style={{
                height: '64px',
                marginLeft: '20px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', fontWeight: 'bold',textAlign:"left"}}>车牌号：{data.plateNumber}</div>
                <div>停车时间:&nbsp;{data.parkDate}<span style={{fontSize: '30px',color: '#FF6E27'}}></span></div>          
              </div>               
          </div>
              <Button onClick={()=>this.props.robOrderHandle(data.id)}>抢单</Button>
              {/* {num===data1.length?console.log(1):console.log(data1.length)} */}
              {(num = num+1) && num===data1.length?<div style={{marginBottom:"12%"}}></div>:<div></div>}
          </div>
          
        ))
      }
      </div>
    );
  }
}

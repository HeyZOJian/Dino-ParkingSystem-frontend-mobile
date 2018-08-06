import {Button,NavBar, Icon,Toast,Modal, List, WhiteSpace, WingBlank} from 'antd-mobile';
import React from 'react';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}


export default class ParkingWorkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      allData:{}
    };
  }

  componentDidMount() {
    if(localStorage.getItem("token")!=undefined){
      this.props.getParkingLotsHandler();
  }else{
      window.location.href="/login"
  }  
    
  }

  chageSelectParkingLotsPage=(data)=>{  
    console.log(this.props.history)
    if(!data.read){
      this.props.changeReadStatus(data.id)
    }  
    localStorage.setItem("orderId",data.id)  
    this.props.history.push('/home/SelectParkingLots')
  }

  chageConfirmUnparkPage=(data)=>{
    if(!data.read){
      this.props.changeReadStatus(data.id)
    }  
    localStorage.setItem("unparkData",JSON.stringify(data))
    this.props.history.push('/home/ConfirmUnpark')
  }

  showModal = (key,data) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    console.log(data)
    this.setState({
      [key]: true,
      allData:data
    });
    console.log(data)
    if(!data.read){
      this.props.changeReadStatus(data.id)
    }  
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  // clickDetail = () => {
  //   console.log(1)
  //   this.showModal('modal1');
  //   // this.props.changeReadStatus(data.id)
  // }

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
          {/* {this.setState({modalData:data})} */}
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>

            {data.read?<img
                style={{
                height: '45px',
                marginLeft: '15px',
                marginRight: '30px'
              }}
                src={data.img}
                alt=""/>
              :<img
              style={{
              height: '85px',
              // marginLeft: '5px',
              marginRight: '15px'
            }}
              src={data.img}
              alt=""/>}

              <div style={{
                lineHeight: 1.5
              }}>
                <div style={{marginTop: '23px', textAlign:"left",marginBottom:14}}>车牌号：<span style={{fontWeight: 'bold',fontSize:17}}>{data.plateNumber}</span></div>
                {/* <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}  </div>            */}
              </div>

              <div style={{marginTop:24,marginLeft:50}} onClick={this.showModal('modal1',data)}>
                  {/* <span style={{float:"right"}}>详情&gt;</span> */}
                  详情&gt;
              </div>
          </div>
              {data.status==='waitPark'?
              <Button onClick={()=>this.chageSelectParkingLotsPage(data)} style={{fontSize:15}}>停车</Button>
              :<Button onClick={()=>this.chageConfirmUnparkPage(data)} style={{fontSize:15}}>取车</Button>
              }
              
          </div>
          
        ))}
        <div style={{marginBottom:50}}></div> 

        <WingBlank>
        {/* <Button onClick={this.showModal('modal1')}>basic</Button> */}
       
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title={this.state.allData.status==="waitPark"?"停车订单":"取车订单"}
          footer={[{ text: 'Ok', onPress: () => { this.onClose('modal1')();this.props.getParkingLotsHandler() } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 150, overflow: 'scroll' }}>
          <div
          style={{
          display: '-webkit-box',
          display: 'flex',
          padding: '15px 0',
          fontSize:16
        }}>
          {/* <img
            style={{
            height: '55px',
            marginLeft: '20px',
            marginRight: '15px'
          }}
            src='http://okc9ihakz.bkt.clouddn.com/%E8%BD%A6%E8%BE%86%E7%AE%A1%E7%90%86-01.svg'
            alt=""/> */}
          <div style={{
            lineHeight: 1.5
          }}>
            <div style={{marginBottom: '8px', textAlign:"left",marginBottom:10}}>车牌号：<span style={{fontWeight: 'bold',fontSize:17}}>{this.state.allData.plateNumber}</span></div>
            {this.state.allData.status!=="waitPark"?<div style={{marginBottom:10,textAlign:"left"}}>停车场名称:&nbsp;{this.state.allData.parkingLotName}</div>:<div></div>} 
            <div style={{marginBottom:10,textAlign:"left"}}>停车时间:&nbsp;{this.state.allData.parkDate}</div>    
            <div style={{marginBottom:10,textAlign:"left"}}>小票编号:&nbsp;{this.state.allData.receiptId}</div>
            </div>
            
          </div>
          </div>
        </Modal>    
      </WingBlank>
      </div>
    );
  }
}

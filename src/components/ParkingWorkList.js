import {Button,NavBar, Icon,Toast,Row, Col,Modal, List, WhiteSpace, WingBlank} from 'antd-mobile';
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
    };
  }

  componentDidMount() {
    this.props.getParkingLotsHandler();
  }

  chageSelectParkingLotsPage=(orderId)=>{  
    console.log(this.props.history)
    localStorage.setItem("orderId",orderId)  
    this.props.history.push('/home/SelectParkingLots')
  }

  chageConfirmUnparkPage=(data)=>{
    
    localStorage.setItem("unparkData",JSON.stringify(data))
    this.props.history.push('/home/ConfirmUnpark')
  }

  showModal = (key,id) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
    console.log(id)
    // this.props.changeReadStatus(id)
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
                <div style={{marginBottom:10}}>停车时间:&nbsp;{data.parkDate}  </div>           
              </div>

              <div style={{marginLeft:20,marginTop:10}} onClick={this.showModal('modal1',data.id)}>
                  <span style={{marginTop:30}}><Icon type="right" /></span>
                  <span>详情</span>
              </div>
          </div>
              {data.status==='waitPark'?
              <Button onClick={()=>this.chageSelectParkingLotsPage(data.id)}>选择停车场</Button>
              :<Button onClick={()=>this.chageConfirmUnparkPage(data)}>取车</Button>
              }
              
          </div>
          
        ))}
        <div style={{marginBottom:50}}></div> 

        <WingBlank>
        {/* <Button onClick={this.showModal('modal1')}>basic</Button> */}
        <WhiteSpace />
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
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
          <img
            style={{
            height: '55px',
            marginLeft: '20px',
            marginRight: '15px'
          }}
            src='http://okc9ihakz.bkt.clouddn.com/%E8%BD%A6%E8%BE%86%E7%AE%A1%E7%90%86-01.svg'
            alt=""/>
          <div style={{
            lineHeight: 1.5
          }}>
            <div style={{marginBottom: '8px', textAlign:"left",marginBottom:10}}>车牌号：<span style={{fontWeight: 'bold',fontSize:17}}>2111</span></div>
            <div style={{marginBottom:10,textAlign:"left"}}>停车场名称:&nbsp;3222</div> 
            <div style={{marginBottom:10}}>停车时间:&nbsp;4333</div>    
            
            </div>
            
          </div>
          </div>
        </Modal>    
      </WingBlank>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Modal, List, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './App.css';
// import Home from './components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RobOrder from './containers/RobOrderContainer'
import ParkingWorkList from './containers/ParkingWorkListContainer'
import SelectParkingLots from './containers/SelectParkingLotsContainer';
import ConfirmUnpark from './containers/ConfirmUnparkContainer'
import HistoryOrder from './containers/HistoryOrderContainer'
import Home from './containers/HomeContainer'
import Test from './components/Test'

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: this.props.isShowRootOrder,
    };
  }

  ParkingWorkListPage = () => {
    return <ParkingWorkList  history={this.props.history}/>; 
  };

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
    // console.log(id)
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

  render() {
    const {...props} = this.props

   
    return (
      <div className={styles.App}>
          <div>

          <WingBlank>
        {/* <Button onClick={this.showModal('modal1')}>basic</Button> */}
        
        <Modal
          visible={this.props.isShowRootOrder}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { 
              console.log('ok');
            //  this.onClose('modal1')(); 
            this.props.closeRootModal();
          } }]}
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

            <Route exact path="/home/RobOrder" component={RobOrder}></Route>
            <Route  path='/home/ParkingWorkList' component={this.ParkingWorkListPage} ></Route>
            <Route  path="/home/SelectParkingLots" component={SelectParkingLots}></Route>
            <Route  path="/home/ConfirmUnpark" component={ConfirmUnpark}></Route>
            <Route  path="/home/HistoryOrder" component={HistoryOrder}></Route>     

            {/* <Home {...props}  taskNum={this.state.taskNum}/>  */}
            <Home {...props} /> 
            
          </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { TabBar,Toast } from 'antd-mobile';
import '../index.css'
import RobOrder from '../containers/RobOrderContainer'
import ParkingWorkList from '../containers/ParkingWorkListContainer'
import SelectParkingLots from '../containers/SelectParkingLotsContainer';

import createHistory from 'history/createBrowserHistory'

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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  chagePage=(path)=>{
    this.props.history.push(path)
  }

  
  componentDidMount() {
    let self = this;
    let socket;
    if (typeof(WebSocket) === "undefined") {
        console.log("您的浏览器不支持WebSocket");
    } else {
        console.log("您的浏览器支持WebSocket");
        //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        //等同于socket = new WebSocket("ws://localhost:8083/checkcentersys/websocket/20");
        socket = new WebSocket("https://dino-parking-system-backend.herokuapp.com/websocket/2".replace("http", "ws"));
        //打开事件
        socket.onopen = function () {
            console.log("Socket 已打开");
            //socket.send("这是来自客户端的消息" + location.href + new Date());
        };
        //获得消息事件
        socket.onmessage = function (msg) {
            console.log(msg.data); 
          //  let data = JSON.parse(msg.data)
          //  if(data.type==="unRead"){
          //     self.props.getOfflineOrder(data.unReadNum);
          //  }else if(data.type==="newOrder"){
          //     self.props.sendNewOrder(data.message);
          //  }else if(data.type==="freeze"){
          //     localStorage.removeItem("token");
          //     Toast.fail('您的账号已被冻结，请联系相关经理', 3);
          //     window.location
          //  }
            // self.props.sendNewOrder("hello World Test");
            // setTimeout(function(){
            //   self.props.sendNewOrder("hello World Test");
            // },5000) 
           
            //发现消息进入    开始处理前端触发逻辑
        };
        //关闭事件
        socket.onclose = function () {
            console.log("Socket已关闭");
        };
        //发生了错误事件
        socket.onerror = function () {
            alert("Socket发生了错误");
            //此时可以尝试刷新页面
        }
        //离开页面时，关闭socket
        //jquery1.8中已经被废弃，3.0中已经移除
        // $(window).unload(function(){
        //     socket.close();
        //});
    }
  }
  

  render() {
    console.log(this.props.taskNum)
    return (
      <div style={this.state.fullScreen ? { position: 'fixed',  width: '100%', bottom: 0,height:'10%',marginTop:'10%' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="抢单"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://okc9ihakz.bkt.clouddn.com/order.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://okc9ihakz.bkt.clouddn.com/order-click.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={localStorage.getItem("status") === '1'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              localStorage.setItem("status","1")
              this.chagePage("/home/RobOrder");
            }}
            data-seed="logId"
          >
            {/* {this.renderContent1('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://okc9ihakz.bkt.clouddn.com/%E8%BD%A6%E8%BE%86-01.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://okc9ihakz.bkt.clouddn.com/worklist-click.svg) center center /  21px 21px no-repeat' }
              }
              />
            }
            title="停取"
            key="Koubei"
            // badge={this.state.taskNum}
            badge={this.props.taskNum}        
            selected={localStorage.getItem("status") === '2'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              localStorage.setItem("status","2")
              this.chagePage("/home/ParkingWorkList");
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent2('Koubei')} */}
          </TabBar.Item>
           <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://okc9ihakz.bkt.clouddn.com/history.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://okc9ihakz.bkt.clouddn.com/history-click.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="历史"
            key="Friend"
            // dot
            selected={localStorage.getItem("status") === '3'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              localStorage.setItem("status","3")
              this.chagePage("/home/HistoryOrder");
            }}
          >
            {/* {this.renderContent3('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://okc9ihakz.bkt.clouddn.com/my.svg' }}
            selectedIcon={{ uri: 'http://okc9ihakz.bkt.clouddn.com/my-click.svg' }}
            title="个人"
            key="my"
            selected={localStorage.getItem("status") === '4'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              localStorage.setItem("status","4")
            }}
          >
            {/* {this.renderContent1('My')} */}
          </TabBar.Item> 
        </TabBar>
      </div>
    );
  }
}

//ReactDOM.render(<TabBarExample />, mountNode);
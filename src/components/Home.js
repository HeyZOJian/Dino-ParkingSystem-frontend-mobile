import React from 'react';
import { TabBar } from 'antd-mobile';
import '../index.css'
import RobOrder from '../containers/RobOrderContainer'
import ParkingWorkList from '../containers/ParkingWorkListContainer'
import SelectParkingLots from '../containers/SelectParkingLotsContainer';

import createHistory from 'history/createBrowserHistory'

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

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed',  width: '100%', bottom: 0 } : { height: 400 }}>
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
            // badge={'new'}
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
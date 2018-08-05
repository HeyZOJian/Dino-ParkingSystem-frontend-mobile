import React from 'react';
import { List,Button,NavBar,Toast,Modal} from 'antd-mobile';
import createHistory from 'history/createBrowserHistory';
const Item = List.Item;
export default class SelectParkingLots extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
      if(localStorage.getItem("token")!=undefined){
        this.props.getParkingLotsHandler();
    }else{
        window.location.href="/login"
    }  
        
    }
      
  render(){
      console.log(this.props.lotsList) 
      // const parkingBoyId = localStorage.getItem("id");
      let parkingLotId = 0;
      return(
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            {/* <NavBar  style={{
          backgroundColor:'#1a81d2',
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          zIndex:100}}>订单</NavBar>
        <div style={{marginTop:45}}></div> */}
        <NavBar
      style={{
        backgroundColor:'#1a81d2',
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        zIndex:100}}

      leftContent="Back"
      rightContent={[
        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        // <Icon key="1" type="ellipsis" />,
      ]}
      // onLeftClick	={()=>window.location.href="/home/ParkingWorkList"}
      onLeftClick	={()=>{
        let history = createHistory();
        // history .push("/home/ParkingWorkList") 
        history.go(-1)
      }}
    >选择停车场</NavBar>
      <div style={{marginTop:45}}></div>
        <List  className="my-list">
        
        <Item>
          <select defaultValue="0" onChange={(e)=>parkingLotId = e.target.value}>
            <option value="0" style={{display:'none'}}>选择停车场</option>
            {this.props.lotsList.map(item=>
            <option value={item.id}>{item.name}(剩余容量：{item.size-item.carNum})</option>
            )}
          </select>
        </Item>
      </List>

      <Button style={{backgroundColor:"#1a81d2",position:"fixed",bottom:200,width:'100%'}} onClick={()=>{
        if(parkingLotId === 0){Toast.fail('请选择停车场', 1.5);;return false}
        this.props.SelectParkingLotsHandler(parkingLotId)}}>完成订单</Button>
      
      </div>
      )
  }
}


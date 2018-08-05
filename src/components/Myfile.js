import React from 'react';
import { Card, WingBlank, WhiteSpace,NavBar,Button,Toast,Modal} from 'antd-mobile';

const alert = Modal.alert;
export default class SelectParkingLots extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        if(localStorage.getItem("token")!=undefined){
            this.props.getMyfile();
        }else{
            window.location.href="/login"
        }  
        
    }

    showAlert = () => {
        const alertInstance = alert('Delete', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
            { text: 'OK', onPress: () => console.log('ok') },
        ]);
        setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
        }, 500000);
    };
      
  render(){
      console.log(this.props.myfileData)
      const data = this.props.myfileData
      return(
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          
        <NavBar
      style={{
        backgroundColor:'#1a81d2',
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        zIndex:100}}
    >个人资料</NavBar>
      <div style={{marginTop:45}}></div>

      <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
       
      />
      <Card.Body>
        <div style={{textAlign:'left',marginBottom:10}}>用户名：{data.username}</div>
        <div style={{textAlign:'left',marginBottom:10}}>昵称：{data.nickname}</div>
        <div style={{textAlign:'left',marginBottom:10}}>电子邮件：{data.email}</div>
        <div style={{textAlign:'left',marginBottom:10}}>电话号码：{data.phone}</div>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>

  <WingBlank size="lg">
  
  <Button style={{backgroundColor:"#1a81d2",marginBottom:100}}
    onClick={() =>
      alert('', '确认退出登录?', [
        { text: '取消' },
        { text: '确认', onPress: () => this.props.logOut() },
      ])
    }
  >
    退出登录
  </Button>
</WingBlank>

      {/* <Button style={{backgroundColor:"#1a81d2",position:"fixed",bottom:200,width:'100%'}} onClick={()=>{
        this.props.logOut()}}>退出登录</Button> */}
      </div>
      )
  }
}


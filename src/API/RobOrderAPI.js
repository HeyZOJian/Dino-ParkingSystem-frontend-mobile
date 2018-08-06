import axios from "axios";
import {Toast,Modal} from 'antd-mobile';
import GlobalUrl from '../contant/GlobalUrl'

const RobOrderAPI = {
  initServerData(dispatch, action) {
    this.getServerData(dispatch, action);
  },
  getServerData(successCallBack) {
    console.log(111)
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    let getDataUrl = `${GlobalUrl.request}/orders/noRob`;
      //  let getDataUrl = 'http://localhost:8081/orders/noRob';
    axios
      .get(getDataUrl)
      .then((response) => {
        const data = response.data.reverse(); 
        data.map(serverData => {
            const img = 'http://okc9ihakz.bkt.clouddn.com/%E5%B0%8F%E6%B1%BD%E8%BD%A6.svg';
            const {plateNumber,id,parkDate} = serverData;
            
            return {plateNumber,img,id,parkDate};
          })
          ;
        successCallBack([...data])
      })
      .catch(function (error) {
        if(error.response.status===403){
          Modal.alert('非法登录，请重新登录')
        }else{
          console.log(typeof(error))
          alert(error)
        }
        // Modal.alert('非法登录，请重新登录')
        setTimeout(()=>{
          window.location.href="/login"
        },2000)
      })
      .then(function () {});
  },

  sendServerData(id,successCallBack) {
    let self = this;
    const parkingBoyId = localStorage.getItem("id");
    console.log(`http://localhost:8081/orders/${id}`)
    axios.
    put(`${GlobalUrl.request}/orders/${id}`, {"parkingBoyId":parkingBoyId,"status":"waitPark"})
    // put(`http://localhost:8081/orders/${id}`, {"parkingBoyId":2,"status":"waitPark"})
    .then(function (response) {
        console.log('success');
        Toast.success('抢单成功', 1.5);
        self.getServerData(successCallBack)
        // localStorage.setItem("status","2")
        // window.location.href="/home/ParkingWorkList"
    }) 
    .catch(function (error) {
        Toast.success('抢单失败', 1.5);
    })
  }

}

export default RobOrderAPI;
import axios from "axios";
import {Toast} from 'antd-mobile';
import createHistory from 'history/createBrowserHistory';
import GlobalUrl from '../contant/GlobalUrl'

const RobOrderAPI = {
  
  sendServerData(id,successCallBack) {
    let self = this;
    const parkingBoyId = localStorage.getItem("id");
    // const parkingBoyId = 2;
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    console.log(`http://localhost:8081/orders/${id}`)
    axios.
    // put(`http://localhost:8081/${id}`, {"parkingBoyId":parkingBoyId,"status":"finish"})
    put(`${GlobalUrl.request}/orders/${id}`, {"parkingBoyId":parkingBoyId,"status":"finish"})
    .then(function (response) {
        console.log('success');
        // alert("unpark car successfully!")
        Toast.success('取车成功', 1.5);
        localStorage.setItem("status","2")
        const history = createHistory();
        history.go(-1)
        // window.location.href="/home/ParkingWorkList"
        // history = "/home/ParkingWorkList"
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default RobOrderAPI;
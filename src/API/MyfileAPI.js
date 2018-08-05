import axios from "axios";
import {Toast,Modal} from 'antd-mobile';
import createHistory from 'history/createBrowserHistory';

const RobOrderAPI = {
  
  getServerData(successCallBack) {
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    let parkingBoyId = 2
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/users/${parkingBoyId}`;
      //  let getDataUrl = 'http://localhost:8081/orders/noRob';
    axios
      .get(getDataUrl)
      .then((response) => {
        successCallBack(response.data)
      })
      .catch(function (error) {
        Modal.alert('非法登录，请重新登录')
        setTimeout(()=>{
          window.location.href="/login"
        },2000)
      })
      .then(function () {});
  },

}

export default RobOrderAPI;
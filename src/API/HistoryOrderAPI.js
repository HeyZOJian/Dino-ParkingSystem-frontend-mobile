import axios from "axios";
import {Toast,Modal} from 'antd-mobile';


const HistoryOrderAPI = {
  getServerData(successCallBack) {
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    const parkingBoyId = localStorage.getItem("id");
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/historyOrders`;
    // let getDataUrl = `http://localhost:8081/parkingBoys/${parkingBoyId}/historyOrders`
    axios
      .get(getDataUrl)
      .then((response) => {
        successCallBack(response.data)
      })
      .catch(function (error) {
        if(error.response.status===403){
          Modal.alert('非法登录，请重新登录')
        }else{
          console.log(typeof(error))
          alert(error)
        }
        setTimeout(()=>{
          window.location.href="/login"
        },2000)
      })
      .then(function () {});
  }

}

export default HistoryOrderAPI;
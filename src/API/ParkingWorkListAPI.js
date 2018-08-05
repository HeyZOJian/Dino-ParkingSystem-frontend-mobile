import axios from "axios";
import {Toast} from 'antd-mobile';

const ParkingWorkListAPI = {
//   initServerData(dispatch, action) {
//     this.getServerData(dispatch, action);
//   },
  getServerData(successCallBack) {
    const parkingBoyId = 2;
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    // let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/noHandleOrders`;
    let getDataUrl = `http://localhost:8081/parkingBoys/${parkingBoyId}/noHandleOrders`;
    axios
      .get(getDataUrl)
      .then((response) => {
        const data = response
          .data
          .map(serverData => {
            let img = ''
            if(serverData.status === 'waitPark'){
               img ='http://okc9ihakz.bkt.clouddn.com/parkingcar.svg';
            }else{
               img = 'http://okc9ihakz.bkt.clouddn.com/%E8%BD%A6%E8%BE%86%E7%AE%A1%E7%90%86-01.svg';
            }
            const {plateNumber,id,parkDate,status,parkingLotName} = serverData;
            
            return {plateNumber,img,id,parkDate,status,parkingLotName};
          })
          ;
        successCallBack([...data])
      })
      .catch(function (error) {
        Toast.fail('非法登录，请重新登录', 1.5);
        window.location.href="/login"
      })
      .then(function () {});
  },

  sendServerData(id,successCallBack) {
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    axios.
    post(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`, {"parkingBoyId":2})
    .then(function (response) {
        console.log('success');
        // alert("rob order successfully!")
        Toast.success('抢单成功', 1.5);
        successCallBack(response.status);
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default ParkingWorkListAPI;
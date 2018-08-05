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
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/noHandleOrders`;
    // let getDataUrl = `http://localhost:8081/parkingBoys/${parkingBoyId}/noHandleOrders`;
    axios
      .get(getDataUrl)
      .then((response) => {
        let reverseData = response.data.reverse();
        const data = reverseData
          .map(serverData => {
            let img = ''
            if(serverData.status === 'waitPark'){
               if(serverData.read){
                 img ='http://okc9ihakz.bkt.clouddn.com/parkingcar.svg';
               }else{
                 img ='http://okc9ihakz.bkt.clouddn.com/newpark.jpg';
               }          
            }else{
              if(serverData.read){
                img = 'http://okc9ihakz.bkt.clouddn.com/%E8%BD%A6%E8%BE%86%E7%AE%A1%E7%90%86-01.svg';
              }else{
                img = 'http://okc9ihakz.bkt.clouddn.com/newUnPark.jpg'
              }            
            }
            const {plateNumber,id,parkDate,status,parkingLotName,receipt,read} = serverData;
            
            return {plateNumber,img,id,parkDate,status,parkingLotName,receipt,read};
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

  changeReadStatus(id,successCallBack) {
    console.log("changeReadStatus")
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    axios.
    patch(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`, {"parkingBoyId":2})
    .then(function (response) {
        console.log('changeReadStatusSuccess');
        // alert("rob order successfully!")
        successCallBack()
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default ParkingWorkListAPI;
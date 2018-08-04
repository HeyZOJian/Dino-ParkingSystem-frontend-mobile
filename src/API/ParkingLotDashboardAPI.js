// const axios = require('axios');
import axios from "axios";
import createHistory from 'history/createBrowserHistory';

const ParkingLotBashBoardAPI = {
  // initServerData(dispatch, action) {
  //   this.getServerData(dispatch, action);
  // },
  getServerData(successCallBack) {
    const parkingBoyid = 2;
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyid}/noFullParkingLots`;
    axios
      .get(getDataUrl)
      .then((response) => {
        // const data = response
        //   .data
        //   .map(serverData => {
        //     const {parkingLotName, size, carNum, parkingBoyName} = serverData;
        //     return {parkingLotName, size, carNum, parkingBoyName};
        //   });
          successCallBack(response.data)
      })
      .catch(function (error) {
        alert("非法登录，请重新登录")
        window.location.href="/login"
      })
      .then(function () {});
  },

  putServerData(parkingLotId) {
    let self = this;
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    console.log(`https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/parkingLots/${parkingLotId}`)
    axios.
    put(`https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/parkingLots/${parkingLotId}`,{"orderId":parseInt(localStorage.getItem("orderId"))})
    .then(function (response) {
        console.log('success');
        alert("park car successfully!")
        // window.location.href="/home/ParkingWorkList"
        const history = createHistory();
        history.go(-1)

    }) 
    .catch(function (error) {
        console.log(error);
    })
  }
}
export default ParkingLotBashBoardAPI;
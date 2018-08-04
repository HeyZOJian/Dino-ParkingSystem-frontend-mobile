import axios from "axios";

const HistoryOrderAPI = {
  getServerData(successCallBack) {
    const parkingBoyId = 2;
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    // let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/historyOrders`;
    let getDataUrl = `http://localhost:8081/parkingBoys/${parkingBoyId}/historyOrders`
    axios
      .get(getDataUrl)
      .then((response) => {
        successCallBack(response.data)
      })
      .catch(function (error) {
        alert("非法登录，请重新登录")
        window.location.href="/login"
      })
      .then(function () {});
  }

}

export default HistoryOrderAPI;
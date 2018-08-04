import axios from "axios";

const HistoryOrderAPI = {
  getServerData(successCallBack) {
    const parkingBoyId = 2;
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/historyOrders`;
    axios
      .get(getDataUrl)
      .then((response) => {
        successCallBack(response.data)
      })
      .catch(function (error) {
      })
      .then(function () {});
  }

}

export default HistoryOrderAPI;
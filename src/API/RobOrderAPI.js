import axios from "axios";

const RobOrderAPI = {
  initServerData(dispatch, action) {
    this.getServerData(dispatch, action);
  },
  getServerData(successCallBack) {
    console.log(111)
    const token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = token;
    // let getDataUrl = 'https://dino-parking-system-backend.herokuapp.com/orders/noRob';
       let getDataUrl = 'http://localhost:8081/orders/noRob';
    axios
      .get(getDataUrl)
      .then((response) => {
        const data = response
          .data
          .map(serverData => {
            const img = 'http://okc9ihakz.bkt.clouddn.com/%E5%B0%8F%E6%B1%BD%E8%BD%A6.svg';
            const {plateNumber,id,parkDate} = serverData;
            
            return {plateNumber,img,id,parkDate};
          })
          ;
        successCallBack([...data])
      })
      .catch(function (error) {
        alert("非法登录，请重新登录")
        window.location.href="/login"
      })
      .then(function () {});
  },

  sendServerData(id,successCallBack) {
    let self = this;
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    console.log(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`)
    axios.
    // put(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`, {"parkingBoyId":2,"status":"waitPark"})
    put(`http://localhost:8081/orders/${id}`, {"parkingBoyId":2,"status":"waitPark"})
    .then(function (response) {
        console.log('success');
        alert("rob order successfully!")
        self.getServerData(successCallBack)
        // localStorage.setItem("status","2")
        // window.location.href="/home/ParkingWorkList"
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default RobOrderAPI;
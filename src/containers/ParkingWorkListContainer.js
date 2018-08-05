import {connect} from 'react-redux';
import ParkingWorkList from "../components/ParkingWorkList";
import ParkingWorkListAPI from '../API/ParkingWorkListAPI'

const mapStateToProps = (state, ownProps) => {
    console.log(lotsList)
    let lotsList = state.parkingWorkList;
  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getParkingLotsHandler: () => {
        ParkingWorkListAPI.getServerData(ordersByParkingBoy => dispatch({type:'GET_ALL_ORDERS_BY_PARKINGBOY',ordersByParkingBoy}))
    },
    changeReadStatus: (id) => {
      
      ParkingWorkListAPI.changeReadStatus(id, () => {
        let num = -1
        dispatch({type:'CHANGE_TASK_NUM',num})
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingWorkList);
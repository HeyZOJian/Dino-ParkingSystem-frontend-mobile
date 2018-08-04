import {connect} from 'react-redux';
import SelectParkingLots from "../components/SelectParkingLots";
import ParkingLotDashboardAPI from '../API/ParkingLotDashboardAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = state.parkingLotList;
  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SelectParkingLotsHandler: (parkingLotId) => {
      console.log(parkingLotId)
      ParkingLotDashboardAPI.putServerData(parkingLotId);
    },
    getParkingLotsHandler: () => {
      ParkingLotDashboardAPI.getServerData(parkingLots => dispatch({type:'GET_ALL_PARKINGLOTS',parkingLots}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectParkingLots);
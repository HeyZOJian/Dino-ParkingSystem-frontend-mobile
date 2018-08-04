import {connect} from 'react-redux';
import RobOrder from "../components/RobOrder";
import RobOrderAPI from '../API/RobOrderAPI'

const mapStateToProps = (state, ownProps) => {
    let lotsList = state.orderList;
    console.log(lotsList)
  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOrderHandler: () => {
        RobOrderAPI.getServerData(orders => dispatch({type:'GET_ALL_ORDERS',orders}))
    },
    robOrderHandle: (id) =>{
        console.log(id)
        RobOrderAPI.sendServerData(id,orders => dispatch({type:'GET_ALL_ORDERS',orders}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RobOrder);
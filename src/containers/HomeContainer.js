import {connect} from 'react-redux';
import Home from "../components/Home";

const mapStateToProps = (state, ownProps) => {
    let taskNum = state.taskNum;
  return {taskNum}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOfflineOrder: (num) => {
        dispatch({type:'CHANGE_TASK_NUM',num})
    },
    sendNewOrder: (message) => {       
        dispatch({type:'CHANGE_ORDER_MESSAGE',message})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
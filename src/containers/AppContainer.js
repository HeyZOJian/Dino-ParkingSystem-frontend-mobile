import {connect} from 'react-redux';
import App from "../App";

const mapStateToProps = (state, ownProps) => {
    let isShowRootOrder = state.isShowRootOrder;
    let message = state.newOrderMessage;
    console.log(isShowRootOrder)
    console.log(message)
  return {isShowRootOrder,message}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeRootModal: () => {      
        dispatch({type:'CLOSE_ROOT_MODAL'})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
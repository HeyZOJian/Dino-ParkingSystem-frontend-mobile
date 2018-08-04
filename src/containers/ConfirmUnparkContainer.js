import {connect} from 'react-redux';
import ConfirmUnpark from "../components/ConfirmUnpark";
import ConfirmUnparkAPI from '../API/ConfirmUnparkAPI'

const mapStateToProps = (state, ownProps) => {
  // let lotsList = state;
  // return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ConfirmUnparkHandler: (id) => {
      ConfirmUnparkAPI.sendServerData(id);
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmUnpark);
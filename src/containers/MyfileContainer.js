import {connect} from 'react-redux';
import Myfile from "../components/Myfile";
import MyfileAPI from '../API/MyfileAPI'

const mapStateToProps = (state, ownProps) => {
  let myfileData = state.myfileData;
  console.log(myfileData)
  return {myfileData}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: (parkingLotId) => {
      localStorage.removeItem("token");
      window.location.href="/login"
    },
    getMyfile: () =>{MyfileAPI.getServerData(myfileData => dispatch({type:'GET_MY_FILE_DATA',myfileData}))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Myfile);
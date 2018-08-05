export default (state = {
    orderList:[],
    parkingWorkList:[],
    historyOrderList:[],
    parkingLotList:[],
    taskNum:5,
    newOrderMessage:'',
    isShowRootOrder:false,
    myfileData:[]

}, action) => {
    console.log("reducer")
    switch (action.type) {
        case 'GET_ALL_ORDERS': {
            console.log(action.orders);
            let newState = JSON.parse(JSON.stringify(state));
            newState.orderList = [...action.orders];
        return newState;
        }
        case 'GET_ALL_PARKINGLOTS': {
            console.log(action.parkingLots);
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLotList = [...action.parkingLots];
        return newState;
        }
        case 'GET_ALL_ORDERS_BY_PARKINGBOY': {
            console.log(action.ordersByParkingBoy);
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingWorkList = [...action.ordersByParkingBoy];
            return newState;
        }
        case 'GET_ALL_HISTORYORDER': {
            console.log(action.historyOrder);
            let newState = JSON.parse(JSON.stringify(state));
            newState.historyOrderList = [...action.historyOrder];
            return newState;
        }
        case 'CHANGE_TASK_NUM': {
            console.log(action.num)
            let newState = JSON.parse(JSON.stringify(state));
            newState.taskNum = newState.taskNum + action.num;
            console.log(newState.taskNum)
            return newState;
        }
        case 'CHANGE_ORDER_MESSAGE': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.taskNum = newState.taskNum + 1;
            newState.newOrderMessage = action.message
            newState.isShowRootOrder = true;
            console.log(newState.taskNum)
            console.log(newState.newOrderMessage)
            return newState;
        }
        case 'CLOSE_ROOT_MODAL': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.isShowRootOrder = false;
            return newState;
        }
        case 'GET_MY_FILE_DATA': {
            
            let newState = JSON.parse(JSON.stringify(state));
            newState.myfileData = action.myfileData;
            console.log( newState.myfileData)
            return newState;
        }
        default:
        return state;
    }
};
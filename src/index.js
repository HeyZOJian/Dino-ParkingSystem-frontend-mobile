import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './containers/AppContainer'
import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import LoginForm from './components/Login'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>              
                <Route path="/login" component={LoginForm }></Route>
                <Route path="/home" component={App}></Route> 
                {!localStorage.getItem("token") && (window.location.href.indexOf("/login")===-1)?<Redirect to="/login" />:<Route />}              
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

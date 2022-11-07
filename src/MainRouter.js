import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import App from "./App";
import Payment from './component/Payment/Payment';
import SuccessfullPaid from './component/Payment/Successfullpaid';

class MainRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/pay" component={Payment}/>
                    <Route path="/payment" component={SuccessfullPaid}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainRouter;
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
///import {  } from 'react-router-dom';
import Addpizza from './Addpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Userslist from './Userslist';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch} from 'react-router-dom';
import Editpizza from './Editpizza';
import Adminp from './Adminp';
export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentUser.isAmin) {
            window.location.href = '/'
        }
    }, [])
    const { path } = useRouteMatch();
    return (
        <div>
              <Adminp/>
              <div className="row justify-content-center">
                <div className="col-md-10">
                    <Switch>
                        <Route exact path={`${path}/userslist`}  component={ Userslist }/>
                        <Route exact path={`${path}/pizzaslist`} component={ Pizzaslist } />
                        <Route exact path={`${path}/addpizza`} component={ Addpizza } />
                        <Route exact path={`${path}/orderslist`} component={ Orderslist } />
                        <Route exact path={`${path}/editpizza/:pizzaid`} component={ Editpizza } />
                    </Switch>      
               </div>
            </div>
        </div>
    )
}

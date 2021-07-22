import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
///import {  } from 'react-router-dom';
import Addpizza from '../screens/Addpizza';
import Orderslist from '../screens/Orderslist';
import Pizzaslist from '../screens/Pizzaslist';
import Userslist from '../screens/Userslist';
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';

export default function Adminp() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2>Admin plane</h2>
                    <ul className="adminfunctions p-10" style={{ backgroundColor: 'rgb(2, 2, 87)' }}>
                        <li><Link to={"/"} >User list</Link></li>
                        <li><Link to={"/admin/"} >Pizza list</Link></li>
                        <li><Link to={"/admin/addnew"} >Add new pizza </Link></li>
                        <li><Link to={"/admin/orderslist"} >Orders list</Link></li>
                    </ul>    
            </div>
            </div>

        </div>
    )
}

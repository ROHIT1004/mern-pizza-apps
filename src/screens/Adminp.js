import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';
export default function Adminp() {
    return (
        <div>

                    <h2>Admin plane</h2>
                    <ul className="adminfunctions p-10" style={{ backgroundColor: 'rgb(2, 2, 87)' }}>
                        <li><Link to='/admin/userslist' >User list</Link></li>
                        <li><Link to='/admin/pizzaslist' >Pizza list</Link></li>
                        <li><Link to='/admin/addpizza' >Add new pizza </Link></li>
                        <li><Link to='/admin/orderslist' >Orders list</Link></li>
                    </ul>
        </div>
    )
}

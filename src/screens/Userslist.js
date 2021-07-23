import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
import { getAllUsers , deleteUsers} from '../actions/userActions';
export default function Userslist() {
  const dispatch = useDispatch()
    const userstate = useSelector((state) => state.getAllUsersReducer);
    const {users, error ,loading} = userstate  
 
    
    useEffect(() => {
        
    dispatch(getAllUsers())
    
    }, [])

  
    return (
        <div>
            <div>
            {loading && (<Loading/>) }
           {error && (<Error error="somthing went worng in addpizza" />) }
                   
           <h1>Users list</h1>
 
           <table className="table table-striped table-bordered ">
                <thead className="thead justify-content">
                    <tr>
                        <th style={{width: '220px'}}>User ID</th>
                        <th style={{width: '150px'}}>Name</th>
                        <th style={{width: '200px'}}>Email</th>
                        <th style={{width: '50px'}}>Delete</th>
            
                    </tr>
                </thead>
            </table>
            <tbody>
            {users && users.map(user=>{
            return <tr>
            <td style={{width: '500px'}}>{user._id}</td>
            <td style={{width: '500px'}}>{user.name}</td>
            <td style={{width: '500px'}}>{user.email}</td>
            <td style={{width: '400px'}}>
                <td>
                        <i className="fa fa-trash m-1" onClick={()=>{dispatch(deleteUsers(user._id))}}></i>
                </td>
            </td>
                
            
            
            
             </tr>
            })}
            </tbody>
          
        </div>
        </div>
            
    )
}

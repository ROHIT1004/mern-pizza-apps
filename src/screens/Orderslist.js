import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
import { deliverOrder, getAllOrders } from '../actions/orderActions';
export default function Orderslist() {
 const dispatch = useDispatch()

    const getorderstate = useSelector((state) => state.getAllUsersReducer);
    const {orders, error ,loading} = getorderstate  
 
    
    useEffect(() => {
        
    dispatch(getAllOrders())
    
    }, [])

     return (
        <div>
            <h1>Ordrs list</h1>
            {loading && (<Loading/>) }
           {error && (<Error error="somthing went worng in addpizza" />) }
           <table className="table table-striped table-bordered ">
                <thead className="thead justify-content">
                    <tr>
                        <th style={{width: '220px'}}>Order ID</th>
                        <th style={{width: '150px'}}>Email</th>
                        <th style={{width: '200px'}}>USer ID</th>
                        <th style={{width: '50px'}}>Amount</th>
                        <th style={{width: '100px'}}>Date</th>
                        <th style={{width: '200px'}}>Status</th>
            
                    </tr>
                </thead>
            </table>
            <tbody>
            {orders && orders.map(order=>{
            return <tr>
            <td style={{width: '500px'}}>{order._id}</td>
            <td style={{width: '500px'}}>{order.email}</td>
            <td style={{width: '500px'}}>{order.userid}</td>
            <td style={{width: '400px'}}>{order.orderAmount}</td>
            <td style={{width: '700px'}}>{order.createdAt.substring(0,10)}</td>
            <td style={{width: '500px'}}>
                {order.isDelivered ? (<h1>Delivered</h1>) : (<button className="btn" onClick={()=>{dispatch(deliverOrder(order._id))}}>deliver</button>)}
            </td>
                
            
            
            
             </tr>
            })}
            </tbody>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate  = useSelector(state => state.getUserOrdersReducer)
    const {pizzas,loading, error } = orderstate
  
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
   
   
    return (
        <div>
            <h2 style={{fontSize: '35px'}}>My Orders</h2>
            <hr/>
            <div className="row  justify-content-center" >
            {loading && (<Loading/>) }
            {error && (<Error error="somthing went worng" />) }
            {pizzas && pizzas.map(order =>{
                return <div className="col-md-8 m-2 p-1">
                        <div className="flex-container "style={{backgroundColor:'red',color:'white'}}>
                        <div className=" w-100 m-1" style={{textAlign: 'left'}}>
                        <h2 style={ {fontSize:'25px'}}>Items</h2>
                        <hr/>
                            {order.orderItems.map(item=>{
                                return <div>
                                    <p>{item.name} {item.varient}*{item.quantity}={item.price}</p>
                                    
                                </div>
                            })}
                        <p>Ordered On:{order.createdAt.substring(0,10)} </p> 
                        </div>                             
                        <div className="text-left w-100 m-1" style={{textAlign: 'left'}}>
                        <h2 style={ {fontSize:'25px'}}>Address</h2>                          
                        <hr/>
                        <p>Street:{order.shippingAddress.street} </p>
                        <p>City :{order.shippingAddress.city} </p>
                        <p>Country :{order.shippingAddress.Country} </p>
                        <p>Pincode :{order.shippingAddress.pincode} </p>
                        </div>
                        <div className="text-left w-100 m-1" style={{textAlign: 'left'}}>
                        <h2 style={ {fontSize:'25px'}}>Order Info</h2>                          
                        <hr/>
                        <p>order Amount:{order.orderAmount} </p>
                        <p>Date :{order.createdAt.substring(0,10)} </p>
                        <p>Transtions Id:{order.transactionId} </p>
                        <p>order Id :{order._id} </p>
                        </div>        
                         </div>        
                </div>
            })}
            </div>

        </div>
    )
}

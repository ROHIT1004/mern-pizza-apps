import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import {deleteFromCart} from '../actions/cartActions';
import  Checkout  from '../components/Checkout';
export default function Cartscreen() {

    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    var subtotal = cartItems.reduce((x,item)=> x+item.price , 0)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="row justify-content-center" >

                <div className=" col-sm-8 ">
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                        {cartItems.map(item=>{
                            return  <div className="flex-container " style={{marginLeft:'100px'}}>
                            <div className='m-1 w-50' style={{textAlign: 'justify'},{margin:'100px'},{textAlign: 'left'}}>
                            <h1>{item.name} [{item.varient}]</h1>
                            <h1>Price :{item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                            <h1 style={{display:'inline'}}>Quantity : </h1>
                            <i className="fa fa-plus" aria-hidden="true" onClick={()=> {dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                            <b>{item.quantity}</b>
                            <i className="fa fa-minus" aria-hidden="true" onClick={()=> {dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                            </div>
                            <div className='m-2 w-30 mb-4'>
                            <img src={item.image} style={{height: '80px'},{width: '80px'}}></img>
                            </div>
                            <div className='m-1 w-10' >
                            <i className="fa fa-trash mt-4" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                            </div>
                        </div>
                        })} 
                </div> 
                <div className="col-sm-4 ">
                        <h2 style={{ fontSize: '45px' }}>SubTotal: {subtotal} /-</h2>
                        <Checkout subtotal={subtotal} />
                </div>
                         
            </div>
        </div>
    )
}

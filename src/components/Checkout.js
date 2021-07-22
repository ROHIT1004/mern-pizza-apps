import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
export default function Checkout({subtotal}) {
    
    const orderstate = useSelector((state)=> state.placeOrderReducer)
    const {loading, error ,success} = orderstate
    const dispatch = useDispatch()
    const makePayment = token=> {
        console.log(subtotal)
        console.log(token)
        dispatch(placeOrder(token,subtotal))
    }
    return (
       <div>
           {loading ? (<Loading/>) : null}
           {error ? (<Error error="somthing went worng" />) : null}
            {success ? (<Success success="your order PLaced succlfully" />) : null}
            <StripeCheckout
            stripeKey="pk_test_51JDs64SBI8nEyGkI2e72sEAf5ZtvHvvXF46n1gjimzdpxWgVz73a119aTzM4IvIZoqsubbUQmhiTc3wbSYR9pzzc00tP2dIsc9"
            token={makePayment}
            amount={subtotal*100}
            currency='INR'
            shippingAddress
            billingAddress
            >
                <button className='btn'>
                    Pay now {subtotal}
                </button>
            </StripeCheckout>

        </div>
    )
}

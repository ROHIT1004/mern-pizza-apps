import axios from "axios";
export const placeOrder=(token, subtotal)=> async (dispatch, getState)=>{

    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser  = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
        try {
            ///console.log(subtotal)
            const response = await axios.post('api/orders/placeorder', {token, subtotal,currentUser,cartItems})
            dispatch({type: 'PLACE_ORDER_SUCCESS'})
            console.log(response);

        } catch (error) {
            dispatch({type: 'PLACE_ORDER_FAILED'})
            console.log(error+'WHATTTTTTT');
        }
}

export const getUserOrders=()=> async (dispatch, getState)=>{

    const currentUser  = getState().loginUserReducer.currentUser
    console.log(currentUser._id)
    
    dispatch({type:'GET_USER_ORDER_REQUEST'})
    try {
        const response = await axios.post('/api/orders/getuserorders' ,{userid: currentUser._id})
        console.log(response)
        dispatch({type:'GET_USER_ORDER_SUCCESS', payload : response.data})
        
    } catch(error){
        dispatch({type:'GET_USER_ORDER_FAILED',payload : error})

    }

}

export const getAllOrders=()=> async (dispatch, getState)=>{

    const currentUser  = getState().loginUserReducer.currentUser
    dispatch({type:'GET_ALLORDER_REQUEST'})
    try {
        const response = await axios.get('/api/orders/getallorders' )
        console.log(response)
        dispatch({type:'GET_ALLORDER_SUCCESS', payload : response.data})
    } catch(error){
        dispatch({type:'GET_ALLORDER_FAILED',payload : error})

    }

}

export const deliverOrder =(orderid)=> async dispatch =>{
    console.log("orderid"+orderid)
    try {
        const response = await axios.post('/api/orders/deliverorder', {orderid})
        console.log(response)
        //const orders = await axios.get('/api/orders/getallorders' )
       // dispatch({type:'GET_ALLORDERS_SUCCESS', payload : orders.data})
        alert('order delvier')
        window.location.reload()
    } catch(error){
        dispatch({type:'GET_DELIVERORDER_FAILED',payload : error})
    }

}
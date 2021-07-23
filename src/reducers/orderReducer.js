export const placeOrderReducer=(state={},action) =>{

    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST': return {
            lodaing:true
        }
        case 'PLACE_ORDER_SUCCESS': return {
            lodaing:false,
            success:true
        }
        case 'PLACE_ORDER_FAILED': return {
            lodaing:false,
            error: action.payload
        }
        default :  return state
    }

}

export const getUserOrdersReducer = (state={orders : []}, action) =>{

    switch(action.type)
    {
        case 'GET_USER_ORDER_REQEUST' : return {
            loading : true,
            ...state
        }
        case 'GET_USER_ORDER_SUCCESS' : return {
            loading: false,
            orders: action.payload
        }
        case 'GET_USER_ORDER_FAILED' : return {
            loading: false,
            pizzas: action.payload
        }
        default : return state
    }
};

export const getAllOrdersReducer = (state={orders : []}, action) =>{

    switch(action.type)
    {
        case 'GET_ALLORDER_REQEUST' : return {
            loading : true,
            ...state
        }
        case 'GET_ALLORDER_SUCCESS' : return {
            loading: false,
            orders: action.payload
        }
        case 'GET_ALLORDER_FAILED' : return {
            loading: false,
            pizzas: action.payload
        }
        default : return state
    }
};
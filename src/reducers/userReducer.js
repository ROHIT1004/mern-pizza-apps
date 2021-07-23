export const registerUserReducer=(state={},action) =>{

    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST': return {
            lodaing:true
        }
        case 'USER_REGISTER_SUCCESS': return {
            lodaing:false,
            success:true
        }
        case 'USER_REGISTER_FAILED': return {
            lodaing:false,
            error: action.payload
        }
        default :  return state
    }

}
export const loginUserReducer=(state={},action) =>{

    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST': return {
            lodaing:true
        }
        case 'USER_LOGIN_SUCCESS': return {
            lodaing:false,
            success:true,
            currentUser : action.payload
        }
        case 'USER_LOGIN_FAILED': return {
            lodaing:false,
            error: action.payload
        }
        default :  return state
    }

}

export const getAllUsersReducer = (state={users : []}, action) =>{

    switch(action.type)
    {
        case 'GET_USERS_REQEUST' : return {
            loading : true,
            ...state
        }
        case 'GET_USERS_SUCCESS' : return {
            loading: false,
            users: action.payload
        }
        case 'GET_USERS_FAILED' : return {
            error: action.payload,
            loading: false,
        }
        default : return state
    }
}

export const deleteUsersReducer = (state={}, action) =>{

    switch(action.type)
    {
        case 'GET_DELETE_REQEUST' : return {
            loading : true,
            ...state
        }
        case 'GET_DELETE_SUCCESS' : return {
            loading: false
            //users: action.payload
        }
        case 'GET_DELETE_FAILED' : return {
            error: action.payload,
            loading: false,
        }
        default : return state
    }
}

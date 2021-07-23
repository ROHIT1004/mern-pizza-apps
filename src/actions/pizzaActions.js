import axios from "axios";
export const getAllPizzas=()=> async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})
    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCESS', payload : response.data})
    } catch(error){
        dispatch({type:'GET_PIZZAS_FAILED',payload : error})

    }

}

export const fliterPizzas=(searchkey,category)=> async dispatch=>{
    var fliterPizzas;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response);
        fliterPizzas=response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey))
        if(category!='all')
        {
            fliterPizzas=response.data.filter(pizza=>pizza.category.toLowerCase()==category)     
        }
        dispatch({type:'GET_PIZZAS_SUCCESS', payload : fliterPizzas})
    } catch(error){
        dispatch({type:'GET_PIZZAS_FAILED',payload : error})

    }

}

export const addPizza=(pizza)=> async dispatch=>{

    dispatch({type:'ADD_PIZZA_REQUEST'})
    try {
        console.log(pizza);
        
        const response = await axios.post('/api/pizzas/addpizza', {pizza})
        console.log(response);
        dispatch({type:'ADD_PIZZA_SUCCESS', payload : response.data})
    } catch(error){
        console.log("Error add  pizza :- "+error);
        
        dispatch({type:'ADD_PIZZA_FAILED',payload : error})
    }
}

export const getPizzaById=(pizzaid)=> async dispatch=>{

    dispatch({type:'GET_PIZZABYID_REQUEST'})
    try {
        const response = await axios.post('/api/pizzas/getpizzabyid' , {pizzaid})
        console.log(response);
        dispatch({type:'GET_PIZZABYID_SUCCESS', payload : response.data})
    } catch(error){
        dispatch({type:'GET_PIZZABYID_FAILED',payload : error})

    }

}


export const editPizza=(editpizza)=> async dispatch=>{

    dispatch({type:'EDIT_PIZZA_REQUEST'})
    try {
        console.log(editpizza);
        
        const response = await axios.post('/api/pizzas/editpizza', {editpizza})
        console.log(response);
        dispatch({type:'EDIT_PIZZA_SUCCESS', payload : response.data})
    } catch(error){
        console.log("Error EDIT  pizza :- "+error);
        
        dispatch({type:'EDIT_PIZZA_FAILED',payload : error})
    }
}

export const deletePizza=(pizzaid)=> async dispatch =>{

try {
    ///console.log(pizzaid);
    const response = await axios.post('/api/pizzas/deletepizza', {pizzaid})
    console.log(response)
    window.location.reload()
} catch (error) {
    alert("Pizza deleted failed somithg we nt worng")
    console.log("Error in deleting  pizza :- "+error)
    }
}
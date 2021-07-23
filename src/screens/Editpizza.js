import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
import { getPizzaById ,editPizza} from '../actions/pizzaActions';
export default function Editpizza({match}) {
    const [name, setname] = useState("")
    const [smallprice, setsmallprice] = useState("")
    const [mediumprice, setmediumprice] = useState("")
    const [largeprice, setlargeprice] = useState("")
    const [image, setimage] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")
    const dispatch = useDispatch()
    
    const geteditpizzastate = useSelector((state) => state.getPizzaByIdReducer);
    const editpizzastate = useSelector((state) => state.editPizzaReducer)
    const {pizzas, error ,loading} = geteditpizzastate  
    const {editsuccess, editerror ,editloading} = editpizzastate  

    
    useEffect(() => {

        if(pizzas){
            if(pizzas._id==match.params.pizzaid)
            {
                setname(pizzas.name)
                setcategory(pizzas.category)
                setdescription(pizzas.description)
                setimage(pizzas.image)
                setsmallprice(pizzas.prices[0]['small'])
                setmediumprice(pizzas.prices[0]['medium'])
                setlargeprice(pizzas.prices[0]['large'])   
        }
            else{           
                dispatch(getPizzaById(match.params.pizzaid)) 
            }
        }else{
            dispatch(getPizzaById(match.params.pizzaid)) 
            console.log("what A ERROR")
}
    }, [pizzas , dispatch]);

    function formHandler(e) {
        e.preventDefault();
        const editedpizza ={
            _id : match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices:{
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
       console.log(editedpizza);
       dispatch(editPizza(editedpizza));
    }
    
    return (
        <div>
            <h1>Edit pizza </h1>
            <h1>Pizza id=  {match.params.pizzaid}</h1>

            <div className="text-left">
            
            {loading && (<Loading/>) }
           {error && (<Error error="somthing went worng in addpizza" />) }
           {editsuccess && (<Success success="PIZZA eDIT SULLC"/>)}
                <form onSubmit={formHandler}>
                    <input type="text" className="form-control" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="small varient price"  value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="large varint price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="image" value={image} onChange={(e)=>{setimage(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}} />      
                    <button type='submit' className=" btn mt-3">Edit pizza</button>
                
                </form>
                </div>

        </div>
    )
}

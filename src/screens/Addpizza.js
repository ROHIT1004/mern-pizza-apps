
import React ,{ useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { addPizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
export default function Addpizza() {
    const [name, setname] = useState("")
    const [smallprice, setsmallprice] = useState("")
    const [mediumprice, setmediumprice] = useState("")
    const [largeprice, setlargeprice] = useState("")
    const [image, setimage] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")
    const dispatch = useDispatch()
    
    const addpizzastate = useSelector((state) => state.addPizzaReducer);
    const {success, error ,loading} = addpizzastate
    function formHandler(e) {
        e.preventDefault();
        const pizza ={
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
       console.log(pizza);
       dispatch(addPizza(pizza));
    }
    
    return (
        <div>
            <div className="text-left">
            <h1>Add new pizza</h1>

            {loading && (<Loading/>) }
           {error && (<Error error="somthing went worng in addpizza" />) }
            {success && (<Success success="Add new pizza successfully" />) }
                <form onSubmit={formHandler}>
                    <input type="text" className="form-control" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="small varient price"  value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="large varint price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="image" value={image} onChange={(e)=>{setimage(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                    <input type="text" className="form-control" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}} />      
                    <button type='submit' className=" btn mt-3">Add Nww pizza</button>
                
                </form>
                </div>
        </div>
    )
}

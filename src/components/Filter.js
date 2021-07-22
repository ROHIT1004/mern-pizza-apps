import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { fliterPizzas } from '../actions/pizzaActions';

export default function Filter() {
    const dispatch = useDispatch()
    
    const [seachkey ,setsearchkey]= useState('');
    const [category, setcategory] = useState('all');
    return (
        <div className="container">
            <div className="row justify-content-center  shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 w-40">
                    <input
                    onChange={(e)=>{setsearchkey(e.target.value)}}
                    type='text' value={seachkey} className=" form-control w-40" placeholder="serach pizzas"/>
                </div>
                <div className="col-md-3 mt-2">
                    <select 
                    onChange={(e)=>{setcategory(e.target.value)}}
                    className="form-control w-10" value={category}>
                        <option value="all">All</option>
                        <option value="veg">veg</option>
                        <option value="nonveg">non-veg</option>
                    </select>
                </div>
                <div className="col-md-3 w-10 mt-2">
                    <button className="btn " onClick={()=>dispatch(fliterPizzas(seachkey,category))}>Filter</button>
                </div>
            </div>        
        </div>
    )
}

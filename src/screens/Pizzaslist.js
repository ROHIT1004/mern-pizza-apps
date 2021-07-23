import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Pizza from '../components/Pizza';
import { getAllPizzas ,deletePizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import {Link}  from 'react-router-dom';
const Pizzaslist = () => {
    const dispatch = useDispatch()

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas())
    }, []);


   
    return (
        <div>
           <h2>Pizzas list</h2> 
            {loading && (<loading/>)}
            {error && (<Error error="somrthige pizaa list went worng"/>)}
            <table className="table table-dark table-bordered ">
                <thead className="thead justify-content">
                    <tr>
                        <th style={{width: '500px'}}>Name</th>
                        <th style={{width: '200px'}}>prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
            <tbody>
            {pizzas && pizzas.map(pizza=>{
                return <tr>
                    <td style={{width: '500px'}}>{pizza.name}</td>
                    <td style={{width: '200px'}}>
                        Small: {pizza.prices[0]['small']}  <br/>
                        Medium: {pizza.prices[0]['medium']}  <br/>
                        large: {pizza.prices[0]['large']}  

                    </td>
                    <td style={{width: '330px'}}>{pizza.category}</td>
                    <td>
                        <i className="fa fa-trash m-1" onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                        
                        <Link to={`/admin/editpizza/${pizza._id}`} className="fa fa-edit m-1"></Link>
                    </td>
                    
                </tr>

            })}
            </tbody>
        </div>
    );
};
export default Pizzaslist;
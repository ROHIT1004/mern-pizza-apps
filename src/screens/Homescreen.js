import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
export default function Homescreen() {
    const dispatch = useDispatch()

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas())
    }, []);



    return (
        <div>
            <Filter/>
            <pizzas />
            <div className="row">
                
                {loading ? ( <Loading/> ) : error ? (<Error error='Somthig went worng'/>) : (
                    pizzas.map(pizza => {
                        return <div className="col-md-4 p-3">
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>

                    })
                )}
            </div>
        </div>
    )
}
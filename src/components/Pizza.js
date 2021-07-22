import React, { useState } from 'react';
//import pizza from '../pizzasdata'
import { Modal } from 'react-bootstrap';
import {useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch();
  function addtocart()
  {
     dispatch(addToCart(pizza, quantity, varient)) 
  }

    return (
        <div className="shadow p-3 mb-5 bg-white rounded" style={{ margin: '70px' }}>
           <div onClick={handleShow}>
           <h1>{pizza.name}</h1>
            <img src={pizza.image} className="image-fluid" style={{ height: '200px', width: '200px' }} />
           </div>
           
            <div className="d-flex flex-column">
                <div className="p-2">
                    <div className="flex-container">
                        <div className="w-100 m-1">
                            <p>varients</p>
                            <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                                {pizza.varients.map(varient => {
                                    return <option value={varient}>{varient}</option>
                                })}
                            </select>
                        </div>

                        <div className="w-100 m-1">
                            <p>Quantity</p>
                            <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                                {[...Array(10).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1} </option>

                                })}
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex flex-row ml-auto">
                <div className="flex-container1">
                    <div className="m-1 w-100">
                        <h1 className="mt-2">Price: {pizza.prices[0][varient] * quantity} Rs                    </h1>
                    </div>
                </div>
                <div className="flex-container1 ">

                    <div className="m-1 w-100 ">
                        <button className="btn m-2" onClick={addtocart}>Add to cart</button>
                    </div>
                </div>
            </div>


            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <img src={pizza.image}  className="image-fluid" style={{ height: '300px !important' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                                <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>



        </div>
    )
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
  const cartstate = useSelector(state => state.cartReducer)
  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand mr-auto p-2" href="/">RohitPizzA</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
 
          {currentUser ? <div className="dropdown mt-2">
  <a style={{color: 'black'}} className="dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {currentUser.name}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/orders">Order</a>
    <a className="dropdown-item" href="#">Logout</a>
  </div>
</div> : (<li className="nav-item active">
            <a className="nav-link" href="/login">Login </a>
          </li>
          )}

          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart {cartstate.cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};
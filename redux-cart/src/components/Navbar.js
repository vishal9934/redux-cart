import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { getCartTotal } from '../SliceCart';

export default function App() {
    const {cart}=useSelector((state)=> state.AllCart)
    const dispatch=useDispatch() 
    useEffect(()=>{
        dispatch(getCartTotal())
     },[cart])
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
            <Link to="/">All Products</Link>
        </span>
        <MDBBtn rounded color='success'>
        <Link to="/cart">Cart({cart.length})</Link>
        </MDBBtn>
       
      </MDBContainer>
    </MDBNavbar>
  );
}
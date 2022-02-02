import logo from './logo.svg';
import './App.css';
import Form from './Form';

import AddCart from './AddCart';
import Items from './Items';
import Item from './Newcart';
import Newcart from './Newcart';

import { stockData } from './data';
import Header from './Header';
import {BrowserRouter as Router} from "react-router-dom";

import Routess from './Routes/Routess';
import { useState,useEffect } from 'react';



function App() {
  const {productItem}= stockData
  const[cartItems,setCartItems]= useState([])

 let localCart = localStorage.getItem("cart");

  // useEffect(() => {
  //   //turn it into js
  //   localCart = JSON.parse(localCart);
  //   //load persisted cart into state if it exists
  //   if (localCart) setCartItems(localCart)
    
  // }, []) 

  const handleAddProduct =(product)=>{ 
  
console.log(product,"id")
const data = JSON.parse(localStorage.getItem('cart'))
          if (data && data.length > 0) {
              const a = data.filter(local => local == product)
              if (a.length > 0) {
                  localStorage.setItem("cart", JSON.stringify([...data]))
                   
              }
              else {
                  localStorage.setItem("cart", JSON.stringify([...data, product]))
                   
              }
          }
          else {
              localStorage.setItem("cart", JSON.stringify([product]))
              
          }
           
  




  // const data = JSON.parse(localStorage.getItem('cart'))
  //           if (data && data.length > 0) {
  //               const a = data.filter(local => local == product)
  //               if (a.length > 0) {
  //                   localStorage.setItem("cart", JSON.stringify([...data]))
  //               }
  //               else {
  //                   localStorage.setItem("cart", JSON.stringify([...data, product]))
  //               }
  //           }
  //           else {
  //               localStorage.setItem("final", JSON.stringify([product]))
  //           }
  //           console.log(product, data)
  //           cartCopy.push(data)
  //           setCartItems(cartCopy)
  }

 

//    const handleAddProduct =(product)=>{ 
//      let totalid= []
//     let cartCopy = [...cartItems];
//     const  productExist= cartItems.find((item)=> item.id===product.id);
  
//     if(productExist){
         
//          setCartItems(cartItems.map((item)=>item.id===product.id ? {...productExist,quantity:productExist.quantity+1}: item))}
// else{
//   cartCopy.push(product)
// totalid.push(product);
//   setCartItems([...cartItems ,{...product,quantity:1}])
  
// }
 
// let stringCart = JSON.stringify(totalid);
// // localStorage.setItem("id",product)
// localStorage.setItem("cart", stringCart )




    // const productExist=  localStorage.setItem('id', JSON.stringify(product));
    // const  productExist= cartItems.find((item)=> item.id===product.id);
   
    // if(productExist){
    //   const id = localStorage.getItem('id');
    //   setCartItems(cartItems.map((item)=>item.id===product.id ? {...productExist,quantity:productExist.quantity+1}: item))
    // }
    // else{
    //   setCartItems([...cartItems ,{...product,quantity:1}])
    // } }
   
  

const removeItem=(product)=>{
  // let existingItem = cartItems.find(cartItem => cartItem.id ===product);
//   if(existingItem.quantity===1){
// setCartItems(cartItems.filter((item)=>IndexOf((item.id)!==product.id))
//   }
//   else{
//     setCartItems(cartItems.map((item)=>item.id===product? {...existingItem,quantity:existingItem.quantity-1}:item))
//   }
  var existingItems = JSON.parse (localStorage.getItem('cart'));
 const newda = existingItems.filter((item)=>item!==product)

 let stringCart = JSON.stringify( newda);
 localStorage.setItem("cart", stringCart)
  setCartItems(newda);
 
}




// function removeItem(id) {
 
// //   let oldItems = JSON.parse(localStorage.getItem('cart')) || [];
// //  console.log(oldItems,"index")
// //  let index = oldItems.findIndex(s => s.id === id);
// //  console.log(index)
// //   localStorage.setItem('cart', JSON.stringify(cart));
// let oldItems = JSON.parse(localStorage.getItem('cart'));
// console.log(oldItems,"index")
//   const newList = oldItems.filter((item=>item !==id));
//   localStorage.setItem('cart',newList);
// // console.log(newList)
//   // setCartItems(newList);
// }

  return (
    <div className="App">
   
       {/* <Form/> */}
   {/* <Items/>
   <hr/> */}
    {/* <AddCart/> */}
    {/* <Newcart/> */}
    <Router>
    <Header/>
    <Routess productItem={productItem} cartItems={cartItems}  handleAddProduct={ handleAddProduct} removeItem={removeItem} />
   </Router>
    </div>
  );
}

export default App;

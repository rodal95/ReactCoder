import React , {useContext} from 'react'
import { addDoc, collection, getFirestore, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import {CartContext} from "../CartContext"
import { useState } from 'react'
import db from '../services'
import Swal from 'sweetalert2'
import Cart from './Cart'

export default function CheckOut(){
    const {getCart} = useContext(CartContext)
    const [name, SetName] = useState('')
    const [phone, SetPhone] = useState('')
    const [email, SetEmail] = useState('')
    const cart = getCart()
    const navigate = useNavigate()
    const {clear} = useContext(CartContext)
     function finalizarCompra(){
        
        let order = {buyer: {name, phone, email}, items: cart, total: cart.reduce((pv, cv)=> pv + (cv.quantity*cv.precio), 0)}

        const orderCollection = collection(db, "order")
        addDoc(orderCollection, order)
        Swal.fire('Gracias por su compra')
       
        .then(({id})=>{
            console.log(id)
        })
        .then(()=>{
            navigate("/")
        })
        .then(clear)
       
        .catch((e)=>console.log(e))
    }
    return (
        <>
            <div>
                <form>
                    <input  onChange ={(e)=>  SetName(e.target.value)} type="text" placeholder='Nombre' ></input>
                    <input  onChange ={(e)=> SetPhone(e.target.value)} type="text" placeholder='Telefono' ></input>
                    <input  onChange ={(e)=> SetEmail(e.target.value)} type="email" placeholder='Email' ></input>
                    {(name == '' || phone== '' || email == '')?
                      <button type="button" onClick={finalizarCompra} disabled={true} >Finalizar Compra</button>:
                      <button type="button" onClick={finalizarCompra} disabled={false}>Finalizar Compra</button>}
                </form>
            </div>
        
        </>
    )
}
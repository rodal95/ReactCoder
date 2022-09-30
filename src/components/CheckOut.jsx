import React , {useContext} from 'react'
import { addDoc, collection, getFirestore, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import {CartContext} from "../CartContext"
import { useState } from 'react'
import db from '../services'
import Swal from 'sweetalert2'
import Cart from './Cart'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
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
        
       
        .then(({id})=>{
            console.log(id)
            Swal.fire('Gracias por su compra su numero de orden es ', id)
        })
        .then(()=>{
            navigate("/")
            clear()
        })
        .catch((e)=>console.log(e))
    }
   
    return (
        <>
            <div className='Formulario'>
                <form>
                    <input  onChange ={(e)=>  SetName(e.target.value)} type="text" placeholder='Nombre' ></input>
                    <input  onChange ={(e)=> SetPhone(e.target.value)} type="text" placeholder='Telefono' ></input>
                    <input  onChange ={(e)=> SetEmail(e.target.value)} type="email" placeholder='Email' ></input>
                    {(name == '' || phone== '' || email == '')?
                      <Button type="button" onClick={finalizarCompra} disabled={true} >Finalizar Compra</Button>:
                      <Button type="button" onClick={finalizarCompra} disabled={false}>Finalizar Compra</Button>}
                </form>
            </div>
        
        </>
    )
}
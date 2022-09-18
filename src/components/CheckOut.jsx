import React , {useContext} from 'react'
import { addDoc, collection, getFirestore, setDoc } from 'firebase/firestore'
import {CartContext} from "../CartContext"
import { useState } from 'react'
import db from '../services'

export default function CheckOut(){
    const {getCart} = useContext(CartContext)
    const [name, SetName] = useState('')
    const [phone, SetPhone] = useState('')
    const [email, SetEmail] = useState('')
    const cart = getCart()
    function finalizarCompra(){
        console.log(name)
        let order = {buyer: {name, phone, email}, items: cart, total: cart.reduce((pv, cv)=> pv + (cv.quantity*cv.precio), 0)}
        const orderCollection = collection(db, "order")
        addDoc(orderCollection, order)
        .then(({id})=>{
            console.log(id)
        })
        .catch((e)=>console.log(e))
    }
    return (
        <>
            <div>
                <form>
                    <input  onChange ={(e)=>  SetName(e.target.value)} type="text" placeholder='Nombre'></input>
                    <input  onChange ={(e)=> SetPhone(e.target.value)} type="text" placeholder='Telefono'></input>
                    <input  onChange ={(e)=> SetEmail(e.target.value)} type="email" placeholder='Email'></input>
                    <button type="button" onClick={()=>{finalizarCompra()} }>Finalizar compra</button>
                </form>
            </div>
        
        </>
    )
}
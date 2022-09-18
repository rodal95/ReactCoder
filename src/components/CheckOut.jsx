import React , {useContext} from 'react'
import { addDoc, collection, getFirestore, setDoc } from 'firebase/firestore'
import {CartContext} from "../CartContext"
import { useState } from 'react'


export default function CheckOut(){
    const {cart} = useContext(CartContext)
    const [name, SetName] = useState('')
    const [phone, Setphone] = useState('')
    const [email, Setemail] = useState('')

    function finalizarCompra({name, phone, email}){
        const db = getFirestore()
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
                    <input value ={name} onChange ={(e)=> SetName(e.value)} type="text" placeholder='Nombre'></input>
                    <input value ={phone} onChange ={(e)=> Setphone(e.value)} type="text" placeholder='Telefono'></input>
                    <input value ={email} onChange ={(e)=> Setemail(e.value)} type="email" placeholder='Email'></input>
                    <button onClick={()=>{finalizarCompra()} }>Finalizar compra</button>
                </form>
            </div>
        
        </>
    )
}
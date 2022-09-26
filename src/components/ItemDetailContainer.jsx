import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import db from '../services'
import { collection, doc, getDocs } from 'firebase/firestore';

export default function ItemDetailContainer() {
    const {id}= useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{

      const getColData = async ()=> {
        try{
        const data = collection(db, "products") 
         const col = await getDocs(data)
         const res = col.docs.map((doc)=> doc={ id:doc.id, ...doc.data()} ) 
         const eleccion = res.find((element)=> element.id == id)
         setItem(eleccion)
        } catch(error){
          console.log(error)
        }
         
      }
      getColData()
      
      return ()=>{
  
      }
    },[id])
  return (
    <>
    {Object.keys(item).length && <ItemDetail item={item}/>} 
    </>   
  )
}

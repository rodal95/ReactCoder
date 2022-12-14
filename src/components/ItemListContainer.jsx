import React from 'react'
import ItemCount from './ItemCount'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import db from '../services'
import { collection, doc, getDocs } from 'firebase/firestore';
import {PulseLoader} from 'react-spinners'
import Carrousel from './Carrousel'

export default function ItemListContainer() {
  const [items, setItems] = useState({})
  const {categoryId} = useParams()

  useEffect(()=>{

    const getColData = async ()=> {
      try{
        const data = collection(db, "products") 
        const col = await getDocs(data)
        const res = col.docs.map((doc)=> doc={ id:doc.id, ...doc.data()} ) 
        let productosFiltrados = []
        productosFiltrados = categoryId ? res.filter((element)=> element.categoria == categoryId) : res
        setItems(productosFiltrados)
      }catch(error){
        console.log(error)
      }
    }
    getColData()
    
    return ()=>{
    }
    
  },[categoryId])

  return (
    <>
    <div style={{minHeight:'700px', marginTop:'30px'}}>
      <div className='ListaItems'>
      {items.length ?
      <ItemList items ={items}/>:
      <PulseLoader color="#ffffff" size={25}>
      <span className="visually-hidden">Loading...</span>
      </PulseLoader>
      }</div>

      
    </div>
    <Carrousel/>
    </>
  )
}

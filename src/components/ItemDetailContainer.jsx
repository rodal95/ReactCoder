import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const {id}= useParams();
    const [item, setItem] = useState({});

 
    useEffect(()=> {
        let productos = [{id:1, titulo: "Ak 47", precio: 500, imagen:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/11/30/5fa535c98fec8.jpeg"}, {id:2, titulo:"M40", precio:350, imagen:"https://www.armas.es/files/page/img/1/armas-legendarias-sniper-m40-a100.jpg"}]
        
        new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(productos.find((element)=> element.id == id))
            }, 2000)
          }).then((data)=>{
            setItem(data)
          })
    },[id])

  return (
    <>
    {Object.keys(item).length && <ItemDetail item={item}/>} 
    </>   
  )
}

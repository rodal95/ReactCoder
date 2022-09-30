import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
        <div className='redes'>
            <img src='https://thumbs.dreamstime.com/b/logotipo-del-icono-de-facebook-en-el-ejemplo-modificable-vector-fondo-blanco-141051712.jpg'></img>
            <img src='https://thumbs.dreamstime.com/b/nuevo-logotipo-de-instagram-128373493.jpg'></img>
            <img src='data:image/png;base64,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'></img>
        </div>
        <div className='Contactos'>
            <ul>
                <li>Telefono: 3874522147</li>
                <li>Mail: aldayrodrigo@gmail.com</li>
                <li>Fax: 47514841</li>
            </ul>
        </div>
        <div className='MediosdePago'>
        <img src='https://tentulogo.com/wp-content/uploads/2018/01/visa-logo.jpg'></img>
        <img src='https://pbs.twimg.com/profile_images/1467852001673363459/0IR57HDN_400x400.jpg'></img>
        <img src='https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png'></img>

        </div>

    </div>
  )
}

export default Footer
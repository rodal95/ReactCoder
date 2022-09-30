import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (<div className='carrousel'>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.ambito.com/p/295c3e88b67741d656ec2c05b5176d57/adjuntos/239/imagenes/040/012/0040012389/1200x675/smart/guerra-ucrania-soldado-ucraniano.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cnnespanol.cnn.com/wp-content/uploads/2021/02/armas-estados-unidos.jpg?quality=100&strip=info"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.france24.com/media/display/d5bf9990-fa52-11ec-b02f-005056bf30b7/w:1280/p:16x9/4a5b649ed77a99053f1b745244b43fd67f511806w.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;
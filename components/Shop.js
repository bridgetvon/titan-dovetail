
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
  
export default class Shop extends Component {
    render() {
        return (
            <div id='#shop'>
              <h2 className='text-4xl p-4 text-center text-red font-bold'>Shop</h2>
              <Carousel>
                  <div>
                    <Image
                    src='/pergula.jpeg'
                    alt='Pergola in Mikes backyard'
                    width={650}
                    height={350}
                    layout='responsive'
                    />
                  </div>
                  <div>
                  <Image
                    src='/deck.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
  
                  </div>
                  <div>
                  <Image
                    src='/firepit.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
  
                  </div>
                  <div>
                  <Image
                    src='/patio.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
  
                  </div>
                  <div> 
                  <Image
                    src='/simple.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
                  </div>
                  <div> 
                  <Image
                    src='/white.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
                  </div>
    
                  <div> 
                  <Image
                    src='/bg.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
                  </div>
                  <div> 
                  <Image
                    src='/structure.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
                  </div>
                  <div> 
                  <Image
                    src='/structure2.jpg'
                    alt='Pergola in Mikes backyard'
                    layout='fill'
                    />
                  </div>
              </Carousel>
            </div>
        );
    }
};
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/Kabir.jpg'
import img2 from '../../images/uri.jpg'
import img3 from '../../images/sanju.jpg'
import img4 from '../../images/rajni.jpg'
import img5 from '../../images/dangal.jpg'
 
function Img_slide() {
    
        return (
            <div className='slider-container' >
            <Carousel className="carousel-style" 
                showThumbs={false} showStatus={false} 
                interval={1000} useKeyboardArrows={true}
                dynamicHeight={false}
                autoPlay={true} >
                <div>
                    <img src={img1} alt='img1' height='600px'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                <img src={img2} alt='img2' height='auto' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                <img src={img3} alt='img3' height='600px' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                <img src={img4} alt='img4' height='600px'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                <img src={img5} alt='img5' height='600px'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>

            </Carousel>
            </div>
        );
    
};
 

export default Img_slide;
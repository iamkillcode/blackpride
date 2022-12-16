import picone from '../images/MaskGroup6.png';
import './AboutSlider.css';
import './AboutSliderMq.css'
import Carousel from 'react-bootstrap/Carousel';




function AboutSlider() {
  return (
    <Carousel className='Carouselcl'>
      <Carousel.Item className='d-flex carousel__item'> 
        <img
          className="d-block w-30 h-30"
          src={picone}
          alt="First slide"
        />
        
        <div className='pl-5'>
          <p className='ledex_text'>With over 20 years of experience in planning transport operations,
            clearing customs, projectingforwarding, break haulage, warehousing,
            and export of any commodity, we are the professionals.
            We provide thorough and affordable freight forwarding that aids our
            clients with their various and varying transportation requirements and put 
            smiles on their faces. We take a lot of time speaking with each client one-on-one 
            to understand and handle their shipping needs. 

          </p>
        </div>
        
      </Carousel.Item>


      <Carousel.Item className='d-flex carousel__item'> 
        <img
          className="d-block w-30 h-30"
          src={picone}
          alt="second slide"
        />
        
        <div className='pl-5'>
          <p className='ledex_text'>With over 20 years of experience in planning transport operations,
            clearing customs, projectingforwarding, break haulage, warehousing,
            and export of any commodity, we are the professionals.
            We provide thorough and affordable freight forwarding that aids our
            clients with their various and varying transportation requirements and put 
            smiles on their faces. We take a lot of time speaking with each client one-on-one 
            to understand and handle their shipping needs.

          </p>
        </div>
        
      </Carousel.Item>


      <Carousel.Item className='d-flex carousel__item'> 
        <img
          className="d-block w-30 h-30"
          src={picone}
          alt="third slide"
        />
        
        <div className='pl-5'>
          <p className='ledex_text'>With over 20 years of experience in planning transport operations,
            clearing customs, projectingforwarding, break haulage, warehousing,
            and export of any commodity, we are the professionals.
            We provide thorough and affordable freight forwarding that aids our
            clients with their various and varying transportation requirements and put 
            smiles on their faces. We take a lot of time speaking with each client one-on-one 
            to understand and handle their shipping needs.

          </p>
        </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutSlider;
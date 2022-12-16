

import './Tracking.css'
import './TrackingMq.css'
import ContactCard from './ContactCard'
import {etys} from '../data'



const Tracking = () => {
  return (
    <div className='tracking__wrapper'>

    <div class="parent">
        <div class="div1"> 
            <div className='container-1'>
                    <h2 className='fcolor'>Easily Track Your <br /> Shipment</h2>
            </div>
        </div>
            
         
            <div className="div2">
                <img src={etys[0].img} alt='globe' className='flt1'>
                </img>
                <div className='flt2'>
                <p className='htag'>{etys[0].number}</p>
                <p>{etys[0].type}</p>
                </div>
            </div>
            

            <div className="div3"> 
            <img src={etys[1].img} alt='globe' className='flt1'>
                </img>
                <div className='flt2'>
                <p className='htag'>{etys[1].number}</p>
                <p>{etys[1].type}</p>
                </div>
            </div>

            <div class="div4"> 
            <img src={etys[2].img} alt='globe' className='flt1'>
                </img>
                <div className='flt2'>
                <p className='htag'>{etys[2].number}</p>
                <p>{etys[2].type}</p>
                </div>
            </div>
            

            <div class="div5"> 
            
            </div>

            <div class="div6">
                <p>
                    We take great pride in integrating local knowledge<br/>
                    with automated global services<br/>
                    Phone us now for any inquiries.
                </p>
                <div class="div77">
                <button onClick={alert} className="cntbutton3">Contact Us</button>
            
            </div>
            </div>

            <div class="div7">
                <button onClick={alert} className="cntbutton tmq">Contact Us</button>
            
            </div>

            <div class="div8"> 
            
            </div>

            <div class="div9">
            <div className='container-2'>
                    <ContactCard />
                    
                </div>
            
            </div>
    </div>

    </div>
  )
}

export default Tracking
import React ,{useState}from 'react';
import './Bulb.css';
import './App.css';
//import pic_bulboff from './pic_bulboff.gif'
function Bulb() {

    let [isLit , setLit] = useState(false)
    let [roomTemp , setTem] = useState(72)
  return (
    <div>
          
        <div className='container'>
            <div className='col-sm-12'>
                <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onClick={()=> setLit(!isLit)} id="customSwitches"/>
                <label className="custom-control-label" htmlFor="customSwitches">{isLit ? 'ON' : 'OFF'}</label>
                </div>
            </div>
            <img src={isLit? require('./pic_bulbon.gif') :require('./pic_bulboff.gif') }  alt="logo" />
            <div className='col-md-10'>
            <h2>Temperature</h2>
            <p>Tempreate of Room Right Now is {roomTemp}</p>
           <label>Decrease <button type="button" class="btn btn-success" onClick={()=> setTem(--roomTemp)}>-</button></label>
            <button type="button" class="btn btn-danger" onClick={()=> setTem(++roomTemp)}>+</button> <label>Increase</label>
            </div>

        </div>

    </div>
  );
}

export default Bulb;
import React, { useState ,useEffect } from 'react';
import logo from './logo.gif';
import './covid.css';
const Covid = () => {
    const [data, setData]= useState([]);

    const getCovidData = async() =>{
        try{
            const res= await fetch('https://data.covid19india.org/data.json');
            const realData=await res.json();
            console.log(realData.statewise[0]);
            setData(realData.statewise[0]);
        } catch(err){
            console.log(err);
        }
    }

  useEffect(()=>{
    getCovidData();
  }, []);

return (
    <div>
        <img src={logo} alt='live' />
        <h2>Live Covid Tracker</h2>
        <section>
        <ul>
            <li className='card'>
                <div className='card1'>
                    <span className='card_name'>TOTAL COVID-19 CASES</span>
                    <span className='card_val'>{"\n"}{data.confirmed}</span>
                </div>
            </li>

            <li className='card'>
                <div className='card2'>
                    <span className='card_name'>ACTIVE COVID-19 CASES</span>
                    <span className='card_val'>{"\n"}{data.active}</span>
                </div>
            </li>

            <li className='card'>   
                <div className='card3'>
                    <span className='card_name'>RECOVERED{"\n"}<p>{data.recovered}</p></span>
                    
                    {/* <span className='card_val'>{"\n"}{data.recovered}</span> */}
                </div>
            </li>

            <li className='card'>
                <div className='card4'>
                    <span className='card_name'>NUMBER OF DEATH</span>
                    <span className='card_val'>{"\n"}{data.deaths}</span>
                </div>
            </li>

            <li className='card'>
                <div className='card5'>
                    <span className='card_name'>LAST UPDATE TIME</span>
                    <span className='card_val'>{"\n"}{data.lastupdatedtime}</span>
                </div>
            </li>
        </ul>
        </section>
    </div>
    )
}

export default Covid;
import React from 'react'

function Card(props){

        return(
            <div className='card'>
                <p className='fighter-rank fighter-info-container black'>#{props.rank}</p>

                <div className='fighter-weight-container fighter-info-container'>
                    <p className='fighter-division grey'>{props.division}</p>
                    <p className='fighter-weight grey'>{props.weight}lbs</p>
                </div>
            
                <img src={props.img} className='fighter-img'/>

                <div className='fighter-name-container fighter-info-container'>
                    {props.nickname === '' ? '' : <p className='fighter-nickname grey'>"{props.nickname}"</p>}
                    <p className='fighter-name black'>{props.name}</p>
                    <p className='fighter-record black'>{props.wins}-{props.loses}-{props.draws} (W-L-D)</p>
                </div>

                <button className='follow-btn black'>
                    <p className='follow-btn-text'>Follow</p>
                    <div className='follow-btn-icons'>
                        <i className="fab fa-github fa-2x"></i>
                        <i className="fab fa-github fa-2x"></i>
                    </div>
                </button>
                
            </div>
        ) 
}

export default Card
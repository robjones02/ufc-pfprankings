import React from 'react'

function Header(props){

    function handleClick(clickedGender){
        props.setGender(clickedGender)     
    }

    return(
        <div className='header'>
            <a href='https://www.ufc.com/rankings'><img src='/ufc-logo.png' className='header-img'/></a>
            <div className='header-toggle-container'>
                <p 
                    onClick={() => handleClick('Men')}
                    className={`header-toggle-text ${props.gender === 'Men' ? 'header-active-toggle' : 'header-inactive-toggle'}`}
                    >Men
                </p>
                <p 
                    onClick={() => handleClick('Women')}
                    className={`header-toggle-text ${props.gender === 'Women' ? 'header-active-toggle' : 'header-inactive-toggle'}`}
                    >Women
                </p>
            </div>
            
            <h1 className='header-text'>Pound for Pound Rankings</h1>
        </div>
    )
}

export default Header
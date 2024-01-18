import React from 'react'

function Footer(){
    return(
        <div className='footer'>
            <p>Developed by Rob Jones</p>
            <p>Rankings correct as of 19/12/23</p>
            <a 
                href='https://github.com/robjones02' 
                className='footer-github-link'>
                    <i 
                    className="fab fa-github fa-3x">
                </i></a>
        </div>
    )
}

export default Footer
import React from 'react'

function ScrollBtn(){

    const [isVisible, setIsVisible] = React.useState(false)

    function HandleScroll(){
        if(window.scrollY > 1000){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
        console.log(window.scrollY)
    }

    React.useEffect(()=>{
        window.addEventListener('scroll', HandleScroll)

        return ()=>{
            window.removeEventListener('scroll', HandleScroll)
        }
    }, [])

    function ScrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return(
        <div>
            {isVisible && (
                <button 
                    className='scroll-btn'
                    onClick={ScrollToTop}
                    >
                    <i className="fa-solid fa-arrow-up fa-lg"></i>
                </button>
            )}
        </div>
    )
}

export default ScrollBtn
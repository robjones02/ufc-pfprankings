import React from 'react'
import './styles.css'
import Card from './Components/card'
import data from './fighterdata'
import Header from './Components/header'
import Footer from './Components/footer'
import ScrollBtn from './Components/scrollbtn'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App(){

    const [gender, setGender] = React.useState('Men')

    React.useEffect(()=>{
        console.log(gender)
    }, [gender])

    let filteredData = []

    if(gender === 'Men'){
        filteredData = data.filter(fighter=> fighter.gender === 'Men')
    }else if(gender === 'Women'){
        filteredData = data.filter(fighter=> fighter.gender === 'Women')
    }

    const cards = filteredData.map(fighter=>{

            return <Card 
            key={fighter.id}
            rank={fighter.rank}
            division={fighter.division}
            weight={fighter.weight}
            name={fighter.name}
            wins={fighter.record.wins}
            loses={fighter.record.loses}
            draws={fighter.record.draws}
            nickname={fighter.nickname}
            img={fighter.img}
        />  
    })

    return(
        <div className='card-container'>
            <Header gender={gender} setGender={setGender}/>
            {cards}
            <Footer />
            <ScrollBtn />
        </div>
    )
}

export default App
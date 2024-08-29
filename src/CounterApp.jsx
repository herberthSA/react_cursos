import { useState } from 'react'

import Proptypes from 'prop-types'

const handleAdd =()=>{

}
const CounterApp = ({value}) => {
    const [counter , setCounter] = useState(value);
    const handleAdd =()=> setCounter(counter+1);
    const handleSubract =()=> setCounter(counter+1);
    const handleRest =()=> setCounter(value);

    return (

    <>
    <section className='header'>
        <h1>CounterApp</h1>
        <h2> { counter} </h2>
    </section>
    <section className='content'>
        <button onClick={ handleAdd }>+1</button>
        <button onClick= { handleSubract }>-1</button>
        <button onClick={ handleRest} >reset</button>
    </section>
    </>

    )
}
CounterApp.prototype ={
    title: Proptypes.number.isRequired
}


export default CounterApp
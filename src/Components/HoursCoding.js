import React from 'react';

function HoursCoding(count, setCount, incrementCount, decrementCount) {
    return (
        <div className='hours-coding'>
            <h1>How many hours did you code today?</h1>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default HoursCoding;
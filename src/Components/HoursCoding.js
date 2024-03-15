import React from 'react';

function HoursCoding({decrementCount, count, incrementCount}) {
    return (
        <div className='hours-coding'>
            <h1>How many hours did you code today?</h1>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <button disabled={count < 1}>Submit</button>
        </div>
    )
}

export default HoursCoding;
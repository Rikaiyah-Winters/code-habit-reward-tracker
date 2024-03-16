import React from 'react';

function HoursCoding({decrementCount, count, incrementCount, alertOrOutput}) {
    return (
        <div className='hours-coding'>
            <h1>How many hours did you code today?</h1>
            <button disabled={count < 1}
            onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <button onClick={alertOrOutput}>Submit</button>
        </div>
    )
}

export default HoursCoding;
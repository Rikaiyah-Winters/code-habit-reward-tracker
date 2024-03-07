import React from 'react';

function HoursCoding() {
    return (
        <div>
            <h1>How many hours did you code today?</h1>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default HoursCoding;
import React from 'react';

function HoursCoding({ decrementCount, count, incrementCount, alertOrOutput }) {
    return (
        <div className='hours-coding'>
            <h1>How many hours did you code today?</h1>
            <div className='count-number-div'>
                <span className='count-number'>{count}</span>
            </div>

            <div className='count-buttons'>
                <button className="de-increment-button" disabled={count < 1}
                    onClick={decrementCount}>-</button>
                <button className="de-increment-button" onClick={incrementCount}>+</button>
            </div>
            <button className="study-hours-submit-button" onClick={alertOrOutput}>Submit</button>
        </div>
    )
}

export default HoursCoding;
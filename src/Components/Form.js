import React from 'react';
function Form() {
    return (
        <div>
            <div className='reward-input'>
                <input placeholder='What do you desire?' onChange={e => setReward(e.target.value)}></input>
                <button>Submit my Desire ❤️</button>
            </div>
            <div className='code-count-input'>
                <h1>How many hours did you code today?</h1>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <div className='reward-output'>
                <p>{reward}</p>
            </div>
        </div>
    )
}

export default Form
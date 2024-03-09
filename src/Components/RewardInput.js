import React from 'react';

function RewardInput() {
    return (
        <div className='reward-input'>
            <h1>Please enter 1 material thing you would like to reward yourself with for coding.</h1>
            <input placeholder='1 material thing' /*</div>onChange={e => setReward(e.target.value)}*/ />
            <h1>Please enter 1 experience you would like to reward yourself with for coding.</h1>
            <input placeholder='1 experience' />
            <button>Submit Reward Ideas</button>
        </div>
    )
}
//Figure out 
export default RewardInput;
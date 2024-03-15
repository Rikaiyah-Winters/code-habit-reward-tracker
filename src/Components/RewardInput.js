import React from 'react';

function RewardInput({ rewards, setRewards, list, handleSubmit }) {

    return (
        <div className='reward-input'>
            <h1>Please enter 1 reward you would like to give yourself with for coding.</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='material-reward'
                    value={rewards}
                    placeholder='1 material thing'
                    onChange={(e) => setRewards(e.target.value)} />
                <button onClick={handleSubmit} disabled={list.length > 2}>Submit Reward Idea</button>
            </form>
        </div>
    )
}
//Figure out 
export default RewardInput;
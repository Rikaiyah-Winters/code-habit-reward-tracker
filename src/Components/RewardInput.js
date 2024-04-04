import React from 'react';

function RewardInput({ rewards, setRewards, list, handleSubmit, setPage }) {

    return (
        <div className='reward-input'>
            <h1>Please make a list of things you would like to reward yourself with for coding.</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='material-reward'
                    value={rewards}
                    onChange={(e) => setRewards(e.target.value)} />
                <button onClick={handleSubmit}>Submit Reward Ideas</button>
            </form>
            {
                list.map((a) => 

                <div>
                    <li>{a.rewards}</li>
                </div>
                
                )

            }
        </div>
    )
}

export default RewardInput;
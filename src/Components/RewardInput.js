import React from 'react';

function RewardInput({ rewards, setRewards, list, handleSubmit, setPage }) {

    return (
        <div className='reward-list'>
            <h1 className='reward-input-h1'>Please make a list of things you would like to reward yourself with for coding.</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='reward-input'
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
import React from 'react';

function RewardInput({ rewards, setRewards, list, handleSubmit, setPage }) {

    return (
        <div className='reward-input'>
            <h1>Please enter 3 things you would like to reward yourself with for coding.</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='material-reward'
                    value={rewards}
                    onChange={(e) => setRewards(e.target.value)} />
                <button
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }
                }

                >Submit Reward Ideas</button>
            </form>
        </div>
    )
}

export default RewardInput;
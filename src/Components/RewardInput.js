import React from 'react';

function RewardInput({ formData, setFormData }) {



    return (
        <div className='reward-input'>
            <h1>Please enter 1 reward you would like to give yourself with for coding.</h1>
            <input
                className='material-reward'
                value={formData.rewardInput}
                placeholder='1 material thing'
                onChange={(e) => setFormData({ ...formData, materialRewardInput: e.target.value })} />
            {/*<h1>Please enter 1 experience you would like to reward yourself with for coding.</h1>
            <input
                className='experience-reward'
                value={formData.experienceRewardInput}
                placeholder='1 experience'
    onChange={(e) => setFormData({ ...formData, experienceRewardInput: e.target.value })} />*/}
            <button>Submit Reward Idea</button>
            <h2>{rewards}</h2>
        </div>
    )
}
//Figure out 
export default RewardInput;
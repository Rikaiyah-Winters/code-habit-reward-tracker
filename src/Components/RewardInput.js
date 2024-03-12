import React from 'react';

function RewardInput({ formData, setFormData }) {
    return (
        <div className='reward-input'>
            <h1>Please enter 1 material thing you would like to reward yourself with for coding.</h1>
            <input 
            className='material-reward'
            value={formData.materialRewardInput} 
            placeholder='1 material thing'
            onChange={(e) => setFormData({...formData, materialRewardInput:e.target.value})} />
            <h1>Please enter 1 experience you would like to reward yourself with for coding.</h1>
            <input 
            className='experience-reward' 
            value={formData.experienceRewardInput}
            placeholder='1 experience' 
            onChange={(e) => setFormData({...formData, experienceRewardInput:e.target.value})}/>
            <button>Submit Reward Ideas</button>
        </div>
    )
}
//Figure out 
export default RewardInput;
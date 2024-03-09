import React, { useState } from 'react';
import RewardInput from './RewardInput';
import HoursCoding from './HoursCoding';
import RewardOutput from './RewardOutput'

function Form() {

    const [page, setPage] = useState(0);
    //const [reward, setReward] = useState('');

    const FormTitles = ["Reward Input", "Hours Coding", "Reward Output"];

    const pageDisplay = () => {
        if (page === 0) {
            return <RewardInput />
        } else if (page === 1) {
            return <HoursCoding />
        } else {
            return <RewardOutput />
        }
    };

    return (
        <div className='form'>
            <div className='form-container'></div>
            <div className='header'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{pageDisplay()}</div>
            <div className='footer'>
                <button
                    disabled={page === 0}
                    onClick={() => { setPage((currPage) => currPage - 1) }}>
                    Prev
                </button>
                <button
                    disabled={page === FormTitles.length - 1}
                    onClick={() => { setPage((currPage) => currPage + 1) }}>
                    Next
                </button>
                {/*If you have a FUNCTION INSIDE ONCLICK, it is set up like: () => {change of state - goes from current # to current + 1}*/}
            </div>
        </div>
    );
}

export default Form
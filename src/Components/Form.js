import React, { useState } from 'react';
import RewardInput from './RewardInput';
import HoursCoding from './HoursCoding';

function Form() {

    const [count, setCount] = useState(1);
    const [page, setPage] = useState(0);
    const [rewards, setRewards] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const rewardIdeas = { rewards };
        if (rewards) {
            setList((ls) => [...ls, rewardIdeas])
            setRewards("");
        }
    };

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
        /*prevCount allows you to take prev count and  minus by one as oppoed to count - 1 where count is the number when we render the function, it doesn't change in the function like with prevCount*/
    };

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const alertOrOutput = () => {
        if (count < 1) {
            alert("YOU NEED TO STUDY MORE!")
        } else {
            setPage(1);
        }
    };

    const FormTitles = ["Hours Coding", "Reward Input"];

    const pageDisplay = () => {
        if (page === 0) {
            return <HoursCoding
                decrementCount={decrementCount}
                count={count}
                incrementCount={incrementCount}
                alertOrOutput={alertOrOutput}

            />
        } else if (page === 1) {
            return <RewardInput
                rewards={rewards}
                setRewards={setRewards}
                list={list}
                handleSubmit={handleSubmit}
                setPage={setPage}
            />
        }
    };

    return (
        <div className='form'>
            <div className='form-container'></div>
            <div className='header'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{pageDisplay()}</div>
        </div>
    );
}

export default Form
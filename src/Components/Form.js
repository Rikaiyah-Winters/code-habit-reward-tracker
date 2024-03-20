import React, { useState } from 'react';
import RewardInput from './RewardInput';
import HoursCoding from './HoursCoding';
import RewardOutput from './RewardOutput'

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
        setCount(prevCount => prevCount - 1) /*prevCount allows you to take prev count and  minus by one as oppoed to count - 1 where count is the number when we render the function, it doesn't change in the function like with prevCount*/

    };

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    //append this to the function that says that if coding number is > 1, then move on to reward output

    const alertOrOutput = () => {
        if (count < 1) {
            alert("YOU NEED TO STUDY MORE!")
        } else {
            setPage(2);
        }
    };

    const FormTitles = ["Reward Input", "Hours Coding", "Reward Output"];

    const pageDisplay = () => {
        if (page === 0) {
            return <RewardInput
                rewards={rewards}
                setRewards={setRewards}
                list={list}
                handleSubmit={handleSubmit}
                setPage={setPage}
            />
        } else if (page === 1) {
            return <HoursCoding
                decrementCount={decrementCount}
                count={count}
                incrementCount={incrementCount}
                alertOrOutput={alertOrOutput}
            />
        } else {
            return <RewardOutput
                list={list}
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
            <div className='footer'>
                {/*<button
                    disabled={page === 0}
                    onClick={() => { setPage((currPage) => currPage - 1) }}>
                    Prev
                </button>*/}
                {/*<button
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>*/}
                {/*If you have a FUNCTION INSIDE ONCLICK, it is set up like: () => {change of state - goes from current # to current + 1}*/}
            </div>
        </div>
    );
}

export default Form
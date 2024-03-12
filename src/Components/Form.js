import React, { useState } from 'react';
import RewardInput from './RewardInput';
import HoursCoding from './HoursCoding';
import RewardOutput from './RewardOutput'

function Form() {
    const [count, setCount] = useState(4);
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        materialRewardInput: "",
        experienceRewardInput: "",
        //hoursCodedInput: 0,
    });

    function decrementCount() {
        setCount(prevCount => prevCount - 1) /*prevCount allows you to take prev count and  minus by one as oppoed to count - 1 where count is the number when we render the function, it doesn't change in the function like with prevCount*/

    };

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    const FormTitles = ["Reward Input", "Hours Coding", "Reward Output"];

    const pageDisplay = () => {
        if (page === 0) {
            return <RewardInput 
            formData={formData} 
            setFormData={setFormData} />
        } else if (page === 1) {
            return <HoursCoding 
            decrementCount={decrementCount()} 
            incrementCount={incrementCount()} 
            count={count} 
            setCount={setCount} />
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
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
                {/*If you have a FUNCTION INSIDE ONCLICK, it is set up like: () => {change of state - goes from current # to current + 1}*/}
            </div>
        </div>
    );
}

export default Form
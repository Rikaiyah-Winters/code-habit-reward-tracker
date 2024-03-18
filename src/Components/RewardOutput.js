import React from 'react';

function RewardOutput({ list, finalReward }) {
    return (
        <div>
            {
                list.map((a) => 

                <div>
                    <li>{a.rewards}</li> {/*need to add an index*/}
                </div>
                
                )

            }
        </div>

    )
}

export default RewardOutput;
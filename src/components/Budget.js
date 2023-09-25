import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch, budget, currency } = useContext(AppContext);
      
          const setBudget = (value)=>{
                  dispatch({
                      type: 'SET_BUDGET',
                      payload: parseInt(value),
                  })
          }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                    <input
                        required='required'
                        type='number'
                        id='budget'
                        min={1660}
                        max={20000}
                        step={10}
                        value={budget}
                        style={{ marginLeft: '1rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                            
                        </input></span>
        </div>
    );
};
export default Budget;

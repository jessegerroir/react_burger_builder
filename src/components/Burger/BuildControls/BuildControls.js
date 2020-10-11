import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad',  type: 'salad' },
    { label: 'Bacon',  type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat',   type: 'meat' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((controlObj) => {
                return <BuildControl 
                        key ={controlObj.label} 
                        label={controlObj.type}
                        added={() => props.ingredientAdded(controlObj.type)}
                        removed={() => props.ingredientRemoved(controlObj.type)}
                        disabled={props.disabled[controlObj.type]}/>
            })}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;
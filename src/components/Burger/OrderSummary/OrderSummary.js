import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (<li key={ingredientKey}>
                        <span stype={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
                    </li>);
        });
    
    // const ingredientSummary = [];
    // for(const [key, value] in props.ingredients){
    //     ingredientSummary.push(<li><span stype={{textTransform: 'capitalize'}}>{key}</span>: {value}</li>)
    // }

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>

            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;
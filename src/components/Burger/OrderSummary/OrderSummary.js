import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // This could be a functional component
    componentDidUpdate() {
        console.log('order summary will update');
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingredientKey => {
            return (<li key={ingredientKey}>
                        <span stype={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
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
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={this.props.purchaseCanceled} btnType="Danger">CANCEL</Button>
            <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Aux>
        );
    }
}

export default OrderSummary;
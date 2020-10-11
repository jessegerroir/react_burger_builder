import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let ingredientsArray = Object.keys(props.ingredients)
        // creates array of array of elements
        .map((ingredientKey) => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            });
        })
        // will flatten the array of arrays into one giant array
        .reduce((accumulator, currentValue) => {
            return accumulator.concat(currentValue);
        }, []);

        if (ingredientsArray.length <= 0) {
            ingredientsArray = <p>Please start adding ingredients</p>
        }

        // Create array filled with burger ingredient components version 2
        // const ingredientsArray = [];
        // for (const [name, amount] of Object.entries(props.ingredients)) {
        //     for(let i = 0; i < amount; i++){
        //         ingredientsArray.push(<BurgerIngredient key={Math.random()} type={name} />)
        //     }
        // }
    
    // check to make sure   

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
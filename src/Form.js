import React, { useState } from "react";
import { Link } from 'react-router-dom'





export function Form () {

    const barePizza = {
        Size: '',
        Sauce: '',
        Toppings: '',
        Crust: '',
        Instructions: '',
        Quantity: '0'
    }


    const [ pizza, setPizza ] = useState({barePizza})


    const onSizeChange = evt => {
        return (
            setPizza({ ...pizza, Size: evt.target.value })        
        )
    }   

    const onSauceChange = evt => {
        return (
            setPizza({ ...pizza, Sauce: evt.target.value })
        )
    } 

    const onToppingChange = evt => {
        return (
           setPizza({ ...pizza, Topping: evt.target.value })
        )
    } 

    const onCrustChange = evt => {
        return (
            setPizza({ ...pizza, Crust: evt.target.value })        
        )
    } 

    const onInstructionsChange = evt => {
        return (
            setPizza({ ...pizza, Instructions: evt.target.value })        
        )
    } 

    const onQuantityChange = evt => {
        return (
            setPizza({ ...pizza, Quantity: evt.target.value })        
        )
    }
    
    const onSubmit = evt => {
        return (
           console.log(evt.target.value)
        )
    }

    const style = {
        border: '2px solid black', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        width: '100%'
    }

    const innerstyleG = {
        ...style, 
        border: '0',
        alignItems: 'center', 
        justifyContent: 'left', 
        flexGrow: '1', 
        backgroundColor: 'lightgray',   
    }

    const innerstyle = {
        ...style,
        border: '0', 
        alignItems: 'center', 
        justifyContent: 'left', 
        flexGrow: '1'   
    }

    return (
      <form id="pizza-form" onSubmit={onSubmit} >  
        <div className="Form" style={{...style, margin: '4rem'}}>
            <div style={innerstyle}>
                <h3>Build Your Own Pizza</h3>
            </div>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Choose Your Size</h4>
                <p style={{margin: '0', color: 'red'}}>*Required</p>
            </div>
            <div style={innerstyle}>
                <select id= 'size-dropdown' onChange={onSizeChange}>
                    <option value="">--Please Select--</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select>
            </div>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Choice of Sauce</h4>
                <p style={{margin: '0', color: 'red'}}>*Required</p>
            </div>
            <section onChange={onSauceChange}>
                <label>
                    <input type="radio" name="sauce" value="Original Red" />
                    Original Red
                </label>
                <br />
                <label>
                    <input type="radio" name="sauce" value="Garlic Ranch" />
                    Garlic Rance
                </label>
                <br />
                <label>
                    <input type="radio" name="sauce" value="BBQ Sauce" />
                    BBQ Sauce
                </label>
                <br />
                <label>
                    <input type="radio" name="sauce" value="Spinach Alfredo" />
                    Spinach Alfredo
                </label>
                <br />
                <label>
                    <input type="radio" name="sauce" value="Pesto" />
                    Pesto 
                </label>
            </section>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Add Toppings</h4>
                <p style={{margin: '0', color: 'red'}}>*Choose up to 10</p>
            </div>
            <section onChange={onToppingChange} style={{...innerstyle, flexDirection: 'row', }}>
                <div style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input type="checkbox" name="toppings" value="Pepperoni" />
                        Pepperoni
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Sausage" />
                        Sausage
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Canadian Bacon" />
                        Canadian Bacon
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Spicy Italian Sausage" />
                        Spicy Italian Sausage
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Garlic Chicken" />
                        Garlic Chicken
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Onions" />
                        Onions
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Bell Pepper" />
                        Bell Pepper
                    </label>
                </div>
                <div style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input type="checkbox" name="toppings" value="Diced Tomatoes" />
                        Diced Tomatoes
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Kalamata Olives" />
                        Black Olives
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Roasted Garlic" />
                        Roasted Garlic
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Artichoke Hearts" />
                        Artichoke Hearts
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Feta Cheese" />
                        Feta Cheese
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Pineapple" />
                        Pineapple
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Spinach" />
                        Spinach
                    </label>
                    <label>
                        <input type="checkbox" name="toppings" value="Extra Cheese" />
                        Extra Cheese
                    </label>
                </div>
            </section>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Substitute Your Crust</h4>
                <p style={{margin: '0', color: 'red'}}>*Vegan Option</p>
            </div>
                <section onChange={onCrustChange} style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input type="range" name="crust" min="0" max="1" value='0' />
                    </label>
                </section>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Special Instructions</h4>
            </div>
                <section onChange={onInstructionsChange} style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input  id='speal-text' type="text" name="name-input" value="Anything you'd like to Add" />
                    </label>
                </section>
                <section onChange={onQuantityChange} style={{...innerstyle, borderBottom: '1rem',  alignItems: 'flex-start'}}>
                    <label>
                        <input type="number" name="quantity" />
                    </label>
                    <button id="order-button" type="submit">
                        Add to Order $FREE-99
                    </button>
                </section>                    
        </div>
      </form>
    )
}
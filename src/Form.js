import React, { useState } from "react";
import { Link } from 'react-router-dom'





export function Form () {

    const barePizza = {
        Name: '',
        Size: '',
        Sauce: '',
        Pepperoni: false,
        Sausage: false,
        CanadianBacon: false,
        SpicyItalian: false,
        Crust: false,
        Instructions: 'Special Instructions Here',
        Quantity: '0'
    }


    const [ pizza, setPizza ] = useState({barePizza})

    const onNameChange = evt => {
        return (
            setPizza({ ...pizza, Size: evt.target.value })
        )
    }

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
            setPizza((prevState) => ({ ...prevState, Crust: !prevState.Crust }))        
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
        evt.preventDefault();

        return (
           console.log(pizza)
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
                <label htmlFor="nameInput">Name:</label>
                    <input 
                        type="text" 
                        id="name-input" 
                        onChange={onNameChange} 
                        value={pizza.Name} 
                        placeholder="Enter Your Name" 
                        />
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
                </div>
            </section>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Substitute Your Crust</h4>
                <p style={{margin: '0', color: 'red'}}>*Vegan Option</p>
            </div>
                <section onChange={onCrustChange} style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input type="range" name="crust" min="0" max="1" value={pizza.Crust} />
                    </label>
                </section>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Special Instructions</h4>
            </div>
                <section onChange={onInstructionsChange} style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input  id='special-text' type="textarea" value={pizza.Instructions} />
                    </label>
                </section>
                <section onChange={onQuantityChange} style={{...innerstyle, borderBottom: '1rem',  alignItems: 'flex-start'}}>
                    <label>
                        <input type="number" name="quantity" value={pizza.Quantity}/>
                    </label>
                    <button id="order-button" type="submit">
                        Add to Order $FREE-99
                    </button>
                </section>                    
        </div>
      </form>
    )
}
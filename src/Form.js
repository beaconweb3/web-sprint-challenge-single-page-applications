import React, { useEffect, useState } from "react";
import * as yup from 'yup';





export function Form () {

    const barePizza = {
        name: '',
        size: '',
        sauce: '',
        pepperoni: false,
        sausage: false,
        canadianbacon: false,
        spicyitalian: false,
        crust: false,
        instructions: 'Special Instructions Here',
        quantity: '0'
    }

    const [pizza, setPizza ] = useState({barePizza})
    const [errors, setErrors ] = useState({})
    const [disabled, setDisabled] = useState(true)

    // Define the Yup schema for form validation
    const schema = yup.object().shape({
        name: yup.string().min(2, 'name must be at least 2 characters'),
        size: yup.string().oneOf(['large' , 'medium', 'small']),
        sauce: yup.string().required('Sauce is required'),
        toppings: yup.string().min(1,'At lest one topping is required')
    });

    useEffect(() => {
        schema.isValid(pizza).then(valid => {
           
        })
    }, [pizza])

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => {
                setErrors({ ...errors, [name]: err.errors[0] })
                
    })}

    const change = event => {
        const { checked, value, name, type } = event.target
        console.log(name)
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setPizza({ ...pizza, [name]: valueToUse })
    }

    const onCrustChange = () => {
        return (
            setPizza((prevState) => ({ ...prevState, Crust: !prevState.Crust }))        
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
                <div>{errors.name}</div>
                <label>Name:</label>
                    <input
                        name="name" 
                        type="text" 
                        id="name-input" 
                        onChange={change} 
                        value={pizza.name} 
                        placeholder="Enter Your Name" 
                        />
            </div>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Choose Your Size</h4>
                <p style={{margin: '0', color: 'red'}}>*Required</p>
            </div>
            <div>{errors.size}</div>
            <div style={innerstyle}>
                <select id= 'size-dropdown' onChange={change}>
                    <option name="size" value="">--Please Select--</option>
                    <option name="size" value="large">Large</option>
                    <option name="size" value="medium">Medium</option>
                    <option name="size" value="small">Small</option>
                </select>
            </div>
            <div style={innerstyleG}>
                <h4 style={{margin: '0'}}>Choice of Sauce</h4>
                <p style={{margin: '0', color: 'red'}}>*Required</p>
            </div>
            <div>{errors.sauce}</div>
            <section onChange={change}>
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
            <section onChange={change} style={{...innerstyle, flexDirection: 'row', }}>
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
                <section onChange={change} style={{...innerstyle, alignItems: 'flex-start'}}>
                    <label>
                        <input  id='special-text' type="textarea" value={pizza.Instructions} />
                    </label>
                </section>
                <section onChange={change} style={{...innerstyle, borderBottom: '1rem',  alignItems: 'flex-start'}}>
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

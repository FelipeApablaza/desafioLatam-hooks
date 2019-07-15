import {Link, Redirect} from 'react-router-dom'
import store from '../store/store'
import React, {useState} from 'react';


const {Consumer} = store;

const defaultForm = {
    name: '',
    race: '',
    age: '',
    weapon: '',
    state: false,
}

function Form() {
    const [form, setForm] = useState(defaultForm)

    const handleOnClick = (heroesList) => {
        heroesList.push({...form})
        
        setForm({
            ...form, state: true
        })
    }
    
    const handlerOnChange = (event) => {
        const {name, value} = event.target
        setForm({
            ...form, [name]: value
        })
    }

    if(form.state){
        return <Redirect to='/' />
    } else {

        return (
            <div>        
                <Link to={'/'}>Ir al home !!</Link>
                <form>
                        <p>Name:<input name='name' type='text' value={form.name} onChange={handlerOnChange}></input></p>
                        <p>Race:<input name='race' type='text' value={form.race} onChange={handlerOnChange}></input></p>
                        <p>Age:<input name='age' type='text' value={form.age} onChange={handlerOnChange}></input></p>
                        <p>Weapon:<input name='weapon' type='text' value={form.weapon} onChange={handlerOnChange}></input></p>
                 
                </form>
                <Consumer>
                    {
                        value =>   <p><input type='submit' onClick={() => handleOnClick(value.heroesList)}></input></p>
                    }
                </Consumer>
            </div>
            );

    }
 
    
}

export default Form;

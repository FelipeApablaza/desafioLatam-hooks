import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Form from './views/Form'
import store from './store/store'

const {Provider} = store
const characters = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
];


function App() {

  // useEffect(() => {
  //   document.title = `tengo ${count} productos`
  // })
  // variable, funcion ---- > valor por defecto
  const [heroesList] = useState(characters);

 

  return (
    <Provider value={{heroesList}}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/form' component={Form}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

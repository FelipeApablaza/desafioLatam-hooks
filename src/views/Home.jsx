import React from 'react';
import {Link} from 'react-router-dom'
import store from '../store/store'

const {Consumer} = store;

function Home() {

  return (
    <div>
        <Link to={'/form'}>Ir al formulario !!</Link>
        <table>
            <thead>
                <tr>
                    <th>Race</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Weapon</th>
                </tr>
            </thead>
            <tbody>
                <Consumer>
                    {
                        value => value.heroesList.map((item, idx) => 
                            <tr key={idx}>
                                <td>{item.name}</td>
                                <td>{item.race}</td>
                                <td>{item.age}</td>
                                <td>{item.weapon}</td>
                            </tr>
                        )
                    }
                </Consumer>
            </tbody>
        </table>
    </div>
  );
}

export default Home;

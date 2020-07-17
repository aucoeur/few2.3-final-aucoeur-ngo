import React from 'react';

import Title from '../Title/Title';
import StarWars from '../StarWars/StarWars';

import './Home.css';

function Home() {

    return(
        <div>
            <h1>FEW 2.3: Single Page Application</h1>
            <Title name='Aucoeur Ngo' />
            <StarWars />
        </div>
    )
}

export default Home;
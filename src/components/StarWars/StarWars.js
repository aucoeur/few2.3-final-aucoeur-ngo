import React, { useState } from 'react';

import Title from '../Title/Title';
import Details from '../Details/Details';

import './StarWars.css';

function StarWars() {
    const [ number, setNumber ] = useState(0);
    const [ data, setData ] = useState(null)
    const [ homeworld, setHomeworld ] = useState(null)
    const [ characters, setCharacter ] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        const url = `https://swapi.dev/api/people/${number}`

        try {
            const res = await fetch(url)
            const json = await res.json()

            await setData(json)
            
            const hw_res = await fetch(json.homeworld)
            const hw_json = await hw_res.json()

            setHomeworld(hw_json.name)
            console.log(hw_json.name)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit= {e => handleSubmit(e)}>
                <input 
                    type='text' 
                    pattern='[0-9]+'
                    placeholder='enter number'
                    value={number} 
                    onChange={(e) => setNumber(e.target.value) }/>
                <br />
                <button type='submit'>Load Character</button>

                <input 
                    type='button' 
                    value='Save Character' 
                    onClick={ () =>  setCharacter( characters => [ ...characters, data])}
                />
            </form>
            <Title name={data ? data.name : 'No character chosen'} />
            <Details data={data ? data : null } homeworld={homeworld} />

            {data ? <h1>Saved</h1> : null}
            { characters.map( (char, i) => {
                return (
                    <div>
                        <Title name={char.name} key={char.name} />
                        <Details data={data} key={char.name+i} homeworld={homeworld} />
                    </div>
                )
            }) 
            }
        </div>
    )

}

export default StarWars;
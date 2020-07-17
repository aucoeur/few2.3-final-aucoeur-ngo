import React, { useState } from 'react';

import Title from '../Title/Title'

import './StarWars.css';

function StarWars() {
    const [ number, setNumber ] = useState(0);
    const [ data, setData ] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const url = `https://swapi.dev/api/people/${number}`

        try {
            console.log({url}, {number})
            const res = await fetch(url)
            const json = await res.json()

            setData(json)
        } catch(err) {
            console.log(err)
        }
    }

    // const name = handleSubmit()

    return (
        <div>
            <form onSubmit= {e => handleSubmit(e)}>
                <input 
                    type='text' 
                    pattern='[0-9]+'
                    placeholder='enter number'
                    value={number} 
                    onChange={(e) => setNumber(e.target.value) }/>
                <button type='submit'>Search</button>
            </form>
            <Title name={data ? data.name : 'No character chosen'} />
        </div>
    )

}

export default StarWars;
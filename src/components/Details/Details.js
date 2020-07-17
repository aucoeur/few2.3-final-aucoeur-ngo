import React from 'react'

function Details(props) {

    if (!props.data) {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div className='details'>
                <ul>
                    <li>Birth Year: {props.birth_year}</li>
                    <li>Height: {props.height}</li>
                    <li>Hair Color: {props.hair_color}</li>
                    <li>Eye Color: {props.eye_color}</li>
                </ul>
            </div>
        )
    }
}
export default Details;
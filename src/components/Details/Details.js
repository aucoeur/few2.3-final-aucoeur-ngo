import React from 'react'

function Details(props) {
    // const { data.birth_year, height, hair_color, eye_color } = props
    // console.log(props)
    if (!props.data) {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div className='details'>
                <ul>
                    <li>Homeworld: {props.homeworld}</li>
                    <li>Birth Year: {props.data.birth_year}</li>
                    <li>Height: {props.data.height}</li>
                    <li>Hair Color: {props.data.hair_color}</li>
                    <li>Eye Color: {props.data.eye_color}</li>
                </ul>
            </div>
        )
    }
}
export default Details;
import React from 'react';

function Title(props) {
    const { name } = props

    return (
        <div className='Title'>
            <h2> { name }</h2>
        </div>
    )
}

export default Title;
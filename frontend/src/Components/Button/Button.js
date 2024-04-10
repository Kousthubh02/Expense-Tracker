import React from 'react'
import styled from 'styled-components'
import '../styles/Button.css'

function Button({name, icon, onClick}) {
    return (
        <button className='btn' onClick={onClick}>  
         {icon}
        {name}
        </button>
    )
}



export default Button
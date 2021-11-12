import React from 'react'
import style from './Button.module.css'

const Button = ({text, onClick, type}) => {
    return (
        <button onClick={onClick} className={`${style.btn}`} type={type}>
            {text}
        </button>
    )
}

export default Button

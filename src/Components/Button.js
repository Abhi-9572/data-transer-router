import React from 'react'
import './Button.css'

const Button = ({symbol,color}) => {
  return (
    <button className='button-wrapper' style={{backgroundColor:color}}>{symbol}</button>
  )
}

export default Button
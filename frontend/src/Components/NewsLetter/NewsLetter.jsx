import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Newsletter</h1>
      <p>Soyez avertis de nos nouveautés et de nos offres exceptionnelles !</p>
      <div>
        <input type="email" placeholder='MON ADRESSE E-MAIL' />
        <button>Je m'inscris</button>
      </div>
    </div>
  )
}

export default NewsLetter

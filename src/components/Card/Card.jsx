import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
function Card({item}) {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            {item.isNew && <span className='new'>New Season</span>}
            <img src={item.img} alt={item.title} className='mainImg'/>
            <img src={item.img2} alt={item.title} className='secondImg'/>
          </div>
          <h2>{item.title}</h2>
          <div className='prices'>
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
    </Link>
  )
}

export default Card

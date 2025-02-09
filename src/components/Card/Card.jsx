import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
function Card({item}) {

  const coreUrl ='http://localhost:1337';
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            {item.attributes.isNew && <span className='new'>New Season</span>}
            <img src={`${coreUrl}${item.attributes.img.data.attributes.url}`} alt={item.attributes.title} className='mainImg'/>
            <img src={`${coreUrl}${item.attributes.img2.data.attributes.url}`} alt={item.attributes.title} className='secondImg'/>
          </div>
          <h2>{item.attributes.title}</h2>
          <div className='prices'>
            <h3>${item.attributes.oldPrice || item.attributes.price + 20}</h3>
            <h3>${item.attributes.price}</h3>
          </div>
        </div>
    </Link>
  )
}

export default Card

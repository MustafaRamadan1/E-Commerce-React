import { DeleteOutlineOutlined } from '@mui/icons-material'
import React from 'react'
import './Cart.scss'
function Cart() {

  const products = [{
    id: 1,
    img: "https://dmfwoh5tsii9v.cloudfront.net/sites/files/hvv/1.%20Images/IMG_1363.PNG",
    img2: "https://ae01.alicdn.com/kf/H9ee5dc6fc46b4444b9abf887ccef3df39.jpg_640x640Q90.jpg_.webp",
    title: "Stylish Summer Dress",
    description: "A light and breezy summer dress perfect for warm weather. Features a flattering silhouette and vibrant colors.",
    isNew: true,
    oldPrice: 59.99,
    price: 45.99,
}, {
    id: 4,
    img: "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw97ad9359/SUW0026IDG_MODEL_FULL.jpg?sw=430&sh=538&sm=fit&q=42",
    img2: "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw9f2f3eff/hi-res/SUB0506RYL_MODEL_FRONT.jpg?sw=960&sh=1200",
    title: "Classic Men's Suit",
    description: "A timeless men's suit that exudes sophistication. Perfect for formal occasions and business settings.",
    isNew: false,
    oldPrice: 250.0,
    price: 199.99,
}]

  return (
    <div className='cart'>
      <h1>Products in Your Cart</h1>
      {
        products? products.map((product)=>{
          return <div key={product.id} className='item'>
            <img src={product.img} alt={product.title} />
            <div className="details">
              <h1>{product.title}</h1>
              <p>{product.description? product.description.slice(0,100): 'Welcome here guys'}</p>
              <div className="price">
                1 * ${product.price}
              </div>
            </div>
            <DeleteOutlineOutlined className='delete'/>
          </div>
        }) : null
      }
        <div className="total">
          <span>SUBTOTAL</span><span>123$</span>
        </div>
      
     <div className='total'>
        <span>SUBTOTAL</span> 
        <span>1123</span>
     </div> 
     <button>CheckOut</button>
     <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart

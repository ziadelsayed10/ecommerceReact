import React from 'react'
import { Col } from 'react-bootstrap'

const CategoryCard = ({color,image,title}) => {
  return (
   <>
   <Col 
   xs ="6"
   md="4"
   lg="2"
   className='my-4 d-flex justify-content-around'
   >
    <div className='all-card mb-3'>
<div className='category-card' style={{backgroundColor:`${color}`}}></div>
<img className='category-card-img' src={image}/>
<p className='category-card-text'>{title}</p>
    </div>
   
   </Col>
   </>
  )
}

export default CategoryCard
import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row } from 'react-bootstrap'

const AdminAllProduct = ({products}) => {
  return (
    <>
    <div className='sub-title my-3 '>ادارة جميع المنتجات</div>
    <Row className='justify-content-start'>
      {
        products?(products.map((item,index)=> {
          return(<AdminAllProductsCard key={index} item ={item}/>)
        })):null
      }
    
    
    </Row>
    </>
  )
}

export default AdminAllProduct
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductDetailHook from '../../hook/product/product-detail-hook'
import { useParams } from 'react-router-dom'

const ProductText = () => {
  const { id } = useParams()
  const [item,specifiecCategory,specifiecBrand,productSame] = ProductDetailHook(id)
  console.log(item)
  return (
    <div>

      <Row className='mt-4'>
        <Col className='prodDet-title' style={{fontSize:"30px",color:"black"}}>{item.title}:</Col>
      </Row>
      <Row className='mt-4'>
        <Col className='prodDet-title'>{specifiecCategory.name}:</Col>
      </Row>

      <Row>
        <Col sm="8" className='prodDet-text d-inline'>
          {item.description}
          <div className='prodDet-text-rate d-inline mx-2'>{item.ratingsAverage}</div>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <div className='prodDet-title d-inline'>الماركة:</div>
          <div className='d-inline mx-1' style={{ fontSize: "20px", color: "#4d4f50" }}>{specifiecBrand.name}</div>
        </Col>
      </Row>
      <Row>
        {
          item.availableColors ? (item.availableColors.map((color) => {
      return(<div className='circle-colors m-2' style={{ backgroundColor:  color  }}> </div>)
        })):null
   }

      </Row>
      <Row className='prodDet-title mt-4'>
        المواصفات:
      </Row>
      <Row>
        <Col md="10" className='d-inline'>
          <div className='prodDet-desc'>
            {item.description}
          </div>

        </Col>
      </Row>

      <Row >
        <Col md="12" className='my-4'>
          <div className='prodDetail-price d-inline p-3 mx-1' >{item.price} جنيه</div>
          <div className='prodDetail-addCart d-inline p-3 mx-1'>اضف للعربة</div>

        </Col>
      </Row>
    </div>
  )
}

export default ProductText
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
<>
<div className='catHeader'>
<Container>
    <Row >
        <Col className="d-flex justify-content-start flex-wrap py-2">
<div className='catHeader-text'>الكل</div>
<div className='catHeader-text'>ملابس</div>
<div className='catHeader-text'>تخفيضات</div>
<div className='catHeader-text'>تخفيضات</div>
<div className='catHeader-text'>اجهزة</div>
<div className='catHeader-text'>الكترونيات</div>
<div className='catHeader-text'>تخفيضات</div>
<div className='catHeader-text'>المزيد</div>
</Col>
    </Row>
</Container>
</div>
</>
  )
}

export default CategoryHeader
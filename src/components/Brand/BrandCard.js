import React from 'react'
import { Card, Col } from 'react-bootstrap'

const BrandCard = ({img}) => {
  return (
    <>
    <Col sm="6" md="4" lg="2">
    <Card className='my-1' style={{
        width:'100%',
        height:'151px',
        borderRadius:'8px',
        border:"none",
        
    }}>
            <Card.Img src={img} style={{
                width:'100%',
                height:"100%",
            }}/>
    </Card>
    </Col>
    </>
  )
}

export default BrandCard
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddProducts from '../../components/Admin/AdminAddProducts'

const AdminAddProductPage = () => {
  return (
    <>
     <Container>
    <Row>
      <Col sm='3' md='2'> <AdminSideBar/> </Col>
      <Col sm='9' md='10'><AdminAddProducts/></Col>
    </Row>

   </Container>
    </>
  )
}

export default AdminAddProductPage
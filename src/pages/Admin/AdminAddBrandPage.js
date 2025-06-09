import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddBrand from '../../components/Admin/AdminAddBrand'

const AdminAddBrandPage = () => {
  return (
    <>
    <Container>
    <Row>
      <Col sm='3' md='2'> <AdminSideBar/> </Col>
      <Col sm='9' md='10'><AdminAddBrand/></Col>
    </Row>

   </Container>
    </>
  )
}

export default AdminAddBrandPage
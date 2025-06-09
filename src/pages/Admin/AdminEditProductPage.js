import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminEditProduct from '../../components/Admin/AdminEditProduct'

const AdminEditProductPage = () => {
  return (
    <>
     <Container>
    <Row>
      <Col sm='3' md='2'> <AdminSideBar/> </Col>
      <Col sm='9' md='10'><AdminEditProduct/></Col>
    </Row>

   </Container>
    </>
  )
}

export default AdminEditProductPage
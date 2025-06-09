import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllOrders from '../../components/Admin/AdminAllOrders'

const AdminAllOrderspage = () => {
  return (
    <>
    <Container>
    <Row>
      <Col xs='3' sm='3' md='2'> <AdminSideBar/> </Col>
      <Col xs='9' sm='9' md='10'><AdminAllOrders/></Col>
    </Row>

   </Container>
    </>
  )
}

export default AdminAllOrderspage
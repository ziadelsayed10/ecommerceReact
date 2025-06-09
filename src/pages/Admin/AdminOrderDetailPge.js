import React from 'react'
import AdminOrderDetail from '../../components/Admin/AdminOrderDetail'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import { Col, Container, Row } from 'react-bootstrap'

const AdminOrderDetailPge = () => {
  return (
   <>
   <Container>
    <Row>
      <Col xs='3' sm='3' md='2' >
      <AdminSideBar/>
      </Col>
        <Col xs='9' sm='9' md='10'>
        <AdminOrderDetail/>
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default AdminOrderDetailPge
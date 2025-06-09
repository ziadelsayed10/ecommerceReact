import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddCategory from '../../components/Admin/AdminAddCategory'

const AdminAddCategoryPage = () => {
  return (
    <>
    <Container>
    <Row>
      <Col sm='3' md='2'> <AdminSideBar/> </Col>
      <Col sm='9' md='10'>
      <AdminAddCategory/>
      </Col>
    </Row>

   </Container>
    </>
  )
}

export default AdminAddCategoryPage
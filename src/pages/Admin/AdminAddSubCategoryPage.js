import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddSubCategory from '../../components/Admin/AdminAddSubCategory'

const AdminAddSubCategoryPage = () => {
  return (
    <>
    <Container>
    <Row>
      <Col sm='3' md='2'> <AdminSideBar/> </Col>
      <Col sm='9' md='10'><AdminAddSubCategory/></Col>
    </Row>

   </Container>
    </>
  )
}

export default AdminAddSubCategoryPage
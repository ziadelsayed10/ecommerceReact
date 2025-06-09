import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllProduct from '../../components/Admin/AdminAllProduct'
import Pagination from '../../components/utility/Pagination'
import AdminAllProductHook from '../../hook/admin/admin-all-product-hook'

const AdminAllProductsPage = () => {
  const [items,PaginationCount,onPress] = AdminAllProductHook()
  console.log(PaginationCount)
  return (
    <>
      <Container>
        <Row className='py-3'>
          <Col xs='3' sm='3' md='2'>
            <AdminSideBar />
          </Col>
          <Col xs='9'  sm='9' md='10'>
            <AdminAllProduct products ={items} />
           
           
          </Col>
        </Row>
        <Col  xs='9' sm='9' md='10' className='mx-auto '>
        {
          PaginationCount > 1 ? <Pagination pageCount={PaginationCount} getPage={onPress} />:null
        }
          </Col>

      </Container>
    </>
  )
}

export default AdminAllProductsPage
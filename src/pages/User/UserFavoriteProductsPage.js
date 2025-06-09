import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import AdminSideBar from '../../components/Admin/AdminSideBar'
// import AdminAllProducts from '../../components/Admin/AdminAllProducts'
// import Pagination from '../../components/Uitily/Pagination'
// import AdminOrderDetalis from '../../components/Admin/AdminOrderDetalis'
// import AdminAddBrand from '../../components/Admin/AdminAddBrand'
import UserSideBar from '../../components/User/UserSideBar'
// import UserAllOrder from '../../components/User/UserAllOrder'
import UserFavoriteProduct from '../../components/User/UserFavoriteProduct'
const UserFavoriteProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <UserFavoriteProduct />
                </Col>
            </Row>
        </Container>
    )
}

export default UserFavoriteProductsPage

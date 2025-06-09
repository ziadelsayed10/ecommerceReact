import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Pagination from '../../components/Uitily/Pagination'
import UserSideBar from '../../components/User/UserSideBar'
// import UserAddAddress from '../../components/User/UserAddAddress';
import UserProfile from '../../components/User/UserProfile';
const UserProfilePage = () => {
    return (
        <Container style={{height:"500px"}} >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserProfile />
                </Col>
            </Row>
        </Container>
    )
}
export default UserProfilePage

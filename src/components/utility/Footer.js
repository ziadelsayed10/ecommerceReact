import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
const Footer = () => {
  return (
    <>
      <Container className="mt-3 pt-2" style={{ maxHeight: "50px" }}>
        <Row className='d-flex justify-content-between' style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#ffffff",
          color: "gray",
        }}>
          <Col sm='6' className='d-flex  align-items-center'>
            <div className='p-2 footer-text'>اتصال</div>
            <div className='p-2 footer-text'>السياسة والخصوصية</div>
            <div className='p-2 footer-text'>الشروط</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center ">
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className="footer-phone">0122455346356</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
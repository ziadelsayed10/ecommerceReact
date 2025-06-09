import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import AddRateHook from '../../hook/review/add-rate-hook';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RatePost = () => {
  const {id} = useParams()
  const [rateText,rateValue,onChangeRateText,onChangeRateValue,user,onSubmit] = AddRateHook(id)
    const setting = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "#ffc107",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          onChangeRateValue(newValue)
          // console.log(`Example 2: new value is ${newValue}`);
        }
      };
      // console.log(user)
  return (
   <>
  <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex">
            <div className="rate-name  d-inline ms-3 mt-1 ">{user.name}</div>
            <ReactStars {...setting} />
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            <textarea
            value={rateText}
            onChange={onChangeRateText}
              className="input-form-area p-2 mt-3"
              rows="3"
              cols="20"
              placeholder="اكتب تعليقك...."
            />
            <div className=" d-flex justify-content-end al">
              <div onClick={onSubmit} className="product-cart-add px-3  py-2 text-center d-inline">اضف تعليق</div>
            </div>
          </Col>
          <ToastContainer/>
        </Row>
   </>
  )
}

export default RatePost
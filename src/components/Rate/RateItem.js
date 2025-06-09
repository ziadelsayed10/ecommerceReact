import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteicon from '../../images/delete.png'
import editicon from '../../images/edit.png'
import DeletRateHook from '../../hook/review/delete-rate-hook'
import EditRateHook from '../../hook/review/edit-rate-hook'
import ReactStars from "react-rating-stars-component";

const RateItem = ({review}) => {
    console.log(review)
const [isUser,show,handleClose,handleDelete,handleShow] = DeletRateHook(review)
const [editShow,handleEditClose,handleEdit,handleEditShow,newRateText,newRateValue,
  onChangeRateText,onChangeRateValue] = EditRateHook(review)





  const setting = {
    size: 20,
    count: 5,
    color: "black",
    activeColor: "#ffc107",
    value: newRateValue,
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
    return (
<>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>حذف المنتج </Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من عملية حذف التقييم</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>


        <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>تعديل المنتج </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReactStars {...setting} />
          <input type='text' className='w-100' value={newRateText} onChange={onChangeRateText}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>


        <div>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">{review.user.name}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx align-items-center me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                    {review.review}
                    </div>
                   {isUser === true ?( <div  className='d-inline d-flex justify-content-end'>
                    <img onClick={handleShow} src={deleteicon} style={{width:"16px",height:"16px",cursor:"pointer"}}/>
                    <img onClick={handleEditShow} src={editicon} style={{width:"16px",height:"16px",cursor:"pointer"}}/>
                    </div>) : null}
                </Col>
            </Row>
        </div>
        </>
    )
}

export default RateItem

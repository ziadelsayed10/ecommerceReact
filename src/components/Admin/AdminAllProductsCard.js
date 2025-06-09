import React from 'react'
import { Button, Card, CardImg, Col, Modal, Row } from 'react-bootstrap'
import prod1 from '../../images/prod1.png'
import { Link } from 'react-router-dom'
import AdminAllProductHook from '../../hook/admin/admin-all-product-hook'
import { ToastContainer} from 'react-toastify';
const AdminAllProductsCard = ({item}) => {
   const [items,PaginationCount,onPress,show,handleClose,handleShow,handleDelete] = AdminAllProductHook(item)
  return (
    <>
    <Col  xs='12' sm='6' lg='4' >


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>حذف المنتج </Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من عملية الحذف</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>


    <Card style={{width:'100%', height:'350px',borderRadius:'8px',backgroundColor:'white', border:'none'}}>
        <Row >
           <Col sm='12' className='d-flex flex-row justify-content-between'>
           <div onClick={handleShow} className='adminCard-subtitle m-1'>ازالة</div>
           <Link to={`/admin/editProduct/${item._id}`} style={{textDecoration:'none'}}>
           <div className='adminCard-subtitle m-1'>تعديل</div>
           </Link>
           </Col>
        </Row>
       <Link to={`/products/${item._id}`} style={{textDecoration:'none'}}>
       <CardImg src={item.imageCover} style={{width:'100%', height:'220px'}}/>
       <Card.Title className='prod-cardTitle mx-2'>
          {item.title}
       </Card.Title>
       <Card.Body>
        <div className='d-flex justify-content-between'>
        <div className='prod-cardRate-number'>4.5</div>
        <div className='d-flex align-items-center '>
            <div className='d-inline' style={{color:'gray'}}>{item.price}</div>
            <div className='d-inline mx-1' style={{color:'gray'}}>جنيه</div>
        </div>
        </div>
       </Card.Body>
       </Link>
    </Card>
    <ToastContainer/>
    </Col>
    </>
  )
}

export default AdminAllProductsCard
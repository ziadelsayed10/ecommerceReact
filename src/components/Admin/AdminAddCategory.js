import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'

import { ToastContainer} from 'react-toastify';
import AddCategoryHook from '../../hook/category/add-category-hook';
const AdminAddCategory = () => {
  
  const [image,name,loading,ispress,onNameChange,onImageChange,handleSubmit]= AddCategoryHook()

  return (
    <>
      <Row className='d-flex justify-content-start'>

        <div className='addBrand-title my-3'>اضف تصنيف جديده</div>
        <Col sm='8'>
          <div className='my-3' style={{ fontSize: '22px' }}> صورة التصنيف</div>
          <div>
            <label for='upload-photo'>
              <img src={image} style={{ width: '120px', height: '100px', cursor: 'pointer' }} />
            </label>
            <input
              id='upload-photo'
              name='photo'
              type='file'
              onChange={onImageChange}
            />
          </div>
          <input onChange={onNameChange} value={name} type='text' placeholder='اسم التصنيف' className='addBrand-inp d-block px-3' />
        </Col>
        <Row>
          <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="addBrand-save d-inline mt-4 ">حفظ التعديلات</button>
          </Col>
        </Row>
        {ispress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null}
      </Row>
      <ToastContainer/>
    </>
  )
}



export default AdminAddCategory
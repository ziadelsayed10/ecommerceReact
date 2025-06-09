import React from 'react'
import { Col, Row, Spinner} from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import AddBrandhook from '../../hook/brand/add-brand-hook'
import { ToastContainer } from 'react-toastify'
const AdminAddBrand = () => {
    const [name,image,onImageChange,onNameChange,handleSubmit,loading,isPress]= AddBrandhook()
    return (
        <>
            <Row className='d-flex justify-content-start'>

                <div className='addBrand-title my-3'>اضف ماركه جديده</div>
                <Col sm='8'>
                        <div> صورة الماركة</div>
                        <div>
                            <label for = "upload-photo">
                                <img src={image} style={{width:'120px', height:'100px',cursor:"pointer" }}/>
                            </label>
                            <input type='file' name='photo' onChange={onImageChange} id='upload-photo'/>
                        </div>
                        <input value={name} onChange={onNameChange} placeholder='اسم الماركة' className='addBrand-inp d-block px-3'/>
                </Col>
                <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="addBrand-save d-inline mt-4 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null}
            </Row>
            <ToastContainer/>

        </>
    )
}

export default AdminAddBrand
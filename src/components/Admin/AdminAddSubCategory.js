import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddSubCategoryHook from '../../hook/category/add-sub-category-hook'
import { ToastContainer } from 'react-toastify'

const AdminAddSubCategory = () => {
    const [category,handleChange,name,id,handleSubmit,changeName] = AddSubCategoryHook()
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
            <input
                type="text"
                value={name}
                onChange={changeName}
                className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف الفرعي"
            />
            <select onChange={handleChange} name="languages" id="lang" className="select mt-3 px-2 ">
                <option value="0"> اختر تصنيف رئيسي</option>
                        {
                            category.data?(
                                category.data.map(item => {
                                    return(  <option value={item._id}>{item.name}</option> )
                                })
                            ):null
                        }                
            </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
<ToastContainer/>
</div>
  )
}

export default AdminAddSubCategory
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/CategoryAction'
import notify from '../useNotifcations'
import { createSubCategory } from '../../redux/actions/subCategoryActions'

const AddSubCategoryHook = () => {
    const [name, setName] = useState("")
    const [id, setId] = useState('0')
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategory())
        console.log(category)
    }, [])
    
    const category = useSelector(state => state.allCategory.category)
    const subCategory = useSelector(state => state.subCategory.subCategory)

    if (category)
        console.log(category)

    const handleChange = (e) => {
        setId(e.target.value)
    }
    console.log(id)

    const changeName = (e) => {
        setName(e.target.value)
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!navigator.onLine) {
            notify("يوجد مشكلة في الاتصال بالنترنت","warn")
        }
        if (id === "0") {
            notify("من فضلك اخنر تصميف رئيسي", "warn")
            return;
        }
        if (name === "") {
            notify("من فضلك ادخل الاسم", "warn")
            return;
        }
        setLoading(true)
         await dispatch(createSubCategory(
            {
                name,
                category: id
            }
        ))
        setLoading(false)
    }

   
    useEffect(() => {
     if (loading === false) {
        setName("")
        setId("0")
        if (subCategory) {
        if (subCategory.status === 201) {
            notify("تمت الاضافة بنجاح","success")
        }} else{
            notify("هناك مشكلة في عملية الاضافة","warn")
            dispatch(getAllCategory())
        }
        setLoading(true)
     }
     if(subCategory)
        console.log(subCategory)
    }, [loading])
    

    return [category, handleChange, name, id, handleSubmit, changeName]
}


export default AddSubCategoryHook
import React, { useEffect, useState } from 'react'
import avatar from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../redux/actions/CategoryAction';
import notify from '../../hook/useNotifcations';


const AddCategoryHook = () => {
  
    const [image, setImage] = useState(avatar);
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ispress, setIspress] = useState(false)
  const dispatch = useDispatch();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
      setSelectedFile(e.target.files[0])
    }
  }
  const onNameChange = (e) => {
    e.persist()
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    if(name === '' || selectedFile === null){
      notify("من فضلك اكمل البيانات","warn");
      return;
    }
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIspress(true);
    await dispatch(createCategory(formData))
    setLoading(false)
  }
const res = useSelector(state => state.allCategory.category)
  useEffect(() => {
    if (loading === false) {
      setImage(avatar);
      setName('');
      setSelectedFile(null);
      setLoading(true);
      setIspress(false)

      if(res.status === 201){
        notify("تمت الاضافة بنجاح", "success")
      } else{
        notify("هناك مشكلة في عملية الاضافة","error")
      }
    }
  }, [loading])
  return [image,name,loading,ispress,onNameChange,onImageChange,handleSubmit]
}


export default AddCategoryHook

import { Row, Col } from 'react-bootstrap'
import avatar from '../../images/avatar.png'

import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import React, { useEffect, useState } from 'react';
import { CompactPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../hook/useNotifcations';
import { getAllCategory } from '../../redux/actions/CategoryAction';
import { getAllBrand } from '../../redux/actions/BrandActions';
import { createProduct, getOneProduct, updateProduct } from '../../redux/actions/ProductAction';
import { getSpecifiedSubCategory } from '../../redux/actions/subCategoryActions';
import ImageUploading from "react-images-uploading";
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
const AdminEditProduct = () => {
const {id} = useParams()
    const [image, setImage] = useState(avatar);
    const [prodName, setProdName] = useState('')
    const [prodDesc, setProdDesc] = useState('')
    const [priceBef, setPriceBef] = useState('السعر قبل الخصم')
    const [priceAft, setPriceAft] = useState(' السعر بعد الخصم')
    const [prodQuan, setProdQuan] = useState('الكميةالمتاحة ')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState([])
    const [brand, setBrand] = useState('')
    const [colors, setColors] = useState([])
    const [showCounter, setShowCounter] = useState(false)
    const [loading, setLoading] = useState(true)
    const [selectedSubCategory, setSelectedSubCategory] = useState([])
    const [options, setOptions] = useState([])
    const [images, setImages] = useState([]);


    const dispatch = useDispatch()

   
    useEffect(() => {
        const get = async () => {
            await dispatch(getOneProduct(id))
            await dispatch(getAllCategory())
            await dispatch(getAllBrand())

        }
        get()
    }, [])

    const selectedProduct = useSelector(state => state.allProduct.oneProduct)
console.log(selectedProduct)

useEffect(() => {
    if (selectedProduct) {
        if (selectedProduct.data) {
            setProdName(selectedProduct.data.title)
            setProdDesc(selectedProduct.data.description)
            setProdQuan(selectedProduct.data.quantity)
            setPriceBef(selectedProduct.data.price)
            setCategory(selectedProduct.data.category)
            setSubCategory(selectedProduct.data.subcategory)
            setBrand(selectedProduct.data.brand)
            setColors(selectedProduct.data.availableColors)
        
        
            if (selectedProduct.data.images) {
                // تحويل الصور إلى صيغة data_url المطلوبة
                const formattedImages = selectedProduct.data.images.map((image) => ({
                  data_url: image, // في حالة أن الصور هي روابط مباشرة
                }));
                setImages(formattedImages);
              }
            
            
        
        }
    }
  
}, [selectedProduct])


    const categorySelector = useSelector(state => state.allCategory.allCategory)
    let mainCategory = [];
    if (categorySelector){
        mainCategory = categorySelector.data;
    }else mainCategory = [];
    






    const brandSelector = useSelector(state => state.allBrand.allBrand)
    let mainBrand = []
    if (brandSelector)
        mainBrand = brandSelector.data
    else mainBrand = []



    const getSpecifiedSubCat = useSelector(state => state.subCategory.getSpecifiedSubCat)
    useEffect(() => {
        if (category != 0){
            const run = async () => {
              
                    await dispatch(getSpecifiedSubCategory(category))
                
            }
            run()
        }
    }, [category])

    useEffect(() => {
      if (getSpecifiedSubCat) {
        console.log(getSpecifiedSubCat)
        if (getSpecifiedSubCat.data) {
            
            setOptions(getSpecifiedSubCat.data)
        }
      }
    }, [getSpecifiedSubCat])
    



    const onChangeName = (e) => {
        setProdName(e.target.value)
    }
    const onChangeDesc = (e) => {
        setProdDesc(e.target.value)
    }
    const onChangePriceBef = (e) => {
        setPriceBef(e.target.value)
    }
    const onChangePriceAft = (e) => {
        setPriceAft(e.target.value)
    }
    const onChangeProdQuan = (e) => {
        setProdQuan(e.target.value)
    }
    const onChangeCategory = async (e) => {
       
        setCategory(e.target.value)
    }
    const onChangeSubCategory = (e) => {
        setSubCategory(e.target.value)
    }


    const onChangeBrand = (e) => {
        setBrand(e.target.value)
    }
    const onChangeColors = (e) => {
        setColors(e.target.value)
    }
    const showPick = (e) => {
        setShowCounter(!showCounter)
    }

    const handleColorChange = (color) => {
        setColors([...colors, color.hex])
        setShowCounter(!showCounter)

    }

    const removeColor = (item) => {
        setColors(colors.filter((e) => e !== item))
    }



    const onSelect = (selectedList) => {
        setSelectedSubCategory(selectedList)
    }
    const onRemove = (selectedList) => {
        setSelectedSubCategory(selectedList)
    }

    // const onImageChange = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setImage(URL.createObjectURL(e.target.files[0]))
    //         setFiles(e.target.files)
    //     }
    // }


    const onChange =  (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
      };
const maxNumber = 5 ;    

    // const App = () => (<Uploady
    //     multiple
    //     grouped
    //     maxGroupSize={2}
    //     method="PUT"
    //     destination={{url: "https://my-server", headers: {"x-custom": "123"}}}>
    
        
    // </Uploady>)

    // function dataURLtoFile(dataurl, filename) {
    //     var arr = dataurl.split(','),
    //         mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[arr.length - 1]), 
    //         n = bstr.length, 
    //         u8arr = new Uint8Array(n);
    //     while(n--){
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     return new File([u8arr], filename, {type:mime});
    // }



    // function dataURLtoFile(dataurl, filename) {
    //     if (!dataurl || typeof dataurl !== 'string') {
    //         console.error("صيغة dataurl غير صحيحة. يجب أن يكون نصاً، لكن النوع الحالي هو:", dataurl);
    //         return null;
    //     }

    //     var arr = dataurl.split(','),
    //         mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[arr.length - 1]),
    //         n = bstr.length,
    //         u8arr = new Uint8Array(n);

    //     while (n--) {
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     return new File([u8arr], filename, { type: mime });
    // }



    function dataURLtoFile(dataurl, filename) {
        if (!dataurl || typeof dataurl !== 'string') {
            console.error("صيغة dataurl غير صحيحة. يجب أن يكون نصاً، لكن النوع الحالي هو:", dataurl);
            return null;
        }

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }


    async function getFileFromUrl(url, name, defaultType = 'image/jpeg'){
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], name, {
          type: data.type || defaultType,
        });
      }
      
    //   `await` can only be used in an async body, but showing it here for simplicity.
      
      
      console.log(image)
      console.log(images)
      console.log(images[0])
      
      const handleSubmit = async (e) => {
        var imgCover ;
          console.log(images[0])
          if (images[0].length > 1000) {
               imgCover = dataURLtoFile(images[0].data_url, Math.random() + '.png');
            } else {
                imgCover = await getFileFromUrl(images[0].data_url, Math.random() + '.png');
                
                //var imgCover = URLtoFile(images[0].data_url, Math.random() + '.png');
}
//         var itemImages ;
//           console.log(images[0])
//           if (images[0].length > 1000) {
//             itemImages = Array.from({ length: Object.keys(images).length }).map((_, index) => {
//                 return dataURLtoFile(images[index].data_url, Math.random() + '.png');
//          });   
//                  } else {
//                 itemImages = Array.from({ length: Object.keys(images).length }).map((_, index) => {
//                 return getFileFromUrl(images[index].data_url, Math.random() + '.png');
//                 });                // var imgCover = URLtoFile(images[0].data_url, Math.random() + '.png');
// }

let itemImages = [];

// التكرار على جميع المفاتيح داخل كائن images
    for (const key of Object.keys(images)) {
        const image = images[key]; // الحصول على الصورة باستخدام المفتاح

        if (image.data_url && image.data_url.startsWith("http")) {
            // إذا كانت data_url رابط (URL)
            try {
                const file = await getFileFromUrl(image.data_url, Math.random() + ".png");
                itemImages.push(file); // إضافة الصورة بعد التحويل إلى قائمة الصور
            } catch (error) {
                console.error("Error processing image:", error);
            }
        } else if (image.data_url && image.data_url.startsWith("data:image/")) {
            // إذا كانت data_url تحتوي على بيانات Base64
            const file = dataURLtoFile(image.data_url, Math.random() + ".png");
            if (file) {
                itemImages.push(file); // إضافة الصورة بعد تحويلها إلى ملف
            } else {
                console.error("Failed to convert Base64 to File:", image.data_url);
            }
        } else {
            console.error("Invalid image data:", image);
        }
    }


// طباعة العناصر الناتجة للتحقق
console.log("Item Images:", itemImages);


//         if (itemImages[index].length <= 1000) {
//             itemImages = Array.from({ length: Object.keys(images).length }).map((_, index) => {
//                 return getFileFromUrl(images[index].data_url, Math.random() + '.png');
// })
//         } else {
//             itemImages = Array.from({ length: Object.keys(images).length }).map((_, index) => {
//                                  return dataURLtoFile(images[index].data_url, Math.random() + '.png');
//             })
//         }







console.log(image)
console.log(images)
console.log(images[0])


        

        // const itemImages = Array.from({ length: Object.keys(images).length }).map((_, index) => {
        //     return dataURLtoFile(images[index].data_url, Math.random() + '.png');
        // });
        


        if (prodName === '' || prodDesc === '' || prodQuan === null || priceBef === null || images.length <= 0  ) {
            notify("من فضلك اكمل البيانات", "warn");
            return;
        }
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDesc);
        formData.append("quantity", prodQuan);
        formData.append("price", priceBef);
        formData.append("priceAft", priceAft);
        formData.append("imageCover", imgCover);
        formData.append("category", category);
        formData.append("brand", brand);

        itemImages.map((item) => formData.append("images", item))
        colors.map((color) => formData.append("availableColors", color))
        selectedSubCategory.map((item) => formData.append("subcategory", item._id))
       setLoading(true);
        await dispatch(updateProduct(id,formData))
        setLoading(false)
        console.log(prodName)
        console.log(prodDesc)
        console.log(prodQuan)
        console.log(priceBef)
        console.log(priceAft)
        console.log(imgCover)
        console.log(category)
        console.log(brand)
        console.log(itemImages)
        console.log(colors)
        console.log(selectedSubCategory)
    }

    const product = useSelector(state => state.allProduct.updateProduct)
    useEffect(() => {
        if(loading === false){
            setProdName('')
            setProdDesc('')
            setPriceBef('السعر قبل الخصم')
            setPriceAft(' السعر بعد الخصم')
            setProdQuan('الكميةالمتاحة ')
            setCategory("0")
            setBrand("0")
            setSelectedSubCategory([])
            setColors([])
            setImages([])
            
            
            if (product) {
                // console.log(product)
                if (product.status === 200) {
                    notify("تمت الاضافة بنجاح","success")
                } else {
                    notify("هناك مشكلة في الاضافة","erorr")   
                }
            } 
        }
    }, [loading])







    return (
        <>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>

                    {/* <div>
                        <label for='upload-photo'>
                            <img src={image} style={{ width: '120px', height: '100px', cursor: 'pointer' }} />
                        </label>
                        <input
                            id='upload-photo'
                            name='photo'
                            type='file'
                            onChange={onImageChange}
                        />
                    </div> */}

<ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
         {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    




                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                        onChange={onChangeName}
                        value={prodName}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        onChange={onChangeDesc}
                        value={prodDesc}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        onChange={onChangeProdQuan}
                        value={prodQuan}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        onChange={onChangePriceBef}
                        value={priceBef}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                        onChange={onChangePriceAft}
                        value={priceAft}
                    />




                    <select
                    value={category}
                        onChange={onChangeCategory}
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">اختر تصنيف رئيسي</option>



                        {
                            mainCategory?.length > 0 ? (
                                mainCategory.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))
                            ) : null}
                    </select>



                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                    value={brand}
                        onChange={onChangeBrand}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">اختر ماركة</option>
                        {

                            mainBrand?.length > 0 ? (
                                mainBrand.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))
                            ) : null}

                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (colors.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => removeColor(item)}
                                        className="color ms-2 border  mt-1"
                                        style={{ backgroundColor: item }}></div>
                                )
                            })) : null
                        }

                        <img onClick={showPick} src={add} alt="" width="30px" height="35px" style={{ cursor: "pointer" }} className="" />
                        {
                            showCounter === true ? (<CompactPicker onChangeComplete={handleColorChange} />) : null
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer/>
        </>
    )
}

export default AdminEditProduct





















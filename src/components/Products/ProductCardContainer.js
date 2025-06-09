import React, { useEffect, useState } from 'react'
import SubTitles from '../utility/SubTitles'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWishList } from '../../redux/actions/WishListAction'

const ProductCardContainer = ({subTitle,pathText,btnTitle,allProduct}) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const res = useSelector(state => (state.AddToWishListReducer.userAllWishList)) 
  // اخر حاجة عملناها 
  useEffect(() => {

    const allUserWish = async() => {
        
        setLoading(true)
        await dispatch(getProductWishList())
        setLoading(false)
    
    }
    allUserWish()
  }, [])

  useEffect(() => {
   if (loading === false) {
    if (res.data) {
      console.log(res.data)
    }
   } else {
    
   }
  }, [loading])
  
  ////////////
  return (
    <>
    <Container>
    <SubTitles subTitle={subTitle} pathText={pathText} btnTitle={btnTitle}/>
    <Row className='my-2 d-flex justify-content-between' >
      {
        allProduct?(allProduct.map((item,index) => {
          return(
            <ProductCard key={item._id} item={item}/>

          )
        })) :null
      }
   
    </Row>
    </Container>
    </>
  )
}

export default ProductCardContainer
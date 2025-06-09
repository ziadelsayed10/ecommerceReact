import React from 'react'
import SubTitles from '../utility/SubTitles'
import BrandCard from './BrandCard'
import { Container, Row } from 'react-bootstrap'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import BrandCardContainerHook from '../../hook/brand/brand-card-container-hook';
const BrandCardContainer = ({subTitle,pathText,btnTitle}) => {
  const [brand,loading] = BrandCardContainerHook()
  // console.log(brand)
  return (
    <>
    <Container className='my-1'>
    <SubTitles subTitle={subTitle} pathText={pathText} btnTitle={btnTitle}/>
    <Row className='my-1 d-flex justify-content-between'>
    
    {
      loading === false ? 
      brand?
        brand.data?(brand.data.slice(0,6).map((item,index) =>{
          return(
          <BrandCard img={item.image} />)
        })):<h4> لا يوجد ماركات</h4>
        :null
      : <h4> spinner  </h4>
    }
    
    </Row>
    </Container>
    </>
  )
}

export default BrandCardContainer
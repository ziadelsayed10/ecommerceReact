import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'

const AllBrands = ({brand,loading}) => {
    return (
        <>
            <Container>
                <div className='my-2 allBrand-Title'>كل الماركات</div>
                <Row className="d-flex justify-content-between">
                    {
                        loading === false ? brand.data?(
                            brand.data.map((item,index)=>{
                                return(
                                <BrandCard key={index} img={item.image} />)
                            })
                        ):<h4>لا توجد ماركات</h4>:<h4>spinner</h4>
                    }
                    
                </Row>
            </Container>
        </>
    )
}

export default AllBrands
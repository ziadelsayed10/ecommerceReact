import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
const CategoryContainre = ({loading,data}) => {
  const colors = ["#c9d5ff","#ffe6f1","#a4e1eb","#F4DBA4","#f9c3f0","#fbd6c3"]

  return (
<Container>

    <div className='catContainer-title my-3'>كل التصنيفات</div>
    <Row className="d-flex justify-content-between my-2">
      
         {
          loading === false ?
           data ?
            data.slice(0,6).map((item,index) => {
              return(<CategoryCard key={index} title={item.name} image={item.image}  color={colors[Math.floor(Math.random()*5+1)]} />)
            })
          :"لا يوجد تصنيفات"
          :"spinner"
        }
      

    </Row>
</Container>
)
}

export default CategoryContainre
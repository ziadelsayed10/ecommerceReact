import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import rate from "../../images/rate.png";
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWishList, removeProductFromWishList } from '../../redux/actions/WishListAction';
import { ToastContainer } from 'react-toastify';
import notify from '../../hook/useNotifcations';


const ProductCard = ({item}) => {

    const [isFav, setIsFav] = useState(false)
    const [favImg, setFavImg] = useState(favoff)
const dispatch = useDispatch()
    const favHandler = () => {
        setIsFav(!isFav)
        console.log(isFav)
    }

    useEffect(() => {
    //   isFav ?  setFavImg(favon) : setFavImg(favoff)
    if (isFav === false) {
        removeFromWishListData()
            // setFavImg(favoff)

    } else {
        addToWishListData()
    }
    
}, [isFav])
const addres = useSelector(state => (state.AddToWishListReducer.addToWishList))
const removeres = useSelector(state => (state.AddToWishListReducer.removeFromWishList))

const addToWishListData = async () => {
    await dispatch(addProductToWishList(
        {
            productId: item._id
        }
    ))
    if (addres && addres.status === 200) {
                notify("تمت اضافة المنتج الي المفضلة", "success")

    }
    setFavImg(favon)
}

const removeFromWishListData = async () => {
    await dispatch(removeProductFromWishList(item._id))
    if (removeres && removeres.status === 200) {
                notify("تمت حذف المنتج من المفضلة", "warn")

    }
    setFavImg(favoff)
}




    return (
        <>
            <Col sm='6' md='4' lg='3'>
                <Card style={{
                    width: '100%',
                    height: "345px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)"
                }}>
                    <Link to={`/products/${item._id}`}>
                    <Card.Img variant="top" src={item.imageCover} style={{
                        width: "100%",
                        height: "228px",
                    }} />
                    </Link>
                    <div className='d-flex justify-content-end mx-2'>
                        <img 
                        src={favImg}
                        onClick={favHandler}
                         style={{
                            width: "24px",
                            height: "24px"
                        }} />
                    </div>
                    <Card.Body>

                        <Card.Title >
                            <div className='prod-cardTitle'>{item.title}</div>
                        </Card.Title>

                        <Card.Text>
                            <div className='d-flex justify-content-between '>
                                <div className='d-flex '>
                                    <div>
                                        <img className='prod-cardRate ' src={rate} />
                                    </div>
                                    <div className='prod-cardRate-number  mx-2'>
                                    {item.ratingsAverage?(item.ratingsAverage):0}
                                    </div>
                                </div>
                           
                            <div className='d-flex'>
                                <div className='prod-cardPrice mx-1' >
                                    {item.price}
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    جنيه
                                </div>
                            </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                      <ToastContainer/>
            
            </Col>
        </>
    )
}

export default ProductCard















{/* <Col xs='6' md='4' lg='3' className='d-flex'>
<Card className='my-3' style={{ 
    width: '100%',
    height:'345px',
    borderRadius:'8px',
    border:"none",
    boxShadow:"0 8px 8px 0 rgba(151,151,151,.5)"
 }}>
 <Link to="/products/:id" style={{ textDecoration: 'none' }}>
                <Card.Img style={{ height: "228px",width:'100%' }} src={prod1} />
            </Link>
            <div className="d-flex justify-content-end mx-2">
                <img
                    src={favoff}
                    alt=""
                    className="text-center"
                    style={{
                        height: "24px",
                        width: "26px",
                    }}
                />
            </div>
  <Card.Body>
  <Card.Title>
                    <div className="card-title">
                        سود كربون ساعة يد ذكية بيب إس أسود كربون{" "}
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between ">
                        <div className="d-flex">
                            <img
                                className=""
                                src={rate}
                                alt=""
                                height="16px"
                                width="16px"
                            />
                            <div className="card-rate mx-2">4.5</div>
                        </div>
                        <div className="d-flex">
                            <div className="card-price">880</div>
                            <div className="card-currency mx-1">جنيه</div>
                        </div>
                    </div>
                </Card.Text>
    
  </Card.Body>
</Card>
</Col> */}
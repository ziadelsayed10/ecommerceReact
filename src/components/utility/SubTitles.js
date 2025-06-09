import React from 'react'
import { Link } from 'react-router-dom'

const SubTitles = ({ subTitle, pathText, btnTitle }) => {
    return (
        <>

            <div className='d-flex justify-content-between mt-4'>
                <div className='sub-title'>{subTitle}</div>
                {btnTitle ? (
                    <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
                        <div className='shopping-now'>{btnTitle}</div>
                    </Link>
                ) : null}
            </div>

        </>
    )
}

export default SubTitles
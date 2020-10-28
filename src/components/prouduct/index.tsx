import React from 'react'
import { ProductItem } from '../../store/state'
import { add, store } from '../../store/index'
import { useSelector } from 'react-redux'
import './index.css'
import { Link } from 'react-router-dom'

export default function ProductDis() {

    const products = useSelector((state: ProductItem[]) => state)

    // mapping data 
    const product = products.map((product, i) => {
        return (
            <div key={i} >
                <div className="productContainer">
                    <Link className="link" to='#' >
                        <h4>{product.name}</h4>
                        <img src={product.src} height={150} alt="shoe" />
                        <button className="button" disabled={product.added} onClick={() => store.dispatch(add(product))}>Add To Cart</button>
                    </Link>
                </div>
                <div >
                </div>
            </div>
        )
    })

    return (
        <div className='dis-pro container'>
            {product}
        </div>
    )
}
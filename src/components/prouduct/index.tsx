import React from 'react'
import { ProductItem } from '../../store/state'
import { add, store } from '../../store/index'
import { useSelector } from 'react-redux'
import './index.css'
import { url } from 'inspector'
import { Link } from 'react-router-dom'

export default function ProductDis() {

    const products = useSelector((state: ProductItem[]) => state)

    // mapping data 
    const product = products.map((product, i) => {
        return (
            <div key={i} >
                {/* <main className="page-content">
                    <div className="card" style={{ backgroundImage: `url(${product.src})` }}>
                        <div className="content">
                            <h2 className="title">{product.name}</h2>
                            <p className="copy">${product.price}</p>
                            <button className="btn" disabled={product.added} onClick={() => store.dispatch(add(product))}>Add To Cart</button>
                        </div>
                    </div>
                </main> */}
                <div >
                    {/* <div className='Prouductcard'>
                        <img src={product.src} />
                        <div className='card-body'>
                            <div className='card-text'>
                                <h3>{product.name}</h3>
                                <p>
                                    ${product.price}
                                </p>
                            </div>
                            <button className="btn" disabled={product.added} onClick={() => store.dispatch(add(product))}>Add To Cart</button>

                        </div>
                    </div>
                </div> */}
                    <div className="productContainer">
                        <Link className="link" to='#' >
                            <h4>{product.name}</h4>
                            <img src={product.src} height={150} alt="shoe" />
                            <button className="button" disabled={product.added} onClick={() => store.dispatch(add(product))}>Add To Cart</button>
                        </Link>
                    </div>
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
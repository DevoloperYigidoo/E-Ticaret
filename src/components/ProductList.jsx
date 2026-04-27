import  { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllProducts } from '../redux/slices/productSlices'
import { motion } from "motion/react"
import Products from './Products'
import "../css/Products.css"

function ProductList() {

    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products)

   
    useEffect(() => {
        dispatch(getAllProducts())
    },[])
    
  return (
    <motion.div initial={{opacity:0.4,x:-1400}} animate={{opacity:1,x:0}} transition={{duration:0.7}} className='product-list'>
        {
            products && products.map((product) => (
                <Products key={product.id} product={product} />
            ))
        }
    </motion.div>
  )
}

export default ProductList
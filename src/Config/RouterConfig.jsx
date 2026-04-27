import {Routes,Route} from "react-router-dom"
import ProductDetails from '../components/ProductDetails'
import Home from "../Pages/Home"

function RouterConfig() {
  return (
    <Routes>
        <Route path='product-details/:id' element={<ProductDetails />} />
        <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default RouterConfig
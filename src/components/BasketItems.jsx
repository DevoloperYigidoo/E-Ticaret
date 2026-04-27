import Button from "@mui/material/Button"
import "../css/Basket.css"
import { useDispatch } from "react-redux"
import { deleteProductToBasket } from "../redux/slices/basketSlices";
function BasketItems({product}) {

  const dispacth = useDispatch();

  const removeProduct = () => {
      dispacth(deleteProductToBasket(product))
  }


  return (
    <div className='main-basket'>
        <div className="image">
          <img src={product.image} alt="foto" width={100} height={100} />
        </div>
        <div className="basket-content">
          <h3 className="title">{product.title}({product.count})</h3>
          <span className="price">{product.price}₺</span>
        </div>
        <Button variant="contained" color="error" onClick={removeProduct}>Sil</Button>
    </div>
  )
}

export default BasketItems
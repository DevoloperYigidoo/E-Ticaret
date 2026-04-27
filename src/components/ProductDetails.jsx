import { useDispatch, useSelector } from "react-redux"
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import {toast} from "react-toastify"

import "../css/Products.css"
import {  useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { addBasket } from "../redux/slices/basketSlices";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/slices/productSlices";

function ProductDetails() {



    const dispatch = useDispatch();
    const params = useParams()
    

    const { selectedProduct:{id,image,price,title,description} , products } = useSelector((state) => state.products)
    const [count, setCount] = useState(1);

    const notify = () => toast.error("Sepetteki ürün 0 Olamaz");
    const succes = () => toast.success("Sepete başarıyla eklendi");

    const increment = () => {
        setCount(count + 1)
    }
    const decrament = () => {
        if (count <=1) {
            notify()
            return
        } else {
            setCount(count - 1)
        }
    }

    const addToBasket = () => {

        const payload = {
            id,
            title,
            description,
            price,
            image,
            count
        }
        dispatch(addBasket(payload))
        succes();
    }

    

    const getProductFromRedux = () => {
        products.map((product) => {
            if(product.id === Number(params.id)){
                dispatch(selectedProduct(product))
            }
        })
    }

    useEffect(() => {
        getProductFromRedux()
    },[Number(params.id)])

    return (
        <div className="product-details">
            <div className="image">
                <img src={image} alt="İmage" width={300} height={300} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <span >{price}₺</span>


                <div className="basket">
                    <CiCirclePlus onClick={increment} style={{ fontSize: "24px" }} /> <p className="count">{count}</p> <CiCircleMinus onClick={decrament} style={{ fontSize: "24px" }} />
                </div>

                <Button variant="contained" color="success" onClick={addToBasket} >Sepete Ekle</Button>

            </div>



        </div>
    )
}

export default ProductDetails
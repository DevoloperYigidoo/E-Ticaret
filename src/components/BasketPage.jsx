import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, totalAmount } from '../redux/slices/basketSlices';
import BasketItems from './BasketItems';
import "../css/Basket.css"
import { useEffect } from 'react';


function BasketPage() {


    const dispacth = useDispatch()
    const {isOpen,products,total} = useSelector((state) => state.basket)

    
  

  useEffect(() => {
      dispacth(totalAmount())
  },[products])
    
  return (
    <div >
        <Drawer  open={isOpen} onClose={() => dispacth(setIsOpen())} anchor='right'>
            {
              products && products.map((product) => (
                <BasketItems key={product.id} product={product} />
              ))
            }
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <h2 style={{borderBottom:"3px solid red"}}>Toplan Tutar</h2>
              <div style={{fontSize:"20px",marginTop:5}}>{total.toFixed(2)}₺</div>
            </div>
      </Drawer>
    </div>
  )
}

export default BasketPage
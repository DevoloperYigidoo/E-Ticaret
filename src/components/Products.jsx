import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate} from "react-router-dom"



function Products({ product }) {


    const navigate = useNavigate()

    const setSelectedProduct = () => {
        navigate(`product-details/${product.id}`);
    }
    
    return (
        <div className="product-card" >
            <Card sx={{ width:370,height:330,display:"flex" ,flexDirection:"column", justifyContent:"space-between"}}>
                <CardMedia
                    sx={{ height: 140, width: 140,margin:"0px 115px" } }
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom  >
                        {product.title}
                    </Typography>

                    <Typography gutterBottom sx={{fontSize:10}}  >
                        {product.description.length <= 250 ? product.description : null }
                    </Typography>
                    <div style={{color:"red"}}>{product.price}₺</div> 
                </CardContent>

                <CardActions >
                    <Button variant="contained" color="primary" size="small" onClick={setSelectedProduct}>Detayları Göster</Button>
                    <Button variant="contained" color="success" size="small">Satın Al</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Products
import InputAdornment from "@mui/material/InputAdornment";
import "../css/Header.css"
import { useDispatch, useSelector } from "react-redux"
import Logo from "../images/çarşı.png"
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setIsOpen } from "../redux/slices/basketSlices";







function Header() {

    const [theme, setTheme] = useState(false);
    const navigate = useNavigate()
    const dispacth = useDispatch()
    const {products} = useSelector((state) => state.basket)

    const changeTheme = () => {

        const root = document.querySelector("#root")

        if (theme) {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        } else {
            root.style.backgroundColor = "black"
            root.style.color = "#fff"
        }

        setTheme(!theme)
    }

    const openBasket = () => {
        dispacth(setIsOpen())
    }


    return (
        <div className="header">
            <div className="logo">
                <img onClick={() => navigate("/")} src={Logo} width={110} height={110} style={{ cursor: "pointer" }} alt="Logo" />
            </div>
            <div className="header-right">
                <TextField sx={{ "& input::placeholder": { color: "#fff", opacity: 1, }, "& input": { color: "#fff" } }} variant="standard" placeholder="Search..." slotProps={{ input: { endAdornment: (<InputAdornment position="end "> <CiSearch style={{ fontSize: "20px", color: "#fff" }} cursor={"pointer"} />  </InputAdornment>) } }} />
                <div className="actions">

                    <Badge badgeContent={products.length} max={5} color="primary">
                            <CiShoppingBasket style={{ color: "#fff" }} onClick={openBasket} />
                    </Badge>

                    {
                        theme ? <CiSun onClick={changeTheme} /> : <FaMoon onClick={changeTheme} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';


function Loading() {

    const {loading} = useSelector((state) => state.products)

  return (
    <div>
        <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Loading
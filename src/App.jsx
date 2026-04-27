import BasketPage from "./components/BasketPage"
import Header from "./components/Header"
import Loading from "./components/Loading"
import PageContainer from "./components/PageContainer"
import RouterConfig from "./Config/RouterConfig"
import "./css/App.css"
import { Slide, ToastContainer, } from 'react-toastify';






function App() {


     


  return (
    <div  className="container">
      <Header />
      <Loading />
      <PageContainer>
        <RouterConfig />
      </PageContainer>
      <BasketPage />
      <ToastContainer autoClose={1000} theme="dark" transition={Slide} closeOnClick={true} />
    </div>
  )
}

export default App
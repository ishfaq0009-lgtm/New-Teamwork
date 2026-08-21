import AddProduct from './Pages/AddProduct.jsx'
import AllProduct from './Pages/AllProduct.jsx'
import OrderProduct from './Pages/OrderProduct.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/AddProduct' element={<AddProduct />}></Route>
                <Route path='/AllProduct' element={<AllProduct />}></Route>
                <Route path='/OrderProduct' element={<OrderProduct />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

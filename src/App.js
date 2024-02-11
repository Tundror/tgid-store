import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/mainPage.js"
import ProductsPage from "./pages/ProductPage/index.js"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/product/:id" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App

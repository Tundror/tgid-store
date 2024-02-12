import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/mainPage.js"
import ProductsPage from "./pages/ProductPage/index.js"
import CartContextProvider from "./contexts/cartContext.js"
import CartPage from "./pages/CartPage/index.js"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )

}

export default App

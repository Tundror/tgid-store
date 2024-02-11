import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/mainPage.js"
import ProductsPage from "./pages/ProductPage/index.js"
import CartContextProvider from "./contexts/cartContext.js"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductsPage />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )

}

export default App

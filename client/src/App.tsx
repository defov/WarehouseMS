import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsPage from "./containers/ProductsPage"
import Layout from "./containers/Layout"
import WarehousesPage from "./containers/WarehousesPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProductsPage />} />
            <Route path="warehouses" element={<WarehousesPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

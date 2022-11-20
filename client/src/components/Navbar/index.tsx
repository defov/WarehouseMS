import { Link } from "react-router-dom"
import logo from "../../logo.svg"

const Navbar = () => {
  // const items = ["Products", "Warehouses"]
  return (
    <nav className="bg-white shadow px-2 sm:px-16 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex">
          <img src={logo} className="h-9 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            WarehouseMS
          </span>
        </Link>
        <div className="w-auto" id="navbar-default">
          <ul className="flex flex-row space-x-8 bg-white text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-700" aria-current="page">
                Products
              </Link>
            </li>
            <li>
              <Link to="/warehouses" className="hover:text-blue-700">
                Warehouses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

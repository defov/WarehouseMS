import Navbar from "../../components/Navbar"

type Props = {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    <div className="max-w-screen-md mx-4 md:mx-auto mt-6 md:mt-16 space-y-6">
      {children}
    </div>
  </>
)

export default Layout

import { Outlet } from 'react-router-dom'
import Footer from '../Shered/Footer'
import Navbar from '../Shered/Navbar'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main
import { Outlet } from "react-router"
import Navbar from "./NavBar"
import Footer from "./Footer"

function ShowOut() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default ShowOut



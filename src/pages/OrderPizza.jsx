import { Navbar, NavbarBrand } from "reactstrap";
import logo from "/logo.svg"
import FormBanner from "../components/FormBanner/FormBanner.jsx"
import Formİcerik from "../components/FormIcerik/Formİcerik.jsx"
import Footer from "../components/Footer/Footer.jsx";


function OrderPizzaITwo() {
    return (
        <>
        <div>
          <Navbar
    className="fixed-top"
    style={{
      height: 100,
      backgroundColor: "#C20608",
      marginBottom: "-100px"
    }}
  >
    <NavbarBrand href="/" className="position-absolute top-50 start-50 translate-middle">
      <img
        alt="logo"
        src={logo}
        style={{
          height: 40,
          width: 290,
          
        }}
      />
    </NavbarBrand>
  </Navbar>

  {/* form banner **/}

        </div>

            
        <FormBanner/>

        <Formİcerik/>
        <Footer/>


          </>
          
      );
    }

export default OrderPizzaITwo;
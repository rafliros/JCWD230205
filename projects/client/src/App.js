// Import Router
import { Routes, Route} from 'react-router-dom';

// Import Navbar
import Navbar from "./components/navbar";

// Import Home
import Home from "./pages/home/home";

// Import Rooms
import Rooms from "./pages/rooms/rooms";

// Import Booking
import Booking from "./pages/booking/booking";

// Import Contact Us
// import Contactus from "./pages/rooms/rooms";

// Import Login
import Login from "./pages/login/login";

// Import Register
import Signup from "./pages/signup/signup";

// Import Footer
import Footer from "./components/footer";

// Import Register
// import Register from "./pages/register/register";

// import axios from 'axios';

export default function App(){


  return(
    <>
      <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/rooms'  element={<Rooms />} />
          <Route path='/booking'  element={<Booking />} /> 
          <Route path='/login'  element={<Login />} />
          <Route path='/signup'  element={<Signup />} />
          <div>fger</div>
          {/* <Route path='/contactus'  element={<Contactus />} /> */}
        </Routes>
      <Footer />
    </>
  )
}

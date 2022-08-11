import React, {useState} from 'react'
import './Navbar.css';
import Search from '../images/Search.png'
import bars from '../images/bar.png'
import { Link,BrowserRouter as Router,Route,Routes} from "react-router-dom";
import ImgOne from '../Components/ImgOne';
import Products from '../Components/products';
import Login  from '../Components/login-signup/login'
import Register from './login-signup/register'
import Contact from "./Contact us/contact"
import Cart from "./cart"
import About from "./about"

const Navbar = () => {

    const[showLinks, setShowLinks] = useState(false);
    return (
        <Router>
           <div className="Navbar">
            <div className='logo'>
                <p>Deep Technologies</p>
            </div>
            <div className="leftSide">
            <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Shop</Link>
                <Link to="/contact">Contact</Link>
                </div>
                <button className='b3' onClick={() => setShowLinks(!showLinks)}><img src={bars} alt=""/></button>
                </div>

                <div className="rightSide">
                    <input type="text" placeholder="Search Here" />
                    <button className='b1'><img src={Search} alt="" /></button>
                    <div className='signup'> 
                      <Link to="/Register">SignUp</Link>
                      </div>
                      <div className='abc'> 
                      <Link to="/login">SignUp</Link>
                      </div>
                </div>
            </div>
            <Routes>
        <Route path="/" element={<ImgOne />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
            </Router>
    );
};

export default Navbar;
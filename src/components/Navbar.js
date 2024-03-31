import { Link } from 'react-router-dom'
import logo from "../images/ecommerce.svg";
import { cart } from "react-icons-kit/entypo/cart";
import {Icon} from 'react-icons-kit'
import {useNavigate} from "react-router-dom"
import { auth } from "../config/Config";
import { useContext } from 'react';
import {CartContext} from '../global/CartContext'



const Navbar = ({user}) => {
  const{totalQty}=useContext(CartContext)
  const navigate = useNavigate();
  const logout = () => {
  
    auth.signOut().then(() => {
      navigate("/");
    });
  };
  
  return (
    <div className='navbox'>
      <div className='left'>
        <img src={logo} alt="" />
      </div>
      {
       !user && <div className='right'>
        
        <Link to="signup" className='navlinks'>
          signup
        </Link>
        <Link to="login" className='navlinks'>
          login
        </Link>
      </div>
      }
      {
        user&& <div className='right'>
          <span><Link to="/" className="navlinks">{user}</Link></span>
          <span><Link to="cartproducts" className="navlinks"><Icon icon={cart}/></Link></span>
          <div className='relative'>
            <span className='no-of-products'>{totalQty}</span>
            </div>
          <span><button className='logout-btn' onClick={logout}>Logout</button></span>
          </div>
      }
    </div>
    )
}

export default Navbar
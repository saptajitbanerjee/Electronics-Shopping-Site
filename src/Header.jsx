import React from "react";
import {Link} from "react-router-dom";
import {ImCart} from 'react-icons/im/';
import {FaHome} from 'react-icons/fa/';
import {FaFileSignature} from 'react-icons/fa/';
import './Header.css';
const Header = ({cartItems}) =>{
    return(
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        <i>Electronics Shop</i>
                        <svg width="60" height="60" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile">
<path d="M19.4062 34H7.59375C6.66562 34 5.90625 33.0438 5.90625 31.875V2.125C5.90625 0.95625 6.66562 0 7.59375 0H19.4062C20.3344 0 21.0938 0.95625 21.0938 2.125V31.875C21.0938 33.0438 20.3344 34 19.4062 34Z" fill="#333333"/>
<path d="M19.8669 3.36494H7.14319V28.0681H19.8669V3.36494Z" fill="#0BA4E0"/>
<path d="M13.5093 32.5019C12.8503 32.5019 12.3145 31.8272 12.3145 30.9974C12.3145 30.1676 12.8503 29.4918 13.5093 29.4918C14.1682 29.4918 14.7049 30.1676 14.7049 30.9974C14.7049 31.8272 14.1682 32.5019 13.5093 32.5019ZM13.5093 30.0231C13.0832 30.0231 12.7364 30.4597 12.7364 30.9974C12.7364 31.5339 13.0832 31.9706 13.5093 31.9706C13.9362 31.9706 14.283 31.5339 14.283 30.9974C14.283 30.4597 13.9362 30.0231 13.5093 30.0231Z" fill="#D6D6D6"/>
<path d="M13.5084 2.19937C13.7354 2.19937 13.9193 1.96771 13.9193 1.68193C13.9193 1.39616 13.7354 1.1645 13.5084 1.1645C13.2815 1.1645 13.0975 1.39616 13.0975 1.68193C13.0975 1.96771 13.2815 2.19937 13.5084 2.19937Z" fill="#D6D6D6"/>
<path d="M16.4962 2.19937C16.7231 2.19937 16.9071 1.96771 16.9071 1.68193C16.9071 1.39616 16.7231 1.1645 16.4962 1.1645C16.2692 1.1645 16.0852 1.39616 16.0852 1.68193C16.0852 1.96771 16.2692 2.19937 16.4962 2.19937Z" fill="#D6D6D6"/>
<path d="M17.7947 2.19937C18.0216 2.19937 18.2056 1.96771 18.2056 1.68193C18.2056 1.39616 18.0216 1.1645 17.7947 1.1645C17.5678 1.1645 17.3838 1.39616 17.3838 1.68193C17.3838 1.96771 17.5678 2.19937 17.7947 2.19937Z" fill="#D6D6D6"/>
<path d="M11.54 18.9263H8.95978V19.9888H11.54V18.9263Z" fill="white"/>
<path d="M13.7067 16.4326H8.95978V17.4951H13.7067V16.4326Z" fill="white"/>
<path d="M15.8735 13.94H8.95978V15.0025H15.8735V13.94Z" fill="white"/>
<path d="M18.0402 11.4442H8.95978V12.5067H18.0402V11.4442Z" fill="white"/>
</svg>

                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/">Home <FaHome size={25}/></Link></li>
                </ul>
                <ul>
                    <li><Link to="/signup">Sign Up <FaFileSignature size={25}/></Link></li>
                </ul>
                <ul>
                    <li><Link to="/cart">Cart<ImCart size={30}/><sup>{cartItems.length===0?"0":cartItems.length}</sup></Link></li>
                </ul>
            </div>
        </header>
    )
};
export default Header
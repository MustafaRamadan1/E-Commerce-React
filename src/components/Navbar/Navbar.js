import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Search as SearchIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import './navbar.scss'
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/eg.png" alt="egLogo" style={{ width: "40px" , height: '30px'}} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={`products/1`}>Woman</Link>
          </div>
          <div className="item">
            <Link   className='link' to={`products/1`}>Men</Link>
          </div>
          <div className="item">
            <Link  className='link' to={`products/1`}>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link  className='link'to="/">PontStore</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/">HomePage</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link  className='link'to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

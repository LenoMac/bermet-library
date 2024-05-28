import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";

const Navbar = () => {

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>ML</span>
          </Link>
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>главная</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>о нас</Link>
            </li>
            <li className='nav-item'>
              <Link to="my" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>моё</Link>
            </li>
          </ul>
          <div>
            <button className='button-primary'>Войти</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
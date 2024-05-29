import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useGlobalContext } from "../../context.";
import logoImg from "../../images/logo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase";
import Profile from "../ProfileBtn/Profile";

const Navbar = () => {
  const { username, setUsername, userProfile, setUserProfile, token } = useGlobalContext()
  const navigate = useNavigate()
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      setUserProfile(result.user.photoURL);
      setUsername(result.user.displayName);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">ML</span>
          </Link>
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                главная
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                о нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="my"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                моё
              </Link>
            </li>
          </ul>
          <div>
            {token ? (
              <Profile username={username} userProfile={userProfile} />
            ) : (
              <button
                onClick={handleSignInWithGoogle}
                className="button-primary"
              >
                Войти
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

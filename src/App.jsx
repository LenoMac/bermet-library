import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import MyBooks from "./pages/MyBooks/MyBooks";
import { useGlobalContext } from "./context.";

export default function App() {
  const { setToken, setUsername, setUserProfile } = useGlobalContext();

  useEffect(() => {
    loadToken();
  }, [])

  const loadToken = async () => {
    try {
      const token = localStorage.getItem('token'),
        user = JSON.parse(localStorage.getItem('user'));
      setToken(token);
      setUsername(user.displayName);
      setUserProfile(user.photoURL);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="book" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="my" element={<MyBooks />} />
      </Route>
    </Routes>
  );
}

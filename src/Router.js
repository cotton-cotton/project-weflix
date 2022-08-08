import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import UserProfile from './pages/UserProfile/UserProfile';
import SelectProfile from './pages/SelectProfile/SelectProfile';
import AddProfile from './pages/AddProfile/AddProfile';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile/user" element={<UserProfile />} />
        <Route path="/profile/select" element={<SelectProfile />} />
        <Route path="/profile/add" element={<AddProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

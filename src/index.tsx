import "./style.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OneOnOneCoaching from "./pages/services/OneOnOneCoaching";
import CorporateTraining from './pages/services/CorporateTraining';
import JuniorsProgram from './pages/services/JuniorsProgram';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/1-1-coaching" element={<OneOnOneCoaching />} />
        <Route path="/services/corporate-training" element={<CorporateTraining />} />
        <Route path="/services/juniors-program" element={<JuniorsProgram />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/article/:blogSlug" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

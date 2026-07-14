import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import './assets/css/swap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';
import './assets/css/media_query.css';

import HomeSlider from './pages/HomeSlider.tsx';
import HomeVideo from "./pages/HomeVideo.tsx";
import HomeSolid from "./pages/HomeSolid.tsx";
import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import TeamDetails from "./pages/TeamDetails.tsx";
import PricingPlan from "./pages/PricingPlan.tsx";
import OurClients from "./pages/OurClients.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import Faq from "./pages/Faq.tsx";
import GetQuote from "./pages/GetQuote.tsx";
import NotFound from "./pages/NotFound.tsx";
import Services from "./pages/Services.tsx";
import HouseCleaning from "./pages/HouseCleaning.tsx";
import KitchenCleaning from "./pages/KitchenCleaning.tsx";
import OfficeCleaning from "./pages/OfficeCleaning.tsx";
import WindowCleaning from "./pages/WindowCleaning.tsx";
import CarpetCleaning from './pages/CarpetCleaning.tsx';
import CorporateCleaning from "./pages/CorporateCleaning.tsx";
import Project1 from "./pages/Project1.tsx";
import Project2 from "./pages/Project2.tsx";
import Project3 from "./pages/Project3.tsx";
import Project1Single from "./pages/Project1Single.tsx";
import Project2Single from "./pages/Project2Single.tsx";
import Project3Single from "./pages/Project3Single.tsx";
import OurBlog from "./pages/OurBlog.tsx";
import Blog2 from "./pages/Blog2.tsx";
import Blog3 from "./pages/Blog3.tsx";
import BlogDetails1 from "./pages/BlogDetails1.tsx";
import BlogDetails2 from "./pages/BlogDetails2.tsx";
import BlogDetails3 from "./pages/BlogDetails3.tsx";
import Contact from "./pages/Contact.tsx";

import Footer from "./component/Footer.tsx";
import Header from "./component/Header.tsx";
import ScrollTopPage from './component/ScrollTopPage.tsx';
import Preloader from './component/Preloader.tsx';
import ScrollToTopButton from "./component/ScrollToTopButton.tsx";
import SmoothScroll from './hooks/SmoothScroll.ts';
import ContactForm from "./component/ContactForm.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll />
        <ScrollTopPage />
        <Header />
        <Preloader />
        <Routes>
          <Route path="/" element={<HomeSlider />} />
          <Route path="/HomeVideo" element={<HomeVideo />} />
          <Route path="/HomeSolid" element={<HomeSolid />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/TeamDetails" element={<TeamDetails />} />
          <Route path="/PricingPlan" element={<PricingPlan />} />
          <Route path="/OurClients" element={<OurClients />} />
          <Route path="/TestimonialsPage" element={<TestimonialsPage />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/GetQuote" element={<GetQuote />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/HouseCleaning" element={<HouseCleaning />} />
          <Route path="/KitchenCleaning" element={<KitchenCleaning />} />
          <Route path="/OfficeCleaning" element={<OfficeCleaning />} />
          <Route path="/WindowCleaning" element={<WindowCleaning />} />
          <Route path="/CarpetCleaning" element={<CarpetCleaning />} />
          <Route path="/CorporateCleaning" element={<CorporateCleaning />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Project1Single" element={<Project1Single />} />
          <Route path="/Project2Single" element={<Project2Single />} />
          <Route path="/Project3Single" element={<Project3Single />} />
          <Route path="/OurBlog" element={<OurBlog />} />
          <Route path="/Blog2" element={<Blog2 />} />
          <Route path="/Blog3" element={<Blog3 />} />
          <Route path="/BlogDetails1" element={<BlogDetails1 />} />
          <Route path="/BlogDetails2" element={<BlogDetails2 />} />
          <Route path="/BlogDetails3" element={<BlogDetails3 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ContactForm />
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;

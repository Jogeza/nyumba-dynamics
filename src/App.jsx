import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import './assets/css/swap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';
import './assets/css/media_query.css';

import HomeSlider from './pages/HomeSlider.tsx';
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

<Route path="/about" element={<About />} />

<Route path="/services" element={<Services />} />

<Route path="/properties" element={<Project1 />} />

<Route path="/projects" element={<Project2 />} />

<Route path="/property/:id" element={<Project1Single />} />

<Route path="/team" element={<Team />} />

<Route path="/blog" element={<OurBlog />} />

<Route path="/contact" element={<Contact />} />

<Route path="/consultation" element={<GetQuote />} />

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

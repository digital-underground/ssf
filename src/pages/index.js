import React from 'react'
import { Helmet } from 'react-helmet'
import './index.css' // Optional: For any custom styles
import Header from "../components/header";
import About from "../components/about";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Modal from '../components/modal';
import Divider from '@mui/material/Divider';
import Community from '../components/community';
import Landing from '../components/landing';
import Courses from '../components/courses';

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <link rel="icon" href="./images/favicon.ico" />
        <title>Softstack Factory</title>
        <meta name="description" content="Softstack Factory - Site Under Construction" />
      </Helmet>
      <Modal />
      <Header />
      <Landing />
      <Divider />
      <Courses />
      <Divider />
      <About />
      <Divider />
      <Community />
      <Divider />
      <Testimonials />
      <Divider />
      <Footer />
    </main>
    
  )
}

export default IndexPage

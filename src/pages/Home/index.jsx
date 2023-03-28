import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../containers/Header'
import Content from '../../containers/Content'
import Footer from '../../containers/Footer'


function index() {
  return (
    <div>
        <Navbar />
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default index
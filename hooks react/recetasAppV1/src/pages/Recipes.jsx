import React from 'react'
import Menu from '../components/menu/menu'
import Header from '../components/header/header'
import Aside from '../components/aside/aside'
import Footer from '../components/footer/footer'
export default function recipes() {
  return (
    <>
    <Header />
    <Menu />
    <div className="container">
      <div className="row">
        <Aside />
        <div className="col-sm-8">
            
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

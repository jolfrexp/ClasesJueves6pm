import React from 'react'
import Content from '../components/content/content'
import Header from '../components/header/header'
import Menu from '../components/menu/menu'
import Aside from '../components/aside/aside'
import Footer from '../components/footer/footer'


export default function home() {
  return (
  <>
    <Header />
    <Menu />
    <div className="container">
      <div className="row">
        <Aside />
        <div className="col-sm-8">
          <Content/>
        </div>
      </div>
    </div>
    <Footer />
    </>

  )
}

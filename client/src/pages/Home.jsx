import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/description'
import Testimonials from '../components/testimonials'
import Generate from '../components/Generate'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <Generate />
    </div>
  )
}

export default Home

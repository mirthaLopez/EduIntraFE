import React from 'react'
import Footer from '../Components/MainComponents/Footer'
import HeaderNav from '../Components/MainComponents/Header'
import ControlledCarousel from '../Components/MainComponents/Carrousel'
import CoursesCards from '../Components/Courses/CoursesCards'
import Partnerships from '../Components/Partners/Partnerships'
import EventSlider from '../Components/SliderEvents'
import BlogEdunamica from '../Components/BlogEdunamica/BlogEdunamica'

function Inicio() {
  return (
    <div>
      <HeaderNav />
      <ControlledCarousel />
      <CoursesCards />
      <EventSlider />
      <BlogEdunamica />
      <Partnerships />
      <Footer />
    </div>
  )
}

export default Inicio
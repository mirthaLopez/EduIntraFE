import React from 'react'
import BlogEdunamica from '../../Components/BlogEdunamica/BlogEdunamica'
import HeaderNav from '../../Components/MainComponents/Header'
import Footer from '../../Components/MainComponents/Footer'


function Blog() {
  return (
    <div>
        <HeaderNav />
        <div style={{height:"120px"}}></div>
        <BlogEdunamica />
        <Footer />
    </div>
  )
}

export default Blog
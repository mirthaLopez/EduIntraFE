import React from 'react'
import BlogEdunamica from '../../Components/BlogEdunamica/BlogEdunamica';
import EventSlider from '../../Components/SliderEvents';
import NavAdministration from '../../Components/AdminComponents/NavAdministration';
import SidebarStudent from '../../Components/Students/SidebarStudent';
function Noticias() {
  return (
    <div>
        <SidebarStudent />
        <NavAdministration />
        <div style={{marginLeft:"260px"}}>
        <EventSlider />
        <BlogEdunamica />
        </div>
    </div>
  )
}

export default Noticias;
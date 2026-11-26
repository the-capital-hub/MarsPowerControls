import React from 'react'
import HeroSection from '../../HomeComp/HeroSection/HeroSection'
import AboutSection from '../../HomeComp/AboutSection/AboutSection'
import ServicesSection from '../../HomeComp/ServicesSection/ServicesSection'
import WhyChooseUs from '../../HomeComp/WhyChooseUs/WhyChooseUs'
import ProjectsSection from '../../HomeComp/ProjectsSection/ProjectsSection'
import SolarSection from '../../HomeComp/SolarSection/SolarSection'
import WorkProcess from '../../HomeComp/WorkProcess/WorkProcess'
import IndustriesSection from '../../HomeComp/IndustriesSection/IndustriesSection'
import TestimonialsSection from '../../HomeComp/TestimonialsSection/TestimonialsSection'
import ContactCTA from '../../HomeComp/ContactCTA/ContactCTA'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <WhyChooseUs/>
    <ProjectsSection/>
    <SolarSection/>
    <WorkProcess/>
    <IndustriesSection/>
    <TestimonialsSection/>
    <ContactCTA/>
    </>
  )
}

export default Home



import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import LearningMethodology from './Components/LearningMethodology/LearningMethodology'
import Nabza from './Components/Nabza/Nabza'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import OurCourses from './Components/Header/OurCourses/OurCourses'

import Message from './Components/Message/Message'


function App() {

  return (
    <div className='app'>
        <Header/>


      <div className="appContainer ">
        <Nabza/>
        <WhyChooseUs/>
        <LearningMethodology/>

        <OurCourses/>

        <Message/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;

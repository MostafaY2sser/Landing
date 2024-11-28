


import './App.css'
import Footer from './Components/Footer/Footer'
// import Header from './Components/Header/Header'
// import LearningMethodology from './Components/LearningMethodology/LearningMethodology'
// import Nabza from './Components/Nabza/Nabza'
// import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
// import OurCourses from './Components/Header/OurCourses/OurCourses'
// import Message from './Components/Message/Message'
import { Routes, Route } from 'react-router-dom';
import Chaina from "./Pages/Chaina/Chaina"
import English from "./Pages/English/English"
import Franch from "./Pages/Franch/Franch"


function App() {

  return (
    <div className='app'>
      <div className="appContainer ">


    <Routes> 
      <Route path="/" element={<Chaina/>}/>
      <Route path="/english" element={<English/>}/>
      <Route path="/franch" element={<Franch/>}/>
    </Routes>
        <Footer/> 
      </div>
    </div>
  )
}

export default App;

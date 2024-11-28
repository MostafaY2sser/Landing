


import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
// import LearningMethodology from './Components/LearningMethodology/LearningMethodology'
// import Nabza from './Components/Nabza/Nabza'
// import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
// import OurCourses from './Components/Header/OurCourses/OurCourses'

// import Message from './Components/Message/Message'
import { FaWhatsapp } from "react-icons/fa";
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
      {/* <Header /> */}


      <div className="appContainer relative ">
        {/* <OurCourses />
        <Nabza />
        <WhyChooseUs />
        <LearningMethodology />
        <Message /> */}
        {/* <Footer /> */}
     


        <Routes>
          <Route path="/" element={<Chaina />} />
          <Route path="/english" element={<English />} />
          <Route path="/franch" element={<Franch />} />
        </Routes>
        <Footer />

        <a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B966537211776&text&type=phone_number&app_absent=0"
            target="_blank"
            className=" fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </a>

      </div>
    </div>
  )
}

export default App;

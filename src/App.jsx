


import './App.css'
import Header from './Components/Header/Header'
import LearningMethodology from './Components/LearningMethodology/LearningMethodology'
import Nabza from './Components/Nabza/Nabza'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'

function App() {

  return (
    <div className='app'>
        <Header/>


      <div className="appContainer ">
        <Nabza/>
        <WhyChooseUs/>
        <LearningMethodology/>

      </div>
    </div>
  )
}

export default App

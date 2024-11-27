


import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Message from './Components/Message/Message'

function App() {

  return (
    <div className='app'>
      <div className="appContainer ">
        <Header/>
        <Message/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

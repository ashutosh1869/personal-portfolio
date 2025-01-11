// Desc: Main App component     
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/Home'

function App() {

  return (
    <div className='w-full h-full m-0 p-0 bg-zinc-800 text-white'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App

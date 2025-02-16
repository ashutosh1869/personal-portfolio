// Desc: Main App component     
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/Home'
import { useSelector } from 'react-redux'

function App() {
  const isLightTheme = useSelector((state) => state.theme.theme === "light");
  return (
    <div className={`w-full h-full m-0 p-0 ${isLightTheme ? 'bg-slate-100 text-black' : 'bg-zinc-800 text-white'}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App

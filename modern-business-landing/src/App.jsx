import './App.css'
import CompanyLogo from './Components/CompanyLogo'
import FeatureSection from './Components/FeatureSection'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import PurposeSection from './Components/purposeSection'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <PurposeSection/>
      <FeatureSection/>
      </div>
      
    </main>
  )
}

export default App

import './App.scss'
import Extensions from './components/Extensions/Extensions'
import FAQs from './components/FAQs/FAQs'
import Features from './components/Features/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Subscription from './components/Subscription/Subscription'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <FAQs />
      <Subscription />
      <Footer />
    </>
  )
}

export default App

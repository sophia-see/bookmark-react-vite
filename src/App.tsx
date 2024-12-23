import React from 'react'
import './App.scss'
import Extensions from './components/Extensions/Extensions'
import FAQs from './components/FAQs/FAQs'
import Features from './components/Features/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuDrawer from './components/MenuDrawer'
import Subscription from './components/Subscription/Subscription'

function App() {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);

  const appClasses = React.useMemo(() => {
    return isMenuOpened ? "no-scroll" : ""
  }, [isMenuOpened])
  
  return (
    <div className={appClasses}>
      <Header setIsMenuOpened={setIsMenuOpened}/>
      <Hero />
      <Features />
      <Extensions />
      <FAQs />
      <Subscription />
      <Footer />

      {isMenuOpened ? <MenuDrawer setIsMenuOpened={setIsMenuOpened}/> : <></>}
    </div>
  )
}

export default App

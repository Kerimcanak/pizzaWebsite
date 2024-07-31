import HomePageHero from "../components/HomePageHero/HomePageHero"
import HomePageNav from "../components/HomePageNav/HomePageNav"
import HomePageMain from "../components/HomePageMain/HomePageMain"
import HomePageMainBottom from "../components/HomePageMain/HomePageMainBottom"
import Footer from "../components/Footer/Footer"

function MainPage() {

  return (
    <div style={{overflow: "hidden"}}>
      <HomePageHero/>
      <HomePageNav/>
      <HomePageMain/>
      <HomePageMainBottom/>
      <Footer/>
    </div>
  )
}

export default MainPage

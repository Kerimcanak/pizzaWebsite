import HomePageHero from "../components/HomePageHero/HomePageHero"
import HomePageNav from "../components/HomePageNav/HomePageNav"
import HomePageMain from "../components/HomePageMain/HomePageMain"
import Footer from "../components/Footer/Footer"

function MainPage() {

  return (
    <div style={{overflow: "hidden"}}>
      <HomePageHero/>
      <HomePageNav/>
      <HomePageMain/>
      <Footer/>
    </div>
  )
}

export default MainPage

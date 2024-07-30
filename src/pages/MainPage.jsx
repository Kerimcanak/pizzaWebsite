import HomePageHero from "../components/HomePageHero/HomePageHero"
import HomePageNav from "../components/HomePageNav/HomePageNav"
import HomePageMain from "../components/HomePageMain/HomePageMain"

function MainPage() {

  return (
    <div style={{overflow: "hidden"}}>
      <HomePageHero/>
      <HomePageNav/>
      <HomePageMain/>
    </div>
  )
}

export default MainPage

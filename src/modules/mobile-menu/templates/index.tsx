import { useMobileMenu } from "@lib/context/mobile-menu-context"
// import AddressesTemplate from "@modules/account/templates/addresses-template"
// import OverviewTemplate from "@modules/account/templates/overview-template"
// import ProfileTemplate from "@modules/account/templates/profile-template"
// import Container from "@modules/mobile-menu/components/container"
import MainMenu from "@modules/mobile-menu/components/main-menu"
import CountryMenu from "../components/country-menu"
import SearchMenu from "../components/search-menu"
import Container from "../newcontainer"

const MobileMenu = () => {
  const {
    screen: [currentScreen],
  } = useMobileMenu()

  return (
    <Container>
      <div className="flex flex-col flex-1 p-4">
        {(() => {
          switch (currentScreen) {
            case "country":
              return <CountryMenu />
            case "search":
              return <SearchMenu />
            default:
              // return <AddressesTemplate />

              // return <OverviewTemplate />
              return <MainMenu />
          }
        })()}
      </div>
    </Container>
  )
}

export default MobileMenu

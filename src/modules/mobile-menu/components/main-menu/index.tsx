// import { useMobileMenu } from "@lib/context/mobile-menu-context"
// import { useStore } from "@lib/context/store-context"
// import useCountryOptions from "@lib/hooks/use-country-options"
import ChevronDown from "@modules/common/icons/chevron-down"
// import { MagnifyingGlassMini, XMark as X } from "@medusajs/icons"
import { useCollections } from "medusa-react"
import Link from "next/link"
// import ReactCountryFlag from "react-country-flag"
// import { Heading } from "@medusajs/ui"

const MainMenu = () => {
  const { collections } = useCollections()
  // const { customer } = useMeCustomer()
  // const { countryCode } = useStore()

  // const countries = useCountryOptions()

  // const {
  //   screen: [_, setScreen],
  // } = useMobileMenu()

  // const setScreenCountry = () => setScreen("country")
  // const setScreenSearch = () => setScreen("search")

  const links = [
    {
      label: "Home",
      screen_reader_label: "Go to Home",
      href: "/",
    },
    {
      label: "Store",
      screen_reader_label: "Go to Store",
      href: "/store",
    },
    {
      label: "Account",
      screen_reader_label: "Go to Account",
      href: "/account",
    },
    {
      label: "Cart",
      screen_reader_label: "Go to Cart",
      href: "/cart",
    },
    {
      label: "Contact",
      screen_reader_label: "Go to Contact",
      href: "/contact",
    },
  ]
  console.log(collections)
  return (
    <div className="flex flex-col flex-1">
      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
        <div className="flex flex-col flex-1 text-xl text-white">
          <ul className="flex flex-col gap-y-2">
            {links.map((link) => (
              <li
                key={link.label}
                className=" p-4 rounded-rounded hover:bg-primary_active active:bg-primary_active "
              >
                <Link href={link.href}>
                  <button
                    className="flex items-center justify-center w-[50vw]"
                    onClick={close}
                  >
                    <span className="sr-only">{link.screen_reader_label}</span>
                    <span>{link.label}</span>
                  </button>
                </Link>
              </li>
            ))}
            {collections ? (
              <>
                {collections.map((collection) => (
                  <li
                    key={collection.id}
                    className="bg-gray-50 p-4 rounded-rounded"
                  >
                    <Link href={`/collections/${collection.handle}`}>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={close}
                      >
                        <span className="sr-only">
                          Go to {collection.title} collection
                        </span>
                        <span>{collection.title}</span>
                        <ChevronDown className="-rotate-90" />
                      </button>
                    </Link>
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainMenu

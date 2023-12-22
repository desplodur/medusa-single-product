"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="">
        <nav className="">
          <div className="hidden small:flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              Desplodur
            </Link>
            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <DesktopSearchModal
                    state={searchModalState}
                    close={searchModalClose}
                    open={searchModalOpen}
                  />
                )}
                <Link className="hover:text-ui-fg-base" href="/account">
                  Account
                </Link>
              </div>
              <CartDropdown />
            </div>
          </div>
          <div className="flex small:hidden h-full">
            <MobileMenu />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav

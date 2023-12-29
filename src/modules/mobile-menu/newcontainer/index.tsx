import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const { state, close, toggle } = useMobileMenu()

  const route = usePathname()
  console.log("route", route)

  const links = [
    {
      label: "Acct",
      screen_reader_label: "Go to Account",
      href: "/account",
      id: "ACCT",
    },
    {
      label: "Home",
      screen_reader_label: "Go to Home",
      href: "/store",
      id: "HOME",
    },
    {
      label: "Cart",
      screen_reader_label: "Go to Cart",
      href: "/cart",
      id: "CART",
    },
    // {
    //   label: "Stor",
    //   screen_reader_label: "Go to Store",
    //   href: "/store",
    //   id: 2,
    // },
  ]

  const menu_control = {
    grow: {
      // justifyContent: "flex-end",
      flexGrow: 1,
    },
    shrink: {
      // justifyContent: "flex-start",
      flexGrow: 0,
    },
  }

  return (
    <motion.div
      animate={state ? "open" : "closed"}
      onClick={toggle}
      className="fixed small:hidden bottom-0 h-[15vh] left-0 right-0 z-20 w-full"
    >
      <div className="absolute flex items-baseline left-0 bottom-0 w-[100%]">
        <div className="bg-primary w-8 h-[65px]" />
        <motion.div
          variants={menu_control}
          animate={route.startsWith("/account") ? "shrink" : "grow"}
          className="bg-primary flex-grow h-[65px]"
        />
        <svg
          className="z-20 "
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="92"
          viewBox="0 0 112 92"
        >
          <circle cx="56" cy="36" r="36" fill="black" />
          <path
            d="M104 35.2L104 35.2c0 26.3-20.9 48.3-47.2 48.8C29.9 84.4 8 62.8 8 36v-0.8c0-4-3.2-7.2-7.2-7.2H0v64h112V28h-0.8C107.2 28 104 31.2 104 35.2z"
            fill="black"
          />
        </svg>
        <motion.div
          variants={menu_control}
          animate={route.startsWith("/cart") ? "shrink" : "grow"}
          className="bg-primary flex-grow h-[65px]"
        />
        <div className="bg-primary w-8 h-[65px]" />
      </div>
      <div className="absolute flex left-0 bottom-0 w-[100%] h-[64px] px-10">
        {links.map((link) => {
          console.log("link", link.href, route.startsWith(link.href))
          return (
            <div
              key={link.id}
              className="flex-grow flex flex-col z-40 items-center justify-center"
            >
              <a
                href={link.href}
                className="flex flex-col items-center justify-center"
              >
                <span className="sr-only">{link.screen_reader_label}</span>
                <span className="text-white">{link.label}</span>
              </a>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Container

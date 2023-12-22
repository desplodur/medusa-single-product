import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { motion } from "framer-motion"

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const { state, close, toggle } = useMobileMenu()

  const menu_variants = {
    open: {
      height: "95vh",
      type: "spring",
    },
    closed: {
      height: "15vh",
      type: "spring",
    },
  }
  const link_variants = {
    open: {
      justifyContent: "center",
    },
    closed: {
      justifyContent: "flex-start",
    },
  }

  return (
    <motion.div
      animate={state ? "open" : "closed"}
      onClick={toggle}
      className="fixed small:hidden bottom-0 left-0 right-0 z-50 w-full"
      variants={menu_variants}
    >
      <div className="absolute left-0 bottom-[90%] border-primary border-b-[0.8rem] w-28 border-r-[2rem] border-r-transparent bg-transparent flex items-center justify-center" />
      <div className="absolute bottom-[90%] left-1/2 transform -translate-x-1/2 -translate-y-[5px]">
        <div className="w-12 h-1 bg-primary animate-bounce" />
      </div>
      <div className="absolute right-0 bottom-[90%] border-primary border-b-[0.8rem] w-28 border-l-[2rem] border-l-transparent bg-transparent flex items-center justify-center" />
      <motion.div
        className="absolute left-0 right-0 bottom-0 bg-primary h-[90%] flex flex-col items-center py-6"
        variants={link_variants}
      >
        {state ? children : <h1 className="text-white">Menu</h1>}
      </motion.div>
    </motion.div>
  )
}

export default Container

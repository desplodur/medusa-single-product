import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Superhero from "@modules/layout/templates/superhero"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Superhero />
      <Nav />
      {children}
      <Footer />
    </>
  )
}

import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[20vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col  p-6 ">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Lets make our lifes
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Desplodur
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero

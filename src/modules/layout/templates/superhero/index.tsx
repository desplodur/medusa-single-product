"use client"

const Superhero = () => {
  return (
    <div className="sticky small:hidden top-0 inset-x-0 z-50 group">
      <div className="w-[100vw] h-[3vh] bg-black text-white flex items-end px-8">
        <span>Free Shipping from 20$</span>
      </div>
      <div className="absolute left-0 bottom-[-0.7rem] border-black z-20 w-[80%] border-t-[0.9rem] border-r-[2rem] border-r-transparent " />
    </div>
  )
}

export default Superhero

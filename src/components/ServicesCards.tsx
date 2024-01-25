import Image from "next/image"

interface ServicesCardsProps {
  imgURL: string
  title: string
  subtext: string
}

const ServicesCards = ({ imgURL, title, subtext } : ServicesCardsProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 md:py-16">
      <div className="bg-white rounded-full h-[150px] w-[150px]  items-center justify-center flex">
        <Image src={imgURL} alt={`icon ${title}`} className="h-20 w-20"/>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl text-center font-extralight text-copter-blue-dark">{title}</h2>
        <h3 className="text-2xl font-semibold mt-2 text-center text-copter-blue-dark">{subtext}</h3>
      </div>
    </div>
  )
}
export default ServicesCards
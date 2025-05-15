import FrontImage from "../assets/FrontImage.jpg"
import EnterButton from "../assets/Enter_Button.png"
import { useNavigate } from "react-router-dom"
import MeitY from "../assets/MeitY.png"
import Hyderabad_University from "../assets/University_of_Hyderabad.png"
import SamskritiFoundation from "../assets/samskritiFoundation.png"
import { IoHome } from "react-icons/io5"

const FirstPage = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/introduction")
  }

  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  // navigate it to the Static Front Page
  const handleHomeClick = () => {
    navigate("/")
  }
  // till here

  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-center">
      <img src={FrontImage} alt="Front Image" className="w-full h-full " />
      <div className="absolute bottom-[16%] right-[12%]">
        <img
          src={EnterButton}
          alt="Enter Button"
          className="h-[80%] w-[80%] object-contain cursor-pointer"
          onClick={handleNavigate}
        />
      </div>
      <div className="fixed top-[2%] left-[2%] h-[-50%] w-[-50%] cursor-pointer">
        <img
          src={MeitY}
          alt="MeitY"
          className="h-full w-full object-contain"
          onClick={() => handleClick("https://www.meity.gov.in/")}
        />
      </div>
      <div className="fixed top-[2%] left-[10%] h-[-8%] w-[-8%] cursor-pointer">
        <img
          src={Hyderabad_University}
          alt="Hyderabad University"
          className="h-full w-full object-contain"
          onClick={() => handleClick("https://sanskrit.uohyd.ac.in/")}
        />
      </div>

      {/* Home button */}
      <div
        className="fixed top-[5%] right-[19%] h-[8%] w-[2%] m-w-[10vh] cursor-pointer"
        onClick={handleHomeClick}
      >
        <IoHome className="text-white text-4xl" />
      </div>
      {/* till here */}

      <div className="fixed top-[2%] right-[2%] h-[-8%] w-[-8%] cursor-pointer">
        <img
          src={SamskritiFoundation}
          alt="Samskriti Foundation"
          className="h-full w-full object-contain"
          onClick={() => handleClick("https://samskritifoundation.org")}
        />
      </div>
    </div>
  )
}

export default FirstPage

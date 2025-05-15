import { useNavigate } from "react-router-dom"
import bgimg from "../assets/katho/bg-img.png"
import EnterButton from "../assets/katho/enter_btn.png"
import { IoHome } from "react-icons/io5"
import MeitY from "../assets/MeitY.png"
import Hyderabad_University from "../assets/University_of_Hyderabad.png"
import SamskritiFoundation from "../assets/katho/sf-logo.png"

const KathoPage = () => {
  const navigate = useNavigate()

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
      <img src={bgimg} alt="Front Image" className="w-screen h-screen " />

      {/* --------------- enter btn -------------------- */}

      {/* <div className="absolute bottom-[4%] left-[65%]"> */}
      <div className="fixed bottom-[6%] right-[13%] h-[24%] w-[19%]  cursor-pointer">
        <img
          src={EnterButton}
          alt="Enter Button"
          className="h-full w-full object-contain"
          // onClick={handleNavigate}
        />
      </div>

      <div className="fixed top-[4%] left-[4%] h-[9%] w-[5%]  cursor-pointer">
        <img
          src={MeitY}
          alt="MeitY"
          className="h-full w-full object-contain"
          onClick={() => handleClick("https://www.meity.gov.in/")}
        />
      </div>
      <div className="fixed top-[3.6%] left-[11%] h-[9.8%] w-[5%]  cursor-pointer">
        <img
          src={Hyderabad_University}
          alt="Hyderabad University"
          className="h-full w-full object-contain"
          onClick={() => handleClick("https://sanskrit.uohyd.ac.in/")}
        />
      </div>

      {/* Home button */}
      <div
        className="fixed top-[7%] right-[19%] h-[8%] w-[2%] m-w-[10vh] cursor-pointer"
        onClick={handleHomeClick}
      >
        <IoHome className="text-white text-4xl" />
      </div>
      {/* till here */}

      <div className="fixed top-[3%] right-[3%] h-[14%] w-[10%]  cursor-pointer">
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

export default KathoPage

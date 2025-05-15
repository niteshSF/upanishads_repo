import HdrImg from "@/assets/header_img.png"
import HdrBg from "@/assets/header_bg.png"
import TexturedButton from "@/components/shared/TexturedButton"
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div
      className="flex justify-between items-center drop-shadow-lg"
      style={{
        backgroundImage: `url(${HdrBg})`,
      }}
    >
      <div className="flex gap-6 items-center justify-between">
        <img src={HdrImg} alt="Header Image" className="h-24" />
        <div
          className="text-center " // hover:cursor-pointer
          // onClick={() => navigate("/")}
        >
          <h2 className="text-darkbrown font-bold text-2xl">ईशावास्योपनिषद्</h2>
          <h2 className="text-darkorange font-bold text-2xl">
            Īśāvāsyopaniṣad
          </h2>
        </div>
      </div>
      <div
        className="text-center " //hover:cursor-pointer
        // onClick={() => navigate("/")}
      >
        <h1 className="text-darkbrown font-bold text-2xl">
          Sanskrit Knowledge Accessor
        </h1>
        <h2 className="text-darkorange font-bold text-xl">Upanishad Reader</h2>
      </div>
      <div className="pr-4 pt-2">
        <TexturedButton
          selected={
            location.pathname === "/" ||
            location.pathname === "/chant" ||
            location.pathname === "teach-me"
          }
          onClick={() => navigate("/")}
        >
          Home
        </TexturedButton>
        <TexturedButton
          selected={location.pathname === "/about"}
          onClick={() => navigate("/about")}
        >
          About
        </TexturedButton>
        <TexturedButton
          selected={location.pathname === "/credits"}
          onClick={() => navigate("/credits")}
        >
          Credits
        </TexturedButton>
        <TexturedButton
          selected={location.pathname === "/disclaimer"}
          onClick={() => navigate("/disclaimer")}
        >
          Disclaimer
        </TexturedButton>
        <TexturedButton
          selected={location.pathname === "/help"}
          onClick={() => navigate("/help")}
        >
          Help
        </TexturedButton>
      </div>
    </div>
  )
}

export default Header

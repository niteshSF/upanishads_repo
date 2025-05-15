import VScrollImg from "@/assets/vertical_scroll.png"
import ChantIcon from "@/assets/chant_icon.png"
import TeachMeIcon from "@/assets/teach_me_icon.png"
import LearnMoreIcon from "@/assets/learn_more_icon.png"
import ChantDarkIcon from "@/assets/chant_dark_icon.png"
import TeachMeDarkIcon from "@/assets/teach_me_dark_icon.png"
import LearnMoreDarkIcon from "@/assets/learn_more_dark_icon.png"
import { useState } from "react"
import { Mode } from "@/types/types"
import { useNavigate } from "react-router-dom"
import useModeStore from "@/store/modeStore"

const iconMap = {
  chant: {
    default: ChantIcon,
    active: ChantDarkIcon,
  },
  teach_me: {
    default: TeachMeIcon,
    active: TeachMeDarkIcon,
  },
  learn_more: {
    default: LearnMoreIcon,
    active: LearnMoreDarkIcon,
  },
} as const

const LeftScroll = () => {
  const { mode, setMode } = useModeStore()
  const [hovered, setHovered] = useState<Mode | null>(null)

  const navigate = useNavigate()

  const getIcon = (item: Mode) => {
    const isActive = mode === item || hovered === item
    return isActive ? iconMap[item].active : iconMap[item].default
  }

  return (
    <div
      className="flex flex-col h-[600px] w-[250px] justify-center pb-8 gap-10 items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${VScrollImg})`,
        backgroundSize: "100% 100%",
        minWidth: "250px",
      }}
    >
      {Object.values(Mode).map((item) => (
        <div
          key={item}
          onClick={() => {
            setMode(item as Mode)
            navigate(`/${item.split("_").join("-")}`)
          }}
          onMouseEnter={() => setHovered(item as Mode)}
          onMouseLeave={() => setHovered(null)}
          className="flex flex-col items-center p-2 cursor-pointer font-bold text-darkbrown"
        >
          <h4
            className={`${
              mode === item || hovered === item
                ? "font-bold text-darkorange"
                : ""
            }`}
          >
            {item
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h4>
          <img
            src={getIcon(item as Mode)}
            alt={`${item.charAt(0).toUpperCase() + item.slice(1)} Mode`}
            height="64px"
            width="64px"
          />
        </div>
      ))}
    </div>
  )
}

export default LeftScroll

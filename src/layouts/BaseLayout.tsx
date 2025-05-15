import BgTop from "@/assets/bg_top.png"
import BgBottom from "@/assets/bg_bottom.png"
import MeityLogo from "@/assets/meity-logo.png"
import SFLogo from "@/assets/sf-logo.png"
import HydLogo from "@/assets/uohyd-logo.png"

interface BaseLayoutProps {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="relative bg-[#F5F3E7] overflow-hidden min-h-screen">
      <img
        src={BgTop}
        alt="background top"
        className="absolute top-0 left-0 h-[90vh] w-full max-h-[200px]"
      />
      <img
        src={BgBottom}
        alt="background bottom"
        className="absolute bottom-0 left-0 w-full max-h-[200px]"
      />
      <div className="relative z-10">{children}</div>
      <footer className="flex justify-around p-4 relative z-10">
        <div>
          <h2 className="font-bold text-xl text-darkbrown mb-2 ml-4">
            Sponsored By:
          </h2>
          <img
            src={MeityLogo}
            alt="Meity Logo"
            onClick={() => handleClick("https://www.meity.gov.in/")}
            className="hover:cursor-pointer h-[6rem]"
          />
        </div>
        <div>
          <h2 className="font-bold text-xl text-darkbrown mb-2 text-center">
            Implemented By:
          </h2>
          <div className="flex gap-2">
            <img
              src={SFLogo}
              alt="Samskriti Foundation Logo"
              onClick={() => handleClick("https://samskritifoundation.org")}
              className="hover:cursor-pointer h-[6rem]"
            />
            <img
              src={HydLogo}
              alt="UOHYD Logo"
              onClick={() => handleClick("https://sanskrit.uohyd.ac.in/")}
              className="hover:cursor-pointer h-[6rem]"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BaseLayout

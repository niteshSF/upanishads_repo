import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import EnterButton from "../assets/button_texture.png"
import Audio from "../assets/bg_audio.mp3"
import FallbackImage from "../assets/background/bg_static_image.png"

const Static_Home_Page = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsAudioPlaying(!isAudioPlaying)
    }
  }

  return (
    <div className="relative w-screen h-screen ">
      <img
        src={FallbackImage}
        alt="Fallback"
        className={`absolute w-full h-full object-cover transition-opacity duration-1000`}
      />

      {/* Audio Element */}
      <audio ref={audioRef} className="hidden " autoPlay loop muted={false}>
        <source src={Audio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      {/* Audio Toggle Button (Speaker Icon) */}
      <div className="fixed bottom-68 right-0 p-2 transform -translate-x-1/2 cursor-pointer">
        <button
          onClick={toggleAudio}
          className="bg-white p-1 rounded-full focus:outline-none"
        >
          <FontAwesomeIcon
            icon={isAudioPlaying ? faVolumeUp : faVolumeMute}
            size="lg"
            className="text-black"
          />
        </button>
      </div>

      {/* 1st Enter Button with External Link */}
      <div className="fixed bottom-[-1%] right-[46%] h-[24vh] max-w-[50vh] opacity-0">
        <a
          href="/isha"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={EnterButton}
            alt="Enter Button 1"
            className="h-[80%] w-[80%] object-contain cursor-pointer opacity-0"
          />
        </a>
      </div>

      {/* 2nd Enter Button with External Link */}
      <div className="fixed bottom-[-1%] right-[24%] h-[24vh] max-w-[50vh] opacity-0">
        <a
          href="https://test1.samskritifoundation.org/kena/"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={EnterButton}
            alt="Enter Button 2"
            className="h-[80%] w-[80%] object-contain cursor-pointer opacity-0"
          />
        </a>
      </div>

      {/* 3rd Enter Button with External Link */}
      <div className="fixed bottom-[-1%] right-[1%] h-[24vh] max-w-[50vh] opacity-0">
        <a
          href="/katho"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={EnterButton}
            alt="Enter Button 3"
            className="h-[80%] w-[80%] object-contain cursor-pointer opacity-0"
          />
        </a>
      </div>
    </div>
  )
}

export default Static_Home_Page

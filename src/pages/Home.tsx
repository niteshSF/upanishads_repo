import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import EnterButton from "../assets/button_texture.png"
import Audio from "../assets/bg_audio.mp3"
import FallbackImage from "../assets/background/bg_static_image.png"
import VidAud from "../assets/background/bg.mp4"
import { Link } from "react-router-dom"

const Home = () => {
  // Added this new state and function
  const [videoEnded, setVideoEnded] = useState(false)

  useEffect(() => {
    const isVideoAlreadyEnded = sessionStorage.getItem("videoEnded")
    if (isVideoAlreadyEnded === "true") {
      setVideoEnded(true)
    }
  }, [])

  const [fadingOut, setFadingOut] = useState(false)

  const handleVideoEnd = () => {
  setFadingOut(true);
  sessionStorage.setItem("videoEnded", "true"); // Persist the video end state
  setTimeout(() => {
    setVideoEnded(true);
  }, 1000);
}


  // till here

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
      {/* In place of video tag, I have merged the video and static page also   */}
      <div className="relative w-full h-full">
        {!videoEnded ? (
          <>
            <video
              id="bgVideo"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                fadingOut ? "opacity-0" : "opacity-100"
              }`}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
            >
              <source src={VidAud} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Skip Button */}
            <button
              onClick={handleVideoEnd}
              className="absolute bottom-24 right-6 z-10 bg-black bg-opacity-50 text-white px-5 py-3 rounded hover:bg-opacity-75 transition"
            >
              Skip
            </button>
          </>
        ) : (
          <img
            src={FallbackImage}
            alt="Fallback"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100`}
          />
        )}
      </div>
      {/* --- till here --- */}

      {/* Audio Element */}
      <audio ref={audioRef} className="hidden " autoPlay loop muted={false}>
        <source src={Audio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      {/* Audio Toggle Button (Speaker Icon) */}
      <div
        className="fixed top-4 right-4 p-2 cursor-pointer z-50
      "
      >
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
        <Link to="/isha" // Add Link Here
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={EnterButton}
            alt="Enter Button 1"
            className="h-[80%] w-[80%] object-contain cursor-pointer opacity-0"
          />
        </Link>
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
        <Link to="/katho"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={EnterButton}
            alt="Enter Button 3"
            className="h-[80%] w-[80%] object-contain cursor-pointer opacity-0"
          />
        </Link>
      </div>
    </div>
  )
}

export default Home

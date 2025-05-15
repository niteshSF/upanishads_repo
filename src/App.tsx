import { Routes, Route, Navigate } from "react-router-dom"
import AboutUsPage from "./pages/AboutUsPage"
import CreditsPage from "./pages/CreditsPage"
import HelpPage from "./pages/HelpPage"
import DisclaimerPage from "./pages/DisclaimerPage"
import LearnMorePage from "./pages/LearnMorePage"
import TeachMePage from "./pages/TeachMePage"
import ChantPage from "./pages/ChantPage"
import FirstPage from "./pages/FirstPage"
import IntroductionPage from "./components/app/IntroductionPage"
import Home from "./pages/Home"
import Static_Home_Page from "./pages/Static_Home_Page"
import KathoPage from "./pages/KathoPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/static_home_page" element={<Static_Home_Page />} />
      <Route path="/isha" element={<FirstPage />} />
      <Route path="/katho" element={<KathoPage />} />
      <Route path="/introduction" element={<IntroductionPage />} />
      <Route path="/chant" element={<ChantPage />} />
      <Route path="/teach-me" element={<TeachMePage />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

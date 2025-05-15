import Header from "@/components/shared/Header"
import BaseLayout from "@/layouts/BaseLayout"
import LeftScroll from "@/components/app/LeftScroll"
import SearchBar from "@/components/app/SearchBar"
import RightScroll from "@/components/app/RightScroll"
import SutraView from "@/components/app/SutraView"
import MeaningView from "@/components/app/MeaningView"
import ButtonsPanel from "@/components/app/ButtonsPanel"

export default function ChantPage() {
  return (
    <BaseLayout>
      <Header />
      <div className="flex justify-center  gap-4 mt-5">
        <LeftScroll />
        <div className="flex-grow max-w-4xl">
          <SearchBar />
          <SutraView />
          <MeaningView />
          <ButtonsPanel />
        </div>
        <RightScroll isCommentary={true} />
      </div>
    </BaseLayout>
  )
}

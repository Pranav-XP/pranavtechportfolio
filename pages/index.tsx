import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-neutral-500 scrollbar-track-neutral-900">
      <Navbar/>
      <div className="flex items-center justify-between gap-4">
      <aside className="hidden md:flex fixed h-full w-16 left-0 bottom-0">
        <LeftSide></LeftSide>
      </aside>
      <div className="flex flex-col items-center mx-auto gap-20">
      <div id="home"></div>
        <Banner></Banner>
        <Tools></Tools>
      </div>
      <aside className="hidden md:flex fixed h-full w-16 right-0 bottom-1/2">
        <RightSide></RightSide>
      </aside>
      </div>
      <div className="sm:hidden w-full h-10 bottom-0 flex">
        <Footer></Footer>
        </div>
      </main>
  )
}

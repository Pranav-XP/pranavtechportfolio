import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll">
      <Navbar/>
      <div className="w-full h-[88vh] 
      xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-16 h-full fixed left-0 bottom-0">
          <LeftSide></LeftSide>
          </div>
        <div className="items-center h-[88vh] mx-auto p-4">
          <Banner/>
          <Tools/>
          </div>
        <div className="hidden xl:inline-flex w-16 h-full fixed right-0 bottom-1"><RightSide></RightSide></div>
      </div>
      {/* <div className="hidden xl:inline-flex w-full fixed left-0 bottom-0 items-center"><Footer></Footer></div> */}
      </main>
  )
}

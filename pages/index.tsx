import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";

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
        <div className="h-[88vh] mx-auto p-4"><Banner></Banner></div>
        <div className="hidden xl:inline-flex w-16 h-full fixed right-0 bottom-1"><RightSide></RightSide></div>
      </div>
      </main>
  )
}

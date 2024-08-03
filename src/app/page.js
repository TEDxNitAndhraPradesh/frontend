// import Image from "next/image";
// import NavBar from "@/components/NavBar";
import Event from "@/components/Event";
import HomeAbout from "@/components/HomeAbout";
import HomeFirst from "@/components/HomeFirst";
export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <HomeFirst />
      <Event />
      <HomeAbout />
      {/* <HomeFirst /> */}
    </>
  );
}

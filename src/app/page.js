import Event from "@/components/Event";
import Footer from "@/components/Footer";
import HomeFirst from "@/components/HomeFirst";
import dynamic from "next/dynamic";
const AnimatedText = dynamic(() => import("../components/HomeAbout"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <HomeFirst />
      <Event />
      <AnimatedText />
      <Footer/>
    </>
  );
}

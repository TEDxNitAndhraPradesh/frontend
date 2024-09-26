import Landing from "@/components/Landing";
import PastSpeakers from "@/components/PastSpeakers";
import dynamic from "next/dynamic";
const AnimatedText = dynamic(() => import("../components/HomeAbout"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Landing />
      <AnimatedText />
      <PastSpeakers />
    </>
  );
}

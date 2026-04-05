import Hero from "@/components/Hero";
import AboutComponent from "@/components/AboutComponent";
import Partners from "@/components/Partners";
import Qualities from "@/components/Qualities";
import Request from "@/components/Request";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Qualities />
      <Request />
      <AboutComponent />
    </>
  );
}

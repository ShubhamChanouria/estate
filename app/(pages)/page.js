import Navbar from "../components/Navbar";
import AboveTheFold from "../components/AboveTheFold";
import AboutSection from "../components/AboutSection";
import GallerySlider from "../components/GallerySlider";
import PopularMetrics from "../components/PopularMetrics";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboveTheFold />
      <AboutSection/>
      <GallerySlider/>
      <PopularMetrics/>
    </>
  );
}

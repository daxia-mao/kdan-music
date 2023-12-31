import Header from "@/stories/Kdan Music Book/Pages/HomePage/Header";
import Trust from "@/stories/Kdan Music Book/Pages/HomePage/Trust";
import MusicPreview from "@/stories/Kdan Music Book/Pages/HomePage/MusicPreview";
import PopularCategories from "@/stories/Kdan Music Book/Pages/HomePage/PopularCategories";
import WhyUs from "@/stories/Kdan Music Book/Pages/HomePage/WhyUs";
import Plan from "@/stories/Kdan Music Book/Pages/HomePage/Plan";
import Testmonials from "@/stories/Kdan Music Book/Pages/HomePage/Testmonials";
import Footer from "@/stories/Kdan Music Book/Pages/HomePage/Footer";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Trust />
      <MusicPreview />
      <PopularCategories />
      <WhyUs />
      <Plan />
      <Testmonials />
      <Footer />
    </main>
  );
}

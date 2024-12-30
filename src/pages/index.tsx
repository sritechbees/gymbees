import Header from "@/layout/header";
import HeroSection from "@/home/HeroSection";
import Home1 from "@/home/home1";
import Footer from "@/layout/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900">
      <Header/>
<HeroSection/>
<Home1/>
<Footer/>

    </div>
  );
}

import Ads from "./components/Ads/Ads";
import BlogNews from "./components/BlogNews/BlogNews";
import Contact from "./components/Contact/Contact";
import CustomersComment from "./components/CustomersComment/CustomersComment";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Plans from "./components/Plans/Plans";
import SearchBox from "./components/SearchBox/SearchBox";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <HeroSection />
      <SearchBox />
      <Services />
      <Ads />
      <Plans />
      <Contact />
      <CustomersComment />
      <BlogNews />
      <Footer />
    </>
  );
}

export default App;

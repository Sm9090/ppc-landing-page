import Footer from "../components/Footer";
import Acheivement from "../components/Home/Acheivement";
import CaseStudies from "../components/Home/CaseStudies";
import CounterSection from "../components/Home/CounterSection";
import Industries from "../components/Home/Industries";
import MobileServicesSection from "../components/Home/MobileServicesSection";
import RecentBlogs from "../components/Home/RecentBlogs";
import RequestServices from "../components/Home/RequestServices";
import Section1 from "../components/Home/Section1";
import ServicesTabs from "../components/Home/ServicesTabs";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="undefined relative z-50 ">
      <main>
       <Section1 />
        <CounterSection />
       <MobileServicesSection />
       <RequestServices />
       <CaseStudies />
       <Acheivement />
       <ServicesTabs />
       <Industries />
       <Testimonials />
       <RecentBlogs />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default Home;



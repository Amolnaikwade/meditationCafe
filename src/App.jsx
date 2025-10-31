import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import YogaClassesSection from "./components/YogaClassesSection";
import BenefitsSection from "./components/BenefitsSection";
import InstructorSection from "./components/InstructorSection";
import InstructorGallery from "./components/InstructorGallery";
import SubscriptionPlans from "./components/SubscriptionPlans";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";
import PhotoPage from "./components/PhotoPage";
import Navbar from "./components/Navbar";
import BlogSection from "./components/BlogSection";
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
              <Navbar/>
                <HeroSection />
                <FeaturesSection />
                <YogaClassesSection />
                <BenefitsSection />
                <InstructorSection />
                <InstructorGallery />
                <SubscriptionPlans />
                <TestimonialSection />
                <BlogSection />
                <FooterSection />
              </>
            }
          />

          {/* Photo Gallery Page */}
          <Route path="/photos" element={<PhotoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

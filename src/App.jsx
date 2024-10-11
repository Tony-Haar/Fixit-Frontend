import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import AuthPage from "./pages/authPage/authPage";
import HomePage from "./pages/homePage/HomePage";
import ProfilesPage from "./pages/profilesPage/ProfilesPage";
import BenefitsPage from "./pages/benefitsPage/BenefitsPage";
import HIWPage from "./pages/hiwPage/HIWPage";
import DomainServiceDetailPage from "./pages/domainServiceDetailPage/DomainServiceDetailPage";
import FindProfessionalPage from "./pages/findProfessionalPage/FindProfessionalPage";
import ProfessionalProfilePage from "./pages/professionalProfilePage/ProfessionalProfilePage";
import AboutUsPage from "./pages/aboutUsPage.jsx/AboutUsPage";
import RegistrationForm from "./pages/registrationForm/RegistrationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/auth/:page" element={<AuthPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route
            path="/professional-profiles"
            element={<ProfilesPage />}
          ></Route>
          <Route path="/benefits" element={<BenefitsPage />}></Route>
          <Route path="/how-it-works" element={<HIWPage />}></Route>
          <Route
            path="/domain/service-details"
            element={<DomainServiceDetailPage />}
          ></Route>
          <Route path="/find-pro" element={<FindProfessionalPage />}></Route>
          <Route
            path="/pro-profile"
            element={<ProfessionalProfilePage />}
          ></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route
            path="/registration-form"
            element={<RegistrationForm />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

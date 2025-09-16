import { Sectoin1 } from "../Sections/HomePageSections/Sectoin1";
import { Section2 } from "../Sections/HomePageSections/Section2";
import { Section3 } from "../Sections/HomePageSections/Section3";
import { Section4 } from "../Sections/HomePageSections/Section4";
import { Section5 } from "../Sections/HomePageSections/Section5";
import Footer from "../Components/Footer";
import { Section6 } from "../Sections/HomePageSections/Section6";
import NavBar from "../Components/common/NavBar.jsx";
export const HomePage = () => {
  return (
    <div>
      <div className="page ">
        <NavBar />
        <Sectoin1 />
        <Section2 />
        <Section3 />
      </div>
      <Section4 />
      <div className="page bg-bg2">
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
};

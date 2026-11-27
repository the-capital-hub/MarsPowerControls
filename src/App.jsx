import { Route, Routes } from "react-router-dom";
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import SolarSolutions from "./Pages/SolarSolutions/SolarSolutions";
import Industries from "./Pages/Industries/Industries";
import Contact from "./Pages/Contact/Contact";
import ElectricalSolutions from "./servicesSubPage/ElectricalSolutions";
import IndustrialFabrication from "./servicesSubPage/IndustrialFabrication/IndustrialFabrication";
import AutomationSolutions from "./servicesSubPage/AutomationSolutions/AutomationSolutions";
import PrefabStructures from "./servicesSubPage/PrefabStructures/PrefabStructures";
import InteriorDesign from "./servicesSubPage/InteriorDesign/InteriorDesign";
import DecorativePlantStands from "./servicesSubPage/DecorativePlantStands/DecorativePlantStands";
import AgriculturalFabrication from "./servicesSubPage/AgriculturalFabrication/AgriculturalFabrication";
import TrussWork from "./servicesSubPage/TrussWork/TrussWork";
import MetalFurniture from "./servicesSubPage/MetalFurniture/MetalFurniture";
import SSMSWorks from "./servicesSubPage/SSMSWorks/SSMSWorks";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/electrical-solutions"
            element={<ElectricalSolutions />}
          />
          <Route
            path="/services/industrial-fabrication"
            element={<IndustrialFabrication />}
          />
          <Route
  path="/services/automation-solutions"
  element={<AutomationSolutions />}
/>
<Route
  path="/services/prefab-structures"
  element={<PrefabStructures />}
/>
<Route
  path="/services/interior-design"
  element={<InteriorDesign />}
/>
<Route
  path="/services/decorative-plant-stands"
  element={<DecorativePlantStands />}
/>
<Route
  path="/services/agricultural-fabrication"
  element={<AgriculturalFabrication />}
/>
<Route
  path="/services/truss-work"
  element={<TrussWork />}
/>
<Route
  path="/services/metal-furniture"
  element={<MetalFurniture />}
/>
<Route
  path="/services/ss-ms-works"
  element={<SSMSWorks />}
/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/solar-solutions" element={<SolarSolutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <AIFloatingButton />
    </>
  );
}

export default App;

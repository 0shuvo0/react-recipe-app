import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QouteSection from "./components/QuoteSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QouteSection />
      </div>
    </div>
  );
}

export default App;

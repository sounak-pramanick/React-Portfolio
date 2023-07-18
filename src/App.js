import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

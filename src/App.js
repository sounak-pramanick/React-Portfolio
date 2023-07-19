import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";


function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="">
      <Navbar />
      <Home showLinks={showLinks} setShowLinks={setShowLinks} />
      <About />
      <Experience />
      <Portfolio />
      <Technologies />
      <Contact />
      <SocialLinks hiddenLinks={showLinks ? '' : 'hidden'} />
    </div>
  );
}

export default App;

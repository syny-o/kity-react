import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Hero2 from "./components/Hero/Hero2";
import { Projects } from "./components/MyProjects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import GroupButtons from "./components/Shared/GroupButtons";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Hero2 />
        <Gallery />
        {/* <Technologies /> */}
        <Experience />
        {/* <Projects /> */}
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;

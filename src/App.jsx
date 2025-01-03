import Navbar from "./components/Navbar/Navbar";
import Hero2 from "./components/Hero/Hero2";
import Gallery from "./components/Gallery/Gallery";
import PriceList from "./components/PriceList/PriceList";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero2 />
        <Gallery />
        <PriceList />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;

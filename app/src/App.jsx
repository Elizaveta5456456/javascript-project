import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Collection from "./components/Collection";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="hero-spacer"></div>
      <main className="main-content">
        <Catalog />
        <Collection />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

export default App;

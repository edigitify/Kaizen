import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./pages/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/transparent" element={<Transperent />} />
          <Route path="/opaque" element={<Opake />} />
          <Route path="/frosted" element={<Frosted />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/partner" element={<Partner />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

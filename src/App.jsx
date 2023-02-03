import Nav from "./components/nav";
import Home from "./pages/home";
import Social from "./pages/social";
import Sport from "./pages/sport";
import Culture from "./pages/Culture";
import Economy from "./pages/Economy";
import Politics from "./pages/Politics";
import Tecnology from "./pages/Tecnology";
import Article from "./pages/articles/article";
import Footer from "./components/footer";
import NotFoundPage from "./pages/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/technology" element={<Tecnology />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

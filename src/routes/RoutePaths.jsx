import { Routes, Route } from "react-router-dom";
import { Home, Schools, Parents, About, Contact, NotFound } from "../pages/index";

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/parents" element={<Parents />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutePaths;

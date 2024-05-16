import { Routes, Route } from "react-router-dom";
import ProductsList from './componenets/ProductsList';
import Navbar from './componenets/Navbar';
import Slider from './componenets/Slider';
import About from './componenets/About'
import ProductDetails from './componenets/ProductDetails'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <ProductsList />
        </>
        } />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

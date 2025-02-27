import ProductCard from './components/ProductCard';
import "./App.css";

function App() {
  return (
    <div>
      <ProductCard 
        name="Audio Setup" 
        price="LKR 3250/-"
        description="High-quality headset with noise cancellation"
        photoUrl="https://img.drz.lazcdn.com/static/lk/p/0d8692671a30c703b2804b0c92e53359.jpg_400x400q80.jpg_.webp"
        alt="P9 Model Bluetooth Wireless Headset"
      />

      {/* Example with correct props */}
      <ProductCard 
        name="Gaming Headphones" 
        price="LKR 5000/-"
        description="Immersive gaming experience with surround sound"
        photoUrl="https://img.drz.lazcdn.com/static/lk/p/3ed3ffac48f42292db4a5c44b43a72be.jpg_720x720q80.jpg_.webp" data-spm-anchor-id="a2a0e.pdp_revamp.gallery.i2.25351b2al0eHxQ"
        alt="Gaming Headphones"
      />
    </div>
  );
}

export default App;

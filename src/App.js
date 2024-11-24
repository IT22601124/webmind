
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "products":
        return <Products />;
      case "contact":
        return <Contact />;
      default:
        return <div>404 - Not Found</div>;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
    </div>
  );
}

export default App;

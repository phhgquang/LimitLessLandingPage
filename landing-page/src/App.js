import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;

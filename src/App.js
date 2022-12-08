import Navbar from './components/Navbar.js';
// import Hero from './components/Hero.js';
import Card from './components/Card.js';

function App() {
  return (
    <>
    <Navbar />
    {/* <Hero /> */}
    <Card 
      img="./images/kayaking.jpeg"
      rating={5.0}
      reviewCount={99}
      country="Ireland"
      title="Daytime/Sunset Kayak Trip"
      price={35}
    />
    </>
  );
}

export default App;

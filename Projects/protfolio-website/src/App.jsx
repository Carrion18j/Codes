import { Cards, ClientReview, FEQ, Hero, NavBar, Button } from "./components";

function App() {
  return (
    <div className="bg-primary">
      <NavBar />
      <Hero />
      <Cards />
      <ClientReview />
      <FEQ />
    </div>
  );
}

export default App;

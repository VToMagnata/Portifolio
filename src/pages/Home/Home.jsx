import Navbar from "./components/Navbar";
import MovingBalls from "./components/MovingBalls";
import Presentation from "./components/Presentation";
import "../../css/App.css";

function Home() {
  return (
    <main className="page1">
      <Navbar />
      <div className="container">
        <MovingBalls />
        <Presentation />
      </div>
    </main>
  );
}

export default Home;

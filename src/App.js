import './App.css';
import Navbar from "./Components/Navbar";
import Reviews from "./Components/reviews";
import Screen from "./images/Screen.png"
import Banner from "./Components/blogs/blogs"

function App() {
  return (
    <div className="App">
      <Navbar />
      <img alt="" className='img' src={Screen}></img>
      <Banner />
      <Reviews />
       </div>
  );
}

export default App;
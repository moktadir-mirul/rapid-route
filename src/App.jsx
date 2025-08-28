import "./App.css";
import { Outlet } from "react-router";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="text-primary">
      <Banner></Banner>
    </div>
  );
}

export default App;

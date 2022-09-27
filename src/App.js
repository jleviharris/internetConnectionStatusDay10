import "./App.css";
import NetworkStatus from "./Components/NetworkStatus";

function App() {
  const status = NetworkStatus();
  return (
    <div className="App">
      <h1>Internet Connection Status</h1>
      <h2>{status ? "Online" : "Offline"}</h2>
    </div>
  );
}

export default App;

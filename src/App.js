import "./App.css";
import NetworkStatus from "./Components/NetworkStatus";


function App() {
  const status = NetworkStatus();
  return (
    <div className={status ? "AppOn" : "AppOff"}>
      <h1>Internet Connection Status</h1>
      {status ? <i class="bi bi-wifi"></i> : <i class="bi bi-wifi-off"></i>}

      <h2>{status ? "Online" : "Offline"}</h2>
    </div>
  );
}

export default App;

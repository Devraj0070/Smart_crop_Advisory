import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🌱 KrishiMitra</h2>

      <nav>
        <Link to="/">🏠 Dashboard</Link>
        <Link to="/crop">🌾 Crop Recommendation</Link>
        <Link to="/soil">🧪 Soil Analysis</Link>
        <Link to="/weather">🌦️ Weather</Link>
        <Link to="/disease">🦠 Disease Detection</Link>
      </nav>

      <div className="sidebar-bottom">
        <Link to="/profile">👤 Profile</Link>
      </div>
    </div>
  );
}

export default Sidebar;